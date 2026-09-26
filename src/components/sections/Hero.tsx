"use client";

import { Download, ArrowUpRight, ChevronRight } from "lucide-react";
import { SITE_CONFIG } from "@/lib/data";

const stack = [".NET Core", "Angular", "C#", "TypeScript", "SQL Server", "REST APIs"];

export default function Hero() {
  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-grid"
      style={{
        paddingTop: "clamp(8rem, 18vh, 11rem)",
        paddingBottom: "clamp(5rem, 11vh, 8rem)",
      }}
    >
      {/* Ambient soft glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div
          className="absolute -top-[15%] left-1/2 -translate-x-1/2 w-[850px] h-[520px] rounded-full blur-[130px]"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(59, 124, 240, 0.14) 0%, rgba(59, 124, 240, 0.02) 65%, transparent 80%)",
          }}
        />
      </div>

      <div className="container relative z-10 max-w-4xl mx-auto">
        {/* Availability Badge */}
        <div className="flex items-center mb-8">
          <div
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full"
            style={{
              background: "rgba(34, 197, 94, 0.08)",
              border: "1px solid rgba(34, 197, 94, 0.22)",
            }}
          >
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-60"></span>
              <span className="relative rounded-full h-2 w-2 bg-emerald-400"></span>
            </span>
            <span
              style={{
                fontSize: "0.72rem",
                fontWeight: 500,
                letterSpacing: "0.03em",
                color: "#4ade80",
              }}
            >
              Available for Freelance & Full-Stack Projects
            </span>
          </div>
        </div>

        {/* Display Headline */}
        <h1
          className="tracking-tight"
          style={{
            fontSize: "clamp(2.3rem, 5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.12,
            letterSpacing: "-0.03em",
            marginBottom: "1.75rem",
          }}
        >
          <span className="gradient-text">Building Digital Experiences</span>
          <br />
          <span style={{ color: "var(--c-white)" }}>& Enterprise Solutions</span>
        </h1>

        {/* Professional Subtitle */}
        <p
          style={{
            fontSize: "clamp(1.05rem, 1.7vw, 1.25rem)",
            color: "rgba(238, 240, 245, 0.9)",
            lineHeight: 1.65,
            maxWidth: "680px",
            marginBottom: "1rem",
            fontWeight: 400,
          }}
        >
          Full Stack Developer specialising in <span style={{ color: "var(--c-blue)" }}>.NET</span>,{" "}
          <span style={{ color: "var(--c-blue)" }}>Angular</span>, robust REST APIs, and database-driven business applications.
        </p>

        {/* Supporting Narrative */}
        <p
          style={{
            fontSize: "0.95rem",
            color: "var(--c-muted)",
            lineHeight: 1.75,
            maxWidth: "640px",
            marginBottom: "2.75rem",
          }}
        >
          I deliver modern websites and scalable software for organizations - from high-converting client web platforms to secure internal business management systems.
        </p>

        {/* Call to Action Buttons */}
        <div
          className="flex flex-wrap items-center gap-3.5"
          style={{ marginBottom: "3rem" }}
        >
          <button
            onClick={() => go("work")}
            className="btn-primary"
            style={{ padding: "12px 24px", fontSize: "0.9rem" }}
          >
            Explore Projects <ChevronRight size={15} />
          </button>

          <a
            href={SITE_CONFIG.resumePath}
            download="Amit-Nishad-Resume.pdf"
            className="btn-ghost"
            style={{ padding: "12px 22px", fontSize: "0.9rem" }}
          >
            <Download size={15} /> Download Resume
          </a>

          <button
            onClick={() => go("contact")}
            className="btn-link"
            style={{ padding: "10px 14px", fontSize: "0.9rem" }}
          >
            Get in Touch <ArrowUpRight size={15} />
          </button>
        </div>

        {/* Core Stack Card */}
        <div
          className="card"
          style={{
            marginTop: "0.5rem",
            padding: "1.35rem 1.75rem",
            background: "rgba(16, 16, 21, 0.6)",
            backdropFilter: "blur(12px)",
            border: "1px solid var(--c-border-md)",
            display: "flex",
            flexWrap: "wrap",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <div className="flex items-center gap-2">
            <span
              style={{
                width: "7px",
                height: "7px",
                borderRadius: "50%",
                backgroundColor: "var(--c-blue)",
              }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "var(--c-muted)",
              }}
            >
              Primary Tech Stack
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {stack.map((t) => (
              <span
                key={t}
                className="tag tag-blue"
                style={{
                  fontSize: "0.75rem",
                  padding: "5px 12px",
                  borderRadius: "6px",
                  fontFamily: "'SF Mono', 'Fira Code', monospace",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}