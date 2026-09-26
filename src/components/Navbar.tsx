"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import {
  Menu,
  X,
  Download,
  Home,
  User,
  Layers,
  Briefcase,
  GraduationCap,
  Cpu,
  Mail,
  Sparkles,
} from "lucide-react";
import { NAV_LINKS, SITE_CONFIG } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  home: Home,
  about: User,
  services: Layers,
  work: Briefcase,
  experience: GraduationCap,
  skills: Cpu,
  contact: Mail,
};

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const ids = NAV_LINKS.map((l) => l.href.replace("#", ""));
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i]);
        if (el && window.scrollY >= el.offsetTop - 140) {
          setActive(ids[i]);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = useCallback((href: string) => {
    setOpen(false);
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      setTimeout(() => {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 10);
    }
  }, []);

  return (
    <header className="fixed top-4 sm:top-6 inset-x-0 mx-auto z-50 flex justify-center px-4 transition-all duration-300 pointer-events-none">
      <div
        className={[
          "pointer-events-auto flex items-center justify-between gap-4 sm:gap-8 rounded-full transition-all duration-300",
          scrolled
            ? "bg-[#08080d]/92 backdrop-blur-3xl border border-white/[0.10] shadow-[0_20px_60px_-10px_rgba(0,0,0,0.85)]"
            : "bg-[#0b0b11]/80 backdrop-blur-2xl border border-white/[0.07] shadow-[0_12px_40px_-10px_rgba(0,0,0,0.65)]",
        ].join(" ")}
        style={{
          padding: "6px 8px 6px 8px",
        }}
      >
        {/* ── Brand / Logo with profile photo ─────────────────────── */}
        <button
          onClick={() => go("#home")}
          className="group flex items-center gap-2.5 focus-visible:outline-none shrink-0 pl-1 pr-2"
          aria-label="Amit Nishad Portfolio Home"
        >
          {/* Profile photo avatar */}
          <div
            className="relative shrink-0 transition-transform duration-200 group-hover:scale-105"
            style={{
              width: "34px",
              height: "34px",
              borderRadius: "50%",
              padding: "2px",
              background: "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)",
              boxShadow: "0 0 16px rgba(59, 130, 246, 0.45)",
            }}
          >
            <Image
              src="/resume/Amit-Nishad-Picture.jpeg"
              alt="Amit Nishad"
              width={34}
              height={34}
              className="rounded-full object-cover"
              style={{ width: "100%", height: "100%", display: "block" }}
              priority
            />
          </div>

          {/* Name + live dot */}
          <div className="flex items-center gap-2">
            <span className="font-bold text-[13px] sm:text-sm tracking-tight text-white group-hover:text-blue-300 transition-colors duration-200 whitespace-nowrap">
              Amit Nishad
            </span>
            {/* Pulsing "available" status dot */}
            <span
              className="w-2 h-2 rounded-full bg-emerald-400 hidden sm:block"
              style={{
                boxShadow: "0 0 6px rgba(52,211,153,0.8)",
                animation: "pulse 2s cubic-bezier(0.4,0,0.6,1) infinite",
              }}
            />
          </div>
        </button>

        {/* ── Thin separator ───────────────────────────────────────── */}
        <div
          className="hidden lg:block shrink-0 self-stretch"
          style={{
            width: "1px",
            background: "rgba(255,255,255,0.08)",
            margin: "6px 0",
          }}
        />

        {/* ── Desktop Nav Links ─────────────────────────────────────── */}
        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main Navigation"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "999px",
            padding: "4px",
          }}
        >
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className="relative px-3.5 py-1.5 text-[13px] font-medium rounded-full transition-all duration-200"
                style={isActive ? {
                  background: "linear-gradient(135deg, rgba(59,130,246,0.22) 0%, rgba(109,40,217,0.18) 100%)",
                  color: "#93c5fd",
                  border: "1px solid rgba(96,165,250,0.35)",
                  fontWeight: 600,
                  boxShadow: "0 0 14px rgba(59,130,246,0.18), inset 0 1px 0 rgba(255,255,255,0.08)",
                } : {
                  color: "rgba(161,161,170,0.85)",
                  border: "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "#e4e4e7";
                    e.currentTarget.style.background = "rgba(255,255,255,0.06)";
                    e.currentTarget.style.border = "1px solid rgba(255,255,255,0.08)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.color = "rgba(161,161,170,0.85)";
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.border = "1px solid transparent";
                  }
                }}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* ── Thin separator ───────────────────────────────────────── */}
        <div
          className="hidden lg:block shrink-0 self-stretch"
          style={{
            width: "1px",
            background: "rgba(255,255,255,0.08)",
            margin: "6px 0",
          }}
        />

        {/* ── Right CTA ─────────────────────────────────────────────── */}
        <div className="flex items-center gap-2 shrink-0 pr-1">
          <a
            href={SITE_CONFIG.resumePath}
            download="Amit-Nishad-Resume.pdf"
            className="hidden sm:inline-flex items-center gap-2 text-[13px] font-semibold text-white rounded-full transition-all duration-200 whitespace-nowrap"
            style={{
              padding: "8px 18px",
              background: "linear-gradient(135deg, #3b82f6 0%, #6d28d9 100%)",
              boxShadow: "0 2px 18px rgba(59, 130, 246, 0.38)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-1px)";
              e.currentTarget.style.boxShadow = "0 6px 26px rgba(59, 130, 246, 0.55)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 18px rgba(59, 130, 246, 0.38)";
            }}
          >
            <Download size={13} strokeWidth={2.5} />
            <span>Download CV</span>
          </a>

          {/* Mobile menu toggle */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="lg:hidden p-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/[0.08] transition-colors"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* ── Mobile navigation drawer ──────────────────────────────── */}
      <div
        className={[
          "pointer-events-auto lg:hidden fixed top-[68px] inset-x-4 max-w-sm mx-auto overflow-hidden transition-all duration-300 ease-in-out z-50",
          open ? "max-h-[580px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95 pointer-events-none",
        ].join(" ")}
      >
        <div className="p-3.5 rounded-3xl bg-[#0a0a10]/95 backdrop-blur-2xl border border-white/[0.1] shadow-2xl space-y-1">
          {NAV_LINKS.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            const Icon = iconMap[id] || Sparkles;

            return (
              <button
                key={link.href}
                onClick={() => go(link.href)}
                className={[
                  "w-full flex items-center gap-3 px-3.5 py-2.5 text-[13px] rounded-2xl transition-all font-medium text-left",
                  isActive
                    ? "text-blue-400 bg-blue-500/[0.12] border border-blue-500/20 font-semibold"
                    : "text-zinc-400 hover:text-white hover:bg-white/[0.04]",
                ].join(" ")}
              >
                <Icon size={14} className={isActive ? "text-blue-400" : "text-zinc-500"} />
                {link.label}
              </button>
            );
          })}

          <div className="pt-2 border-t border-white/[0.08] mt-2">
            <a
              href={SITE_CONFIG.resumePath}
              download="Amit-Nishad-Resume.pdf"
              className="flex items-center justify-center gap-2 w-full py-2.5 text-[13px] font-semibold text-white rounded-2xl transition-colors shadow-lg"
              style={{
                background: "linear-gradient(135deg, #3b82f6 0%, #6d28d9 100%)",
                boxShadow: "0 4px 20px rgba(59,130,246,0.3)",
              }}
            >
              <Download size={13} /> Download CV (.PDF)
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}