import { describe, it, expect } from "vitest";
import { siteConfig, projects, stack, colorThemes } from "@/constants/content";

describe("siteConfig", () => {
  it("has all required fields", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.phoneHref).toMatch(/^tel:\+/);
    expect(siteConfig.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.github).toMatch(/^https:\/\//);
    expect(siteConfig.tagline).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
  });
});

describe("projects", () => {
  it("has at least 4 projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);
  });

  it("each project has required fields", () => {
    projects.forEach((p) => {
      expect(p.id).toBeTruthy();
      expect(p.name).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.gradient).toContain("from-");
      expect(p.accent).toMatch(/^#/);
    });
  });
});

describe("stack", () => {
  it("has all 4 categories", () => {
    expect(stack).toHaveLength(4);
    const cats = stack.map((s) => s.category);
    expect(cats).toContain("Frontend");
    expect(cats).toContain("Backend");
    expect(cats).toContain("DevOps");
    expect(cats).toContain("Outils");
  });
});

describe("colorThemes", () => {
  it("has at least 5 themes", () => {
    expect(colorThemes.length).toBeGreaterThanOrEqual(5);
  });

  it("each theme has valid hex colors", () => {
    colorThemes.forEach((t) => {
      expect(t.value).toMatch(/^#[0-9a-f]{6}$/i);
      expect(t.hover).toMatch(/^#[0-9a-f]{6}$/i);
    });
  });
});
