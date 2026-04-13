import { describe, it, expect } from "vitest";
import { siteConfig, stack, mainProjects, sideProjects } from "@/constants/content";

describe("siteConfig", () => {
  it("has all required fields", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.phone).toBeTruthy();
    expect(siteConfig.phoneHref).toMatch(/^tel:\+/);
    expect(siteConfig.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.github).toMatch(/^https:\/\//);
    expect(siteConfig.tagline).toBeTruthy();
  });
});

describe("stack", () => {
  it("has all categories with items", () => {
    expect(stack.frontend.length).toBeGreaterThan(0);
    expect(stack.backend.length).toBeGreaterThan(0);
    expect(stack.devops.length).toBeGreaterThan(0);
    expect(stack.tools.length).toBeGreaterThan(0);
  });
});

describe("projects", () => {
  it("main projects have required fields", () => {
    mainProjects.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.description).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
      expect(p.status).toBeTruthy();
      expect(p.color).toMatch(/^#/);
    });
  });

  it("side projects have required fields", () => {
    sideProjects.forEach((p) => {
      expect(p.name).toBeTruthy();
      expect(p.tech.length).toBeGreaterThan(0);
    });
  });
});
