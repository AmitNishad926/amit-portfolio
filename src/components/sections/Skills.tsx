"use client";

import SectionHeading from "@/components/ui/SectionHeading";
import { SKILLS } from "@/lib/data";

const groupLabels: Record<string, { label: string; accent: string }> = {
  Frontend: { label: "Frontend", accent: "#3b82f6" },
  Backend: { label: "Backend & Frameworks", accent: "#8b5cf6" },
  Database: { label: "Databases & Storage", accent: "#10b981" },
  Architecture: { label: "Architecture & Practices", accent: "#06b6d4" },
  Languages: { label: "Languages", accent: "#f59e0b" },
  Tools: { label: "Tools & Ecosystem", accent: "#a855f7" },
};

export default function Skills() {
  return (
    <section id="skills" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="container">
        <SectionHeading
          label="Capabilities"
          title="Technical Skillset"
          description="A curated view of technologies and production tools I use across the full development stack."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {Object.entries(SKILLS).map(([group, skills]) => {
            const meta = groupLabels[group] || { label: group, accent: "var(--c-blue)" };
            return (
              <div
                key={group}
                className="card card-hover flex flex-col justify-between"
                style={{ padding: "1.75rem" }}
              >
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <span
                      style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: meta.accent,
                        boxShadow: `0 0 10px ${meta.accent}80`,
                      }}
                    />
                    <h3
                      style={{
                        fontSize: "0.9rem",
                        fontWeight: 600,
                        letterSpacing: "0.02em",
                        color: "var(--c-white)",
                        textTransform: "uppercase",
                      }}
                    >
                      {meta.label}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {skills.map((skill) => (
                      <span
                        key={skill}
                        className="skill-pill"
                        style={{
                          background: "rgba(255, 255, 255, 0.03)",
                          borderColor: "var(--c-border-md)",
                          color: "rgba(238, 240, 245, 0.85)",
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div
                  style={{
                    height: "1px",
                    background: "var(--c-border)",
                    marginTop: "1.5rem",
                  }}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p style={{ fontSize: "0.8rem", color: "var(--c-dim)" }}>
            Hands-on commercial and project experience — focused on clean architecture and maintainability.
          </p>
        </div>
      </div>
    </section>
  );
}
