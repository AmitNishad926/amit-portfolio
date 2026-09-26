"use client";

import { ArrowUpRight, Globe } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { PUBLIC_PROJECTS } from "@/lib/data";

export default function Work() {
  return (
    <section id="work" className="section" style={{ background: "var(--c-surface)" }}>
      <div className="container">
        {/* Generous space above and below the divider line */}
        <div
          className="divider"
          style={{
            marginTop: "1.5rem",
            marginBottom: "4.5rem",
          }}
        />

        <SectionHeading
          label="Selected Work"
          title="Client Websites & Platforms"
          description="A selection of live production websites built and delivered across healthcare, education, retail, and corporate sectors. Click any project to visit the live site."
        />

        {/* Clean responsive grid for client projects */}
        <div className="grid md:grid-cols-2 gap-6">
          {PUBLIC_PROJECTS.map((p) => {
            const displayUrl = p.url
              .replace(/^https?:\/\/(www\.)?/, "")
              .replace(/\/$/, "");

            return (
              <div
                key={p.id}
                className="card card-hover flex flex-col justify-between group"
                style={{ padding: "2rem", position: "relative" }}
              >
                <div>
                  {/* Top Bar: Spacious Category Tag + Top-Right Direct Visit Action */}
                  <div
                    className="flex items-center justify-between gap-3"
                    style={{ marginBottom: "1.35rem" }}
                  >
                    <span
                      className="tag tag-blue"
                      style={{
                        fontSize: "0.7rem",
                        fontWeight: 600,
                        letterSpacing: "0.06em",
                        textTransform: "uppercase",
                        padding: "6px 14px",
                        borderRadius: "8px",
                      }}
                    >
                      {p.category}
                    </span>

                    <a
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${p.name} website in new tab`}
                      className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                      style={{
                        background: "rgba(255, 255, 255, 0.04)",
                        border: "1px solid var(--c-border-md)",
                        color: "var(--c-muted)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.4)";
                        e.currentTarget.style.background = "rgba(79, 142, 247, 0.12)";
                        e.currentTarget.style.color = "var(--c-blue)";
                        e.currentTarget.style.transform = "translate(1px, -1px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "var(--c-border-md)";
                        e.currentTarget.style.background = "rgba(255, 255, 255, 0.04)";
                        e.currentTarget.style.color = "var(--c-muted)";
                        e.currentTarget.style.transform = "translate(0, 0)";
                      }}
                    >
                      <ArrowUpRight size={16} />
                    </a>
                  </div>

                  {/* Project Title - un-congested with comfortable margin */}
                  <h3
                    style={{
                      fontSize: "1.2rem",
                      fontWeight: 700,
                      color: "var(--c-white)",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.4,
                      marginBottom: "0.9rem",
                    }}
                  >
                    {p.name}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: "0.88rem",
                      color: "var(--c-muted)",
                      lineHeight: 1.7,
                      marginBottom: "1.35rem",
                    }}
                  >
                    {p.description}
                  </p>

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag"
                        style={{ padding: "4px 11px", fontSize: "0.72rem" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Actions: Enlarged, comfortable Visit Site oval box */}
                <div
                  style={{
                    paddingTop: "1.35rem",
                    marginTop: "1.25rem",
                    borderTop: "1px solid var(--c-border)",
                  }}
                >
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`project-link-${p.id}`}
                    aria-label={`Open ${p.name} live website in new tab`}
                    className="flex items-center justify-between w-full transition-all group/btn"
                    style={{
                      padding: "14px 20px",
                      borderRadius: "14px",
                      minHeight: "52px",
                      background: "rgba(255, 255, 255, 0.03)",
                      border: "1px solid var(--c-border-md)",
                      textDecoration: "none",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.35)";
                      e.currentTarget.style.background = "rgba(79, 142, 247, 0.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--c-border-md)";
                      e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)";
                    }}
                  >
                    <div className="flex items-center gap-2.5 overflow-hidden mr-3">
                      <Globe size={15} style={{ color: "var(--c-blue)", flexShrink: 0 }} />
                      <span
                        style={{
                          fontSize: "0.8rem",
                          fontFamily: "'SF Mono', 'Fira Code', monospace",
                          color: "var(--c-muted)",
                        }}
                        className="truncate group-hover/btn:!text-white transition-colors"
                      >
                        {displayUrl}
                      </span>
                    </div>

                    <span
                      className="flex items-center gap-2 shrink-0 font-semibold group-hover/btn:translate-x-1 transition-transform"
                      style={{
                        fontSize: "0.82rem",
                        color: "var(--c-blue)",
                      }}
                    >
                      Visit Live Site <ArrowUpRight size={14} />
                    </span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer disclaimer */}
        <p
          style={{
            textAlign: "center",
            fontSize: "0.78rem",
            color: "var(--c-dim)",
            marginTop: "2.5rem",
          }}
        >
          All listed client websites are live and publicly accessible.
        </p>
      </div>
    </section>
  );
}