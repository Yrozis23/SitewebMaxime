"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const vertexShader = `
  uniform float uTime;
  uniform vec2 uMouse;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  vec4 permute(vec4 x){ return mod(((x*34.0)+1.0)*x, 289.0); }
  vec4 taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
      i.z + vec4(0.0, i1.z, i2.z, 1.0))
      + i.y + vec4(0.0, i1.y, i2.y, 1.0))
      + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  void main() {
    vec3 pos = position;
    float t = uTime;

    // Gentle liquid displacement — keeps shape mostly spherical
    float d = 0.0;
    d += snoise(pos * 1.0 + t * 0.2) * 0.18;
    d += snoise(pos * 2.0 + t * 0.3 + 5.0) * 0.10;
    d += snoise(pos * 4.0 + t * 0.5 + 10.0) * 0.05;

    // Mouse influence — soft push
    float mDist = length(pos.xy - uMouse * 1.2);
    d += smoothstep(1.8, 0.0, mDist) * 0.12;

    pos += normal * d;
    pos.xy += uMouse * smoothstep(2.0, 0.0, mDist) * 0.08;

    vDisplacement = d;
    vNormal = normalize(normalMatrix * normal);
    vPosition = (modelViewMatrix * vec4(pos, 1.0)).xyz;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
  }
`;

const fragmentShader = `
  uniform vec3 uColor;
  uniform vec3 uColor2;
  uniform float uTime;
  varying vec3 vNormal;
  varying vec3 vPosition;
  varying float vDisplacement;

  void main() {
    vec3 viewDir = normalize(-vPosition);

    // Fresnel — glassy edges
    float fresnel = pow(1.0 - max(dot(viewDir, vNormal), 0.0), 3.5);

    // Color gradient — shifts over time and surface position
    float shift = vDisplacement * 5.0 + sin(uTime * 0.3) * 0.4;
    vec3 col = mix(uColor, uColor2, sin(shift) * 0.5 + 0.5);

    // Third color accent in the crevices
    vec3 deepColor = uColor * 0.4;
    col = mix(col, deepColor, smoothstep(0.0, -0.15, vDisplacement));

    // Subsurface scattering — light bleeding through
    float sss = pow(max(dot(viewDir, -vNormal), 0.0), 2.0) * 0.25;
    col += uColor * sss;

    // 3-point lighting
    vec3 light1 = normalize(vec3(1.0, 1.2, 1.0));
    vec3 light2 = normalize(vec3(-0.6, 0.4, 0.8));
    vec3 light3 = normalize(vec3(0.0, -1.0, 0.5));
    float diff = max(dot(vNormal, light1), 0.0) * 0.35 + 0.55;
    diff += max(dot(vNormal, light2), 0.0) * 0.18;
    diff += max(dot(vNormal, light3), 0.0) * 0.08;

    // Double specular — sharp + broad
    vec3 half1 = normalize(light1 + viewDir);
    vec3 half2 = normalize(light2 + viewDir);
    float specSharp = pow(max(dot(vNormal, half1), 0.0), 80.0) * 0.9;
    float specBroad = pow(max(dot(vNormal, half2), 0.0), 16.0) * 0.2;

    // Rim light — subtle colored outline
    float rim = pow(fresnel, 2.0) * 0.35;
    vec3 rimColor = mix(uColor2, vec3(1.0), 0.5);

    // Iridescent shimmer on the surface
    float irid = sin(vDisplacement * 12.0 + uTime * 1.5) * 0.04;

    vec3 finalColor = col * diff + specSharp + specBroad + rim * rimColor + irid;
    float alpha = 0.28 + fresnel * 0.62 + specSharp * 0.12;

    gl_FragColor = vec4(finalColor, alpha);
  }
