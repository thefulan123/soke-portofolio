import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { media } from "./media";
import PageTransition from "./PageTransition";
import profile from "./content/profile";
import { skills } from "./content/skills";
import { projects } from "./content/projects";
import "./p3pages.css";

const CV_ROWS = [
  {
    id: "i",
    badge: "I",
    title: "IDENTITY",
    body: `${profile.fullName} — ${profile.role}`,
    lines: [
      profile.location,
      profile.email,
      `github.com/${profile.github}`,
    ],
  },
  {
    id: "ii",
    badge: "II",
    title: "EDUCATION",
    body: `${profile.education.program} — ${profile.education.school}`,
    lines: [
      `${profile.education.start} – ${profile.education.end}`,
      `${profile.education.semesters} semester`,
      `Status: ${profile.education.status}`,
    ],
  },
  {
    id: "iii",
    badge: "III",
    title: "SUMMARY",
    body: profile.summary,
    lines: profile.interests.slice(0, 3),
  },
  {
    id: "iv",
    badge: "IV",
    title: "SKILLS",
    body: skills.map((g) => g.category).join(" · "),
    lines: skills.map((g) => `${g.category}: ${g.items.join(", ")}`),
  },
  {
    id: "v",
    badge: "V",
    title: "PROJECTS",
    body: projects.map((p) => p.title).join(" · "),
    lines: projects.map((p) => `${p.title} (${p.status}) — ${p.stack.join(", ")}`),
  },
];

export default function ResumePage() {
  const navigate = useNavigate();

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape" || e.key === "Backspace") {
        const tag = document.activeElement?.tagName;
        if (tag === "INPUT" || tag === "TEXTAREA") return;
        e.preventDefault();
        navigate(-1);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [navigate]);

  return (
    <PageTransition variant="resume">
      <div className="p3page">
        <video
          className="p3page-bg"
          src={media.resume}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden="true"
        />
        <div className="p3page-scrim" aria-hidden="true" />

        <div className="p3page-scroll">
          <header className="p3page-head">
            <div className="p3page-kicker">04 / RESUME</div>
            <h1 className="p3page-title">RESUME</h1>
            <p className="p3page-sub">
              {profile.fullName} — {profile.role}. {profile.tagline}.
            </p>
          </header>

          <div className="p3list">
            {CV_ROWS.map((row) => (
              <section className="p3card" key={row.id} style={{ cursor: "default" }}>
                <div className="p3card-row">
                  <span className="p3card-index">{row.badge}</span>
                  <span className="p3card-title">{row.title}</span>
                </div>
                <p className="p3card-body" style={{ fontWeight: 700 }}>
                  {row.body}
                </p>
                <ul className="p3ul" style={{ marginTop: 8 }}>
                  {row.lines.map((line) => (
                    <li key={line} style={{ color: "rgba(11,13,20,0.78)" }}>
                      {line}
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <div style={{ height: "clamp(18px, 4vh, 40px)" }} />

          <button
            className="p3back-btn"
            type="button"
            onClick={() => window.print()}
          >
            PRINT / SAVE AS PDF
          </button>
        </div>

        <div className="p3back">
          <button className="p3back-btn" type="button" onClick={() => navigate(-1)}>
            BACK
          </button>
        </div>

        <div className="p3hint" aria-hidden="true">
          <span>
            <span className="p3hint-key">ESC</span> BACK
          </span>
        </div>
      </div>
    </PageTransition>
  );
}
