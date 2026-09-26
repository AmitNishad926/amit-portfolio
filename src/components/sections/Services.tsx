"use client";
import { Globe, Layers, Building2, Server, LayoutDashboard, RefreshCw } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SERVICES } from "@/lib/data";

const icons: Record<string, React.ElementType> = { Globe, Layers, Building2, Server, LayoutDashboard, RefreshCw };

export default function Services() {
  return (
    <section id="services" className="section" style={{ background: "var(--c-bg)" }}>
      <div className="container">
        <SectionHeading label="Services" title="What I Build"
          description="From client-facing websites to complex enterprise systems — spanning multiple industries and technology stacks." />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SERVICES.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <div key={s.number} className="card card-hover group" style={{ padding: "1.75rem", position: "relative" }}>
                <span style={{
                  position: "absolute", top: "1.25rem", right: "1.5rem",
                  fontSize: "2.4rem", fontWeight: 800, color: "rgba(255,255,255,0.03)",
                  fontFamily: "monospace", lineHeight: 1, pointerEvents: "none",
                  transition: "color 0.22s ease"
                }} className="group-hover:!text-white/[0.06]">{s.number}</span>

                <div style={{
                  width: "42px", height: "42px", borderRadius: "10px", marginBottom: "1.25rem",
                  background: "rgba(79,142,247,0.1)", border: "1px solid rgba(79,142,247,0.18)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.22s ease"
                }} className="group-hover:bg-[rgba(79,142,247,0.18)]">
                  {Icon && <Icon size={19} style={{ color: "var(--c-blue)" }} />}
                </div>

                <h3 style={{ fontSize: "1rem", fontWeight: 600, color: "var(--c-white)", marginBottom: "0.6rem", letterSpacing: "-0.01em" }}>
                  {s.title}
                </h3>
                <p style={{ fontSize: "0.85rem", color: "var(--c-muted)", lineHeight: 1.7 }}>
                  {s.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
