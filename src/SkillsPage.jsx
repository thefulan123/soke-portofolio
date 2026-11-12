import PageShell from "./PageShell";
import { media } from "./media";
import { skills } from "./content/skills";
import profile from "./content/profile";

export default function SkillsPage() {
  return (
    <PageShell variant="default" video={media.resume}>
      <header className="p3page-head">
        <div className="p3page-kicker">03 / TECHNICAL SKILLS</div>
        <h1 className="p3page-title">SKILLS</h1>
        <p className="p3page-sub">
          Inventaris teknologi yang dipakai selama belajar dan mengerjakan
          proyek — bukan klaim penguasaan profesional.
        </p>
      </header>

      <div className="p3skill-grid">
        {skills.map((group) => (
          <section className="p3section" key={group.category}>
            <h2 className="p3skill-cat">{group.category}</h2>
            <ul className="p3ul">
              {group.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div style={{ height: "clamp(18px, 4vh, 40px)" }} />

      <section className="p3section">
        <h2 className="p3section-title">CURRENT FOCUS</h2>
        <ul className="p3ul">
          {profile.interests.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
