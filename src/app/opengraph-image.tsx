import { ImageResponse } from "next/og";

export const alt = "Maxime Dumesny — Développeur Web & SaaS freelance";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "linear-gradient(135deg, #09090b 0%, #18181b 60%, #1e1b4b 100%)",
          color: "#fafafa",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#a5b4fc", letterSpacing: 6, textTransform: "uppercase" }}>
          Développeur Web & SaaS · Bretagne
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, fontWeight: 600, lineHeight: 1.05, letterSpacing: -2 }}>
            Des logiciels modernes pour tous.
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#a1a1aa" }}>
            Sites sur mesure · SaaS · Refontes
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 32, fontWeight: 600 }}>Maxime Dumesny · maximedumesny.fr</div>
      </div>
    ),
    size
  );
}
