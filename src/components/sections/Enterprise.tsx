"use client";
import { Lock, Users, BarChart3, Briefcase, Truck, MessageSquare, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { ENTERPRISE_PROJECTS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = { Users, BarChart3, Briefcase, Truck };

export default function Enterprise() {
  const go = () => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="enterprise" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="container">
        <SectionHeading label="Enterprise Applications" title="Internal Business Systems"
          description="Beyond public websites, I have contributed to private enterprise software that cannot be publicly demonstrated due to client confidentiality." />

        {/* Notice */}
        <div style={{
          display: "flex", alignItems: "flex-start", gap: "12px", padding: "14px 18px",
          borderRadius: "10px", border: "1px solid rgba(245,158,11,0.18)", background: "rgba(245,158,11,0.05)",
          maxWidth: "620px", margin: "0 auto 3rem"
        }}>
          <Lock size={14} style={{ color: "#f59e0b", marginTop: "2px", flexShrink: 0 }} />
          <p style={{ fontSize: "0.83rem", color: "rgba(245,158,11,0.75)", lineHeight: 1.6 }}>
            These are proprietary internal systems. Project details are shared at a high level only - no source code, credentials or private data is disclosed.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-5">
          {ENTERPRISE_PROJECTS.map(p => {
            const Icon = iconMap[p.icon] ?? Briefcase;
            return (
              <div key={p.id} className="card card-hover" style={{ padding: "1.75rem" }}>
                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div style={{
                    width: "44px", height: "44px", borderRadius: "10px",
                    background: "rgba(255,255,255,0.04)", border: "1px solid var(--c-border-md)",
                    display: "flex", alignItems: "center", justifyContent: "center"
                  }}>
                    <Icon size={20} style={{ color: "var(--c-muted)" }} />
                  </div>
                  <div style={{
                    display: "flex", alignItems: "center", gap: "6px", padding: "4px 10px",
                    borderRadius: "40px", border: "1px solid rgba(245,158,11,0.2)", background: "rgba(245,158,11,0.06)"
                  }}>
                    <Lock size={9} style={{ color: "#f59e0b" }} />
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "rgba(245,158,11,0.8)" }}>
                      Confidential
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3 style={{ fontSize: "1.05rem", fontWeight: 600, color: "var(--c-white)", letterSpacing: "-0.015em", marginBottom: "3px" }}>{p.title}</h3>
                <p style={{ fontSize: "0.75rem", color: "var(--c-dim)", marginBottom: "12px" }}>{p.fullTitle}</p>

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "1rem" }}>
                  {p.tech.map(t => <span key={t} className="tag tag-blue" style={{ fontFamily: "monospace", fontSize: "0.7rem" }}>{t}</span>)}
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.845rem", color: "var(--c-muted)", lineHeight: 1.7, marginBottom: "1.1rem" }}>{p.description}</p>

                {/* Features */}
                <ul style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "1.25rem" }}>
                  {p.features.slice(0, 5).map(f => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: "8px" }}>
                      <CheckCircle2 size={12} style={{ color: "rgba(79,142,247,0.5)", marginTop: "4px", flexShrink: 0 }} />
                      <span style={{ fontSize: "0.8rem", color: "var(--c-muted)" }}>{f}</span>
                    </li>
                  ))}
                  {p.features.length > 5 && (
                    <li style={{ fontSize: "0.78rem", color: "var(--c-dim)", paddingLeft: "20px" }}>+{p.features.length - 5} more capabilities</li>
                  )}
                </ul>

                {/* CTA */}
                <div style={{ height: "1px", background: "var(--c-border)", marginBottom: "1.1rem" }} />
                <button onClick={go} className="btn-link" aria-label={`Discuss a project similar to ${p.title}`}>
                  <MessageSquare size={13} /> Discuss Similar Project
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