`;

function Blob({ accentColor }: { accentColor: [number, number, number] }) {
  const meshRef = useRef<THREE.Mesh>(null);

  const uniforms = useMemo(() => ({
    uTime: { value: 0 },
    uMouse: { value: new THREE.Vector2(0, 0) },
    uColor: { value: new THREE.Color(accentColor[0] / 255, accentColor[1] / 255, accentColor[2] / 255) },
    uColor2: { value: new THREE.Color(
      Math.min(1, accentColor[0] / 255 * 0.6),
      Math.min(1, accentColor[1] / 255 * 1.3),
      Math.min(1, accentColor[2] / 255 * 0.8),
    ) },
  }), []);

  useEffect(() => {
    uniforms.uColor.value.setRGB(accentColor[0] / 255, accentColor[1] / 255, accentColor[2] / 255);
    uniforms.uColor2.value.setRGB(
      Math.min(1, accentColor[0] / 255 * 0.6),
      Math.min(1, accentColor[1] / 255 * 1.3),
      Math.min(1, accentColor[2] / 255 * 0.8),
    );
  }, [accentColor, uniforms]);

  const mouseSmooth = useRef(new THREE.Vector2(0, 0));
  const mouseTarget = useRef(new THREE.Vector2(0, 0));

  useEffect(() => {
    function onMove(e: MouseEvent) {
      mouseTarget.current.set(
        (e.clientX / window.innerWidth) * 2 - 1,
        -(e.clientY / window.innerHeight) * 2 + 1
      );
    }
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  useFrame((_, delta) => {
    if (!meshRef.current) return;
    uniforms.uTime.value += delta * 0.7;
    mouseSmooth.current.lerp(mouseTarget.current, 0.025);
    uniforms.uMouse.value.copy(mouseSmooth.current);
    meshRef.current.rotation.y += delta * 0.08;
    meshRef.current.rotation.x = Math.sin(uniforms.uTime.value * 0.25) * 0.06;
  });

  return (
    <mesh ref={meshRef} scale={1.6}>
      <icosahedronGeometry args={[0.4, 80]} />
      <shaderMaterial
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
        transparent
        depthWrite={false}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function FloatingParticles({ color }: { color: [number, number, number] }) {
  const groupRef = useRef<THREE.Group>(null);
  const particles = useMemo(() =>
    Array.from({ length: 20 }, (_, i) => ({
      pos: [
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 2.5,
        (Math.random() - 0.5) * 1.5,
      ] as [number, number, number],
      size: 0.006 + Math.random() * 0.012,
      speed: 0.2 + Math.random() * 0.4,
      offset: Math.random() * Math.PI * 2,
    })),
  []);

  useFrame(({ clock }) => {
    if (!groupRef.current) return;
    const t = clock.getElapsedTime();
    groupRef.current.children.forEach((child, i) => {
      const p = particles[i];
      child.position.y = p.pos[1] + Math.sin(t * p.speed + p.offset) * 0.3;
      child.position.x = p.pos[0] + Math.cos(t * p.speed * 0.7 + p.offset) * 0.15;
    });
  });

  const col = new THREE.Color(color[0] / 255, color[1] / 255, color[2] / 255);

  return (
    <group ref={groupRef}>
      {particles.map((p, i) => (
        <mesh key={i} position={p.pos}>
          <sphereGeometry args={[p.size, 6, 6]} />
          <meshBasicMaterial color={col} transparent opacity={0.35 + Math.random() * 0.25} />
        </mesh>
      ))}
    </group>
  );
}

function GlowRing({ color }: { color: [number, number, number] }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    if (!ringRef.current) return;
    const t = clock.getElapsedTime();
    ringRef.current.rotation.z = t * 0.05;
    const mat = ringRef.current.material as THREE.MeshBasicMaterial;
    mat.opacity = 0.04 + Math.sin(t * 0.5) * 0.02;
  });

  return (
    <mesh ref={ringRef}>
      <ringGeometry args={[0.7, 0.75, 64]} />
      <meshBasicMaterial
        color={new THREE.Color(color[0] / 255, color[1] / 255, color[2] / 255)}
        transparent
        opacity={0.05}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

function hexToRgb(hex: string): [number, number, number] {
  const h = hex.replace("#", "");
  return [parseInt(h.substring(0, 2), 16), parseInt(h.substring(2, 4), 16), parseInt(h.substring(4, 6), 16)];
}

export default function HeroBlob() {
  const [accent, setAccent] = useState<[number, number, number]>([99, 102, 241]);

  useEffect(() => {
    function readAccent() {
      const v = getComputedStyle(document.documentElement).getPropertyValue("--color-accent").trim();
      if (v.startsWith("#")) setAccent(hexToRgb(v));
    }
    readAccent();
    const id = setInterval(readAccent, 500);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="w-full h-full" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 4], fov: 45 }}
        dpr={[1, 2]}
        style={{ background: "transparent" }}
        gl={{ alpha: true, antialias: true, premultipliedAlpha: false }}
      >
        <ambientLight intensity={0.35} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <directionalLight position={[-3, -1, 3]} intensity={0.25} color={new THREE.Color(accent[0] / 255, accent[1] / 255, accent[2] / 255)} />
        <Blob accentColor={accent} />
        <FloatingParticles color={accent} />
        <GlowRing color={accent} />
      </Canvas>
    </div>
  );
}
