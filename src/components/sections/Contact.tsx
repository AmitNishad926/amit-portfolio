"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  Download,
  Send,
  ArrowUpRight,
  CheckCircle2,
  Copy,
  Check,
  ExternalLink,
  RotateCcw,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE_CONFIG } from "@/lib/data";

const PROJECT_TYPES = [
  "Corporate / Business Website",
  "Full-Stack Web Application",
  "Enterprise Software / Internal Tools",
  "REST API & Database Engineering",
  "Admin Dashboard / Management System",
  "Other Consultation",
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedMessage, setCopiedMessage] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const formattedSubject = `Project Inquiry [${formData.projectType || "General"}]: ${formData.name}`;
  const formattedBody = `Hello Amit,\n\nName: ${formData.name}\nEmail: ${formData.email}\nCompany: ${formData.company || "N/A"
    }\nProject Category: ${formData.projectType || "General"}\n\nProject Scope & Requirements:\n${formData.message}\n\nLooking forward to hearing from you.`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Trigger local email client without opening blank tab
    const mailtoUrl = `mailto:${SITE_CONFIG.email}?subject=${encodeURIComponent(
      formattedSubject
    )}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(SITE_CONFIG.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyFullInquiry = () => {
    const textToCopy = `To: ${SITE_CONFIG.email}\nSubject: ${formattedSubject}\n\n${formattedBody}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedMessage(true);
    setTimeout(() => setCopiedMessage(false), 2500);
  };

  const gmailWebUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    SITE_CONFIG.email
  )}&su=${encodeURIComponent(formattedSubject)}&body=${encodeURIComponent(formattedBody)}`;

  return (
    <section id="contact" className="section" style={{ background: "var(--c-surface)" }}>
      <div className="container">
        <div className="divider mb-16" />

        <SectionHeading
          label="Collaboration"
          title="Let's build something impactful."
          description="Have an upcoming project, business platform need, or want to discuss technical consultation? Reach out directly or send your project details below."
        />

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left panel: Direct Contact Card */}
          <div className="lg:col-span-5 space-y-5">
            <div className="card" style={{ padding: "2rem" }}>
              <h3
                style={{
                  fontSize: "1.15rem",
                  fontWeight: 700,
                  color: "var(--c-white)",
                  marginBottom: "0.5rem",
                  letterSpacing: "-0.015em",
                }}
              >
                Direct Communication
              </h3>
              <p
                style={{
                  fontSize: "0.85rem",
                  color: "var(--c-muted)",
                  lineHeight: 1.6,
                  marginBottom: "1.75rem",
                }}
              >
                I am actively available for development work, consulting, and full-stack enterprise projects.
              </p>

              <div className="space-y-3">
                {/* Email with 1-click copy */}
                <div
                  className="flex items-center justify-between p-3 rounded-xl transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--c-border)",
                  }}
                >
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 overflow-hidden group mr-2"
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: "rgba(79, 142, 247, 0.1)",
                        border: "1px solid rgba(79, 142, 247, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Mail size={16} style={{ color: "var(--c-blue)" }} />
                    </div>
                    <div className="overflow-hidden">
                      <p
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--c-dim)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Email Address
                      </p>
                      <p className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors truncate">
                        {SITE_CONFIG.email}
                      </p>
                    </div>
                  </a>

                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/[0.05] transition-colors shrink-0"
                    title="Copy Email"
                    aria-label="Copy Email Address"
                  >
                    {copiedEmail ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Phone */}
                <div
                  className="flex items-center justify-between p-3 rounded-xl transition-all"
                  style={{
                    background: "rgba(255, 255, 255, 0.02)",
                    border: "1px solid var(--c-border)",
                  }}
                >
                  <a
                    href={`tel:${SITE_CONFIG.phone.replace(/\s/g, "")}`}
                    className="flex items-center gap-3 group"
                  >
                    <div
                      style={{
                        width: "38px",
                        height: "38px",
                        borderRadius: "10px",
                        background: "rgba(79, 142, 247, 0.1)",
                        border: "1px solid rgba(79, 142, 247, 0.2)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <Phone size={16} style={{ color: "var(--c-blue)" }} />
                    </div>
                    <div>
                      <p
                        style={{
                          fontSize: "0.68rem",
                          color: "var(--c-dim)",
                          textTransform: "uppercase",
                          letterSpacing: "0.08em",
                        }}
                      >
                        Direct Phone
                      </p>
                      <p className="text-xs font-medium text-slate-200 group-hover:text-blue-400 transition-colors">
                        {SITE_CONFIG.phone}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <div style={{ height: "1px", background: "var(--c-border)", margin: "1.75rem 0" }} />

              <div className="space-y-2.5">
                <a
                  href={SITE_CONFIG.resumePath}
                  download="Amit-Nishad-Resume.pdf"
                  className="btn-ghost w-full justify-center text-xs py-2.5"
                >
                  <Download size={14} /> Download Resume (.PDF)
                </a>

                <a
                  href={SITE_CONFIG.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost w-full justify-center text-xs py-2.5"
                >
                  Connect on LinkedIn <ArrowUpRight size={13} />
                </a>
              </div>
            </div>
          </div>

          {/* Right panel: Structured Form & Interactive Success State */}
          <div className="lg:col-span-7">
            <div className="card" style={{ padding: "2.25rem" }}>
              {submitted ? (
                /* Post-Submission Options for 100% Reliability */
                <div className="py-4 space-y-6">
                  <div className="flex items-center gap-3">
                    <div
                      style={{
                        width: "44px",
                        height: "44px",
                        borderRadius: "12px",
                        background: "rgba(34, 197, 94, 0.12)",
                        border: "1px solid rgba(34, 197, 94, 0.25)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <CheckCircle2 size={22} className="text-emerald-400" />
                    </div>
                    <div>
                      <h4
                        style={{
                          fontSize: "1.1rem",
                          fontWeight: 700,
                          color: "var(--c-white)",
                        }}
                      >
                        Inquiry Prepared Successfully!
                      </h4>
                      <p style={{ fontSize: "0.82rem", color: "var(--c-muted)" }}>
                        Your default email app has been opened with your inquiry pre-filled.
                      </p>
                    </div>
                  </div>

                  <div
                    style={{
                      padding: "1.25rem",
                      borderRadius: "12px",
                      background: "rgba(255, 255, 255, 0.02)",
                      border: "1px solid var(--c-border)",
                    }}
                    className="space-y-2 text-xs text-slate-300"
                  >
                    <p className="font-semibold text-white">Using Webmail (like Gmail or Outlook in browser)?</p>
                    <p style={{ color: "var(--c-muted)" }}>
                      If your computer did not automatically open a desktop mail app, choose one of these instant options:
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-3">
                    {/* Option 1: Open directly in Gmail Web */}
                    <a
                      href={gmailWebUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary justify-center text-xs py-3"
                    >
                      <ExternalLink size={14} /> Open in Gmail Web
                    </a>

                    {/* Option 2: Copy formatted message to clipboard */}
                    <button
                      type="button"
                      onClick={handleCopyFullInquiry}
                      className="btn-ghost justify-center text-xs py-3"
                    >
                      {copiedMessage ? (
                        <>
                          <Check size={14} className="text-emerald-400" /> Copied to Clipboard!
                        </>
                      ) : (
                        <>
                          <Copy size={14} /> Copy Message Text
                        </>
                      )}
                    </button>
                  </div>

                  <div className="pt-2 flex justify-center">
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="btn-link text-xs flex items-center gap-1.5"
                    >
                      <RotateCcw size={12} /> Edit or Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                /* Primary Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-name"
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--c-muted)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Your Name <span style={{ color: "var(--c-blue)" }}>*</span>
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. John Smith"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--c-muted)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Work Email <span style={{ color: "var(--c-blue)" }}>*</span>
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className="form-input"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="contact-company"
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--c-muted)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Company / Organization
                      </label>
                      <input
                        id="contact-company"
                        name="company"
                        type="text"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization Name"
                        className="form-input"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-projecttype"
                        style={{
                          fontSize: "0.78rem",
                          fontWeight: 500,
                          color: "var(--c-muted)",
                          display: "block",
                          marginBottom: "6px",
                        }}
                      >
                        Project Focus <span style={{ color: "var(--c-blue)" }}>*</span>
                      </label>
                      <select
                        id="contact-projecttype"
                        name="projectType"
                        required
                        value={formData.projectType}
                        onChange={handleChange}
                        className="form-input cursor-pointer"
                        style={{
                          color: formData.projectType ? "var(--c-white)" : "var(--c-dim)",
                        }}
                      >
                        <option value="" disabled style={{ background: "#111115", color: "var(--c-dim)" }}>
                          Select Project Focus
                        </option>
                        {PROJECT_TYPES.map((t) => (
                          <option key={t} value={t} style={{ background: "#111115", color: "#fff" }}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        fontSize: "0.78rem",
                        fontWeight: 500,
                        color: "var(--c-muted)",
                        display: "block",
                        marginBottom: "6px",
                      }}
                    >
                      Project Details & Scope <span style={{ color: "var(--c-blue)" }}>*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Briefly describe what you're building, target timeline, or core requirements..."
                      className="form-input"
                      style={{ resize: "none" }}
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      id="contact-submit"
                      className="btn-primary w-full justify-center"
                      style={{ padding: "13px 24px", fontSize: "0.92rem" }}
                    >
                      <Send size={15} /> Send Project Inquiry
                    </button>
                    <p
                      style={{
                        fontSize: "0.72rem",
                        color: "var(--c-dim)",
                        textAlign: "center",
                        marginTop: "10px",
                        lineHeight: 1.5,
                      }}
                    >
                      Pre-fills your message directly in your mail app, with instant Gmail web & clipboard options.
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}