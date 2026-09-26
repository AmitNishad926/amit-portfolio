"use client";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const works = [
  "Business websites & corporate web presence",
  "Full-stack enterprise web applications",
  "HR, CRM and workforce management systems",
  "REST API design and backend architecture",
  "SQL Server database design & optimisation",
  "Admin dashboards and reporting panels",
  "E-learning platforms and content systems",
];

const miniStats = [
  { val: "9+", label: "Months hands-on full-stack experience" },
  { val: "9+", label: "Projects across multiple industries" },
  { val: ".NET", label: "Primary backend framework" },
  { val: "Angular", label: "Primary frontend framework" },
];

export default function About() {
  return (
    <section id="about" className="section" style={{ background: "var(--c-surface)" }}>
      <div className="container">
        <div className="divider mb-16" />
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left */}
          <div>
            <SectionHeading label="About" title="From requirements to working software" align="left" />
            <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem", color: "var(--c-muted)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              <p>I am a Full Stack Developer with hands-on experience in .NET and Angular, built during my time at Codex Lancers where I worked across multiple enterprise software modules.</p>
              <p>My approach: understand what the business actually needs, then build something that works reliably. Whether that means a client-facing website or a multi-module system with complex database logic - the goal is always software that solves real problems.</p>
              <p>I am comfortable working across the full stack - Angular interfaces, TypeScript components, .NET Core backends, REST APIs and SQL Server databases - independently or within a team following Agile processes.</p>
            </div>
          </div>

          {/* Right */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            <div className="card" style={{ padding: "1.75rem" }}>
              <p style={{ fontSize: "0.68rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-blue)", marginBottom: "1.25rem" }}>
                Areas of Work
              </p>
              <ul style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                {works.map(item => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                    <CheckCircle2 size={15} style={{ color: "var(--c-blue)", marginTop: "3px", flexShrink: 0 }} />
                    <span style={{ fontSize: "0.875rem", color: "rgba(238,240,245,0.75)", lineHeight: 1.5 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mini stats */}
            <div className="grid grid-cols-2 gap-3">
              {miniStats.map((s, i) => (
                <div key={s.label} className="card" style={{ padding: "1.25rem" }}>
                  <p style={{ fontSize: "1.6rem", fontWeight: 700, color: "var(--c-white)", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: "4px" }}>{s.val}</p>
                  <p style={{ fontSize: "0.73rem", color: "var(--c-muted)", lineHeight: 1.4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
