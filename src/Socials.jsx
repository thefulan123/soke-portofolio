import PageShell from "./PageShell";
import { media } from "./media";
import profile from "./content/profile";
import { socials } from "./content/socials";

export default function Socials() {
  return (
    <PageShell variant="socials" video={media.contact}>
      <header className="p3page-head">
        <div className="p3page-kicker">05 / CONTACT</div>
        <h1 className="p3page-title">CONTACT</h1>
        <p className="p3page-sub">
          {profile.fullName} — {profile.role}. {profile.tagline}.
        </p>
      </header>

      <div className="p3list">
        {socials.map((entry) =>
          entry.href ? (
            <a
              key={entry.id}
              className="p3contact-bar"
              href={entry.href}
              target={entry.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noreferrer noopener"
            >
              <span className="p3contact-icon" aria-hidden="true">
                {entry.icon}
              </span>
              <span>
                <span className="p3contact-label">{entry.label}</span>
                <br />
                <span className="p3contact-handle">{entry.handle}</span>
              </span>
              <span className="p3contact-note">{entry.note}</span>
            </a>
          ) : (
            <div
              key={entry.id}
              className="p3contact-bar"
              style={{ cursor: "default" }}
            >
              <span className="p3contact-icon" aria-hidden="true">
                {entry.icon}
              </span>
              <span>
                <span className="p3contact-label">{entry.label}</span>
                <br />
                <span className="p3contact-handle">{entry.handle}</span>
              </span>
              <span className="p3contact-note">{entry.note}</span>
            </div>
          )
        )}
      </div>

      <div style={{ height: "clamp(18px, 4vh, 40px)" }} />

      <section className="p3section">
        <h2 className="p3section-title">EDUCATION</h2>
        <p className="p3section-text">
          {profile.education.program}, {profile.education.school} —{" "}
          {profile.education.start}–{profile.education.end} (
          {profile.education.semesters} semester, {profile.education.status}).
        </p>
      </section>
    </PageShell>
  );
}
