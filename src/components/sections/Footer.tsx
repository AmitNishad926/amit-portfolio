"use client";

import { Download, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

export default function Footer() {
  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer style={{ background: "var(--c-bg)", borderTop: "1px solid var(--c-border)", padding: "5rem 0 3rem" }}>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12" style={{ borderBottom: "1px solid var(--c-border)" }}>
          {/* Brand Col */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#3b7cf0] flex items-center justify-center shrink-0">
                <span className="text-white font-bold text-sm leading-none">AN</span>
              </div>
              <span className="font-bold text-base tracking-tight text-white">Amit Nishad</span>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--c-muted)", maxWidth: "420px", lineHeight: 1.7 }}>
              Full Stack Developer specializing in .NET, Angular, SQL Server, and enterprise business web solutions.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="tag tag-blue" style={{ fontSize: "0.72rem" }}>Based in India</span>
              <span className="tag" style={{ fontSize: "0.72rem" }}>Available Worldwide (Remote)</span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-dim)" }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{ fontSize: "0.84rem", color: "var(--c-muted)", transition: "color 0.2s" }}
                    className="hover:!text-white"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Actions */}
          <div className="md:col-span-3 space-y-3">
            <p style={{ fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--c-dim)" }}>
              Documents & Social
            </p>
            <div className="space-y-2.5">
              <a
                href={SITE_CONFIG.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--c-muted)] hover:!text-white transition-colors"
              >
                LinkedIn Profile <ArrowUpRight size={13} />
              </a>
              <a
                href={SITE_CONFIG.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-xs text-[var(--c-muted)] hover:!text-white transition-colors"
              >
                Online CV <ArrowUpRight size={13} />
              </a>
              <a
                href={SITE_CONFIG.resumePath}
                download="Amit-Nishad-Resume.pdf"
                className="flex items-center gap-1.5 text-xs text-[var(--c-blue)] hover:underline pt-1"
              >
                <Download size={13} /> Download Resume (.PDF)
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs" style={{ color: "var(--c-dim)" }}>
          <p>© {new Date().getFullYear()} Amit Nishad. All rights reserved.</p>
          <p>Engineered with Next.js, TypeScript & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
