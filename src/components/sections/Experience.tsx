"use client";

import { Briefcase, ChevronRight, GraduationCap, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { EXPERIENCE, EDUCATION, STATS } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: "var(--c-surface)" }}>
      <div className="container">
        <div className="divider mb-16" />

        {/* Stats Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5" style={{ marginBottom: "5.5rem" }}>
          {STATS.map((s, i) => (
            <div key={i} className="card card-hover" style={{ padding: "1.5rem", textAlign: "center" }}>
              <p
                style={{
                  fontSize: "clamp(1.5rem, 3.2vw, 2.2rem)",
                  fontWeight: 800,
                  color: "var(--c-white)",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: "8px",
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                }}
              >
                {s.value}
              </p>
              <p style={{ fontSize: "0.74rem", color: "var(--c-muted)", lineHeight: 1.4 }}>
                {s.label}
              </p>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Experience Column */}
          <div>
            <SectionHeading label="Experience" title="Professional Background" align="left" />

            {EXPERIENCE.map((exp) => (
              <div
                key={exp.company}
                style={{
                  position: "relative",
                  paddingLeft: "1.75rem",
                  borderLeft: "1px solid var(--c-border-md)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-7px",
                    top: "22px",
                    width: "13px",
                    height: "13px",
                    borderRadius: "50%",
                    background: "var(--c-blue)",
                    border: "3px solid var(--c-surface)",
                  }}
                />

                <div className="card card-hover" style={{ padding: "1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                      gap: "12px",
                      marginBottom: "1.1rem",
                    }}
                  >
                    <div>
                      <div className="flex items-center gap-1.5 mb-1">
                        <Briefcase size={13} style={{ color: "var(--c-blue)" }} />
                        <span
                          style={{
                            fontSize: "0.68rem",
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.1em",
                            color: "var(--c-blue)",
                          }}
                        >
                          {exp.type}
                        </span>
                      </div>

                      <h3
                        style={{
                          fontSize: "1.08rem",
                          fontWeight: 700,
                          color: "var(--c-white)",
                          letterSpacing: "-0.015em",
                          lineHeight: 1.25,
                        }}
                      >
                        {exp.role}
                      </h3>

                      <p style={{ fontSize: "0.85rem", color: "var(--c-muted)", marginTop: "2px" }}>
                        {exp.company}
                      </p>
                    </div>

                    <span
                      className="tag"
                      style={{
                        fontFamily: "'SF Mono', 'Fira Code', monospace",
                        fontSize: "0.72rem",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {exp.duration}
                    </span>
                  </div>

                  <ul className="space-y-2.5">
                    {exp.responsibilities.map((r) => (
                      <li key={r} className="flex items-start gap-2">
                        <ChevronRight
                          size={13}
                          style={{ color: "rgba(79, 142, 247, 0.6)", marginTop: "3.5px", flexShrink: 0 }}
                        />
                        <span style={{ fontSize: "0.83rem", color: "var(--c-muted)", lineHeight: 1.65 }}>
                          {r}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education Column */}
          <div>
            <SectionHeading label="Education" title="Academic Background" align="left" />

            <div className="space-y-4">
              {EDUCATION.map((edu, idx) => (
                <div
                  key={edu.institution}
                  className="card card-hover"
                  style={{ padding: "1.75rem", position: "relative" }}
                >
                  {/* Status Badge: Completed */}
                  <div
                    style={{
                      position: "absolute",
                      top: "1.25rem",
                      right: "1.25rem",
                      display: "flex",
                      alignItems: "center",
                      gap: "5px",
                      padding: "4px 10px",
                      borderRadius: "40px",
                      border: "1px solid rgba(34, 197, 94, 0.25)",
                      background: "rgba(34, 197, 94, 0.08)",
                    }}
                  >
                    <CheckCircle2 size={11} style={{ color: "#22c55e" }} />
                    <span
                      style={{
                        fontSize: "0.65rem",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#4ade80",
                      }}
                    >
                      Completed
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5 mb-3.5">
                    <div
                      style={{
                        width: "36px",
                        height: "36px",
                        borderRadius: "10px",
                        background:
                          idx === 0
                            ? "linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(37, 99, 235, 0.1) 100%)"
                            : "linear-gradient(135deg, rgba(139, 92, 246, 0.2) 0%, rgba(109, 40, 217, 0.1) 100%)",
                        border:
                          idx === 0
                            ? "1px solid rgba(59, 130, 246, 0.3)"
                            : "1px solid rgba(139, 92, 246, 0.3)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: idx === 0 ? "var(--c-blue)" : "#a78bfa",
                        flexShrink: 0,
                      }}
                    >
                      <GraduationCap size={18} />
                    </div>

                    <div>
                      <span
                        style={{
                          fontSize: "0.75rem",
                          fontWeight: 500,
                          color: "var(--c-muted)",
                        }}
                      >
                        {edu.year}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontSize: "1.05rem",
                      fontWeight: 700,
                      color: "var(--c-white)",
                      letterSpacing: "-0.015em",
                      marginBottom: "4px",
                      paddingRight: "80px",
                    }}
                  >
                    {edu.degree}
                  </h3>

                  <p style={{ fontSize: "0.85rem", color: "var(--c-muted)", marginBottom: "14px" }}>
                    {edu.institution}
                  </p>

                  <div className="flex items-center gap-2">
                    <span
                      className="tag tag-blue"
                      style={{
                        fontFamily: "'SF Mono', 'Fira Code', monospace",
                        fontSize: "0.74rem",
                        fontWeight: 600,
                      }}
                    >
                      {edu.cgpa}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}