import { Link, useParams } from "react-router-dom";
import PageShell from "./PageShell";
import { media } from "./media";
import { getProject } from "./content/projects";

function Section({ title, children }) {
  return (
    <section className="p3section">
      <h2 className="p3section-title">{title}</h2>
      {children}
    </section>
  );
}

function Bullets({ items }) {
  return (
    <ul className="p3ul">
      {items.map((t, i) => (
        <li key={`${t}-${i}`}>{t}</li>
      ))}
    </ul>
  );
}

export default function ProjectDetailPage() {
  const { slug } = useParams();
  const project = getProject(slug);

  if (!project) {
    return (
      <PageShell variant="default" video={media.resume}>
        <header className="p3page-head">
          <div className="p3page-kicker">PROJECTS</div>
          <h1 className="p3page-title">NOT FOUND</h1>
          <p className="p3page-sub">
            Proyek <code>{slug}</code> tidak ada di registry.
          </p>
        </header>
        <Link className="p3card" to="/projects">
          <div className="p3card-row">
            <span className="p3card-index">←</span>
            <span className="p3card-title">BACK TO LIST</span>
          </div>
        </Link>
      </PageShell>
    );
  }

  const s = project.sections;

  return (
    <PageShell variant="default" video={media.resume}>
      <header className="p3page-head">
        <div className="p3page-kicker">
          {project.index} / {project.status}
        </div>
        <h1 className="p3page-title">{project.title}</h1>
        <p className="p3page-sub">{project.subtitle}</p>
        <div className="p3tags">
          {project.stack.map((t) => (
            <span key={t} className="p3tag">
              {t}
            </span>
          ))}
        </div>
      </header>

      <div className="p3sections">
        <Section title="OVERVIEW">
          <p className="p3section-text">{s.overview}</p>
        </Section>

        <Section title="PROBLEM">
          <p className="p3section-text">{s.problem}</p>
        </Section>

        <Section title="SYSTEM ARCHITECTURE">
          <Bullets items={s.architecture} />
        </Section>

        <Section title="HARDWARE">
          <Bullets items={s.hardware} />
        </Section>

        <Section title="SOFTWARE">
          <Bullets items={s.software} />
        </Section>

        <Section title="PROCESS">
          <Bullets items={s.process} />
        </Section>

        <Section title="RESULTS">
          <Bullets items={s.results} />
        </Section>

        {s.repo ? (
          <Section title="SOURCE">
            <a
              className="p3section-text"
              href={s.repo}
              target="_blank"
              rel="noreferrer noopener"
            >
              {s.repo}
            </a>
          </Section>
        ) : null}
      </div>
    </PageShell>
  );
}
