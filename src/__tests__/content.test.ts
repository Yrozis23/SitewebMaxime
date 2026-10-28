import { describe, it, expect } from "vitest";
import { siteConfig, projects, stack, colorThemes, services, workflow } from "@/constants/content";
import { servicePages, getServicePage } from "@/constants/servicePages";

describe("siteConfig", () => {
  it("has all required fields", () => {
    expect(siteConfig.name).toBeTruthy();
    expect(siteConfig.email).toContain("@");
    expect(siteConfig.phoneHref).toMatch(/^tel:\+/);
    expect(siteConfig.linkedin).toMatch(/^https:\/\//);
    expect(siteConfig.url).toMatch(/^https:\/\//);
    expect(siteConfig.tagline).toBeTruthy();
    expect(siteConfig.description).toBeTruthy();
  });
});

describe("projects", () => {
  it("has at least 4 projects", () => {
    expect(projects.length).toBeGreaterThanOrEqual(4);
  });

  it("includes Mès & Marais right after Vetoxia", () => {
    const ids = projects.map((p) => p.id);
    expect(ids.indexOf("mesetmarais")).toBe(ids.indexOf("vetoxia") + 1);
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

describe("services & process", () => {
  it("lists services with points", () => {
    expect(services.length).toBeGreaterThanOrEqual(3);
    services.forEach((s) => expect(s.points.length).toBeGreaterThan(0));
  });

  it("has ordered process steps", () => {
    expect(workflow.map((p) => p.step)).toEqual(["01", "02", "03", "04"]);
  });
});

describe("servicePages", () => {
  it("has one page per service with unique slugs", () => {
    expect(new Set(servicePages.map((p) => p.slug)).size).toBe(servicePages.length);
    services.forEach((s) => {
      expect(servicePages.some((p) => p.serviceId === s.id)).toBe(true);
    });
  });

  it("each page has SEO fields within Google display limits", () => {
    servicePages.forEach((p) => {
      expect(p.seoTitle.length).toBeLessThanOrEqual(65);
      expect(p.seoDescription.length).toBeLessThanOrEqual(160);
      expect(p.faq.length).toBeGreaterThan(0);
      expect(getServicePage(p.slug)).toBe(p);
      p.relatedProjects.forEach((id) => expect(projects.some((pr) => pr.id === id)).toBe(true));
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
