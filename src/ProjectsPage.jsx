import { Link } from "react-router-dom";
import PageShell from "./PageShell";
import { media } from "./media";
import { projects } from "./content/projects";

export default function ProjectsPage() {
  return (
    <PageShell variant="default" video={media.about}>
      <header className="p3page-head">
        <div className="p3page-kicker">02 / PROJECTS</div>
        <h1 className="p3page-title">PROJECTS</h1>
        <p className="p3page-sub">
          Hardware, firmware, dan integrasi sistem. Sebagian masih berjalan —
          status ditulis apa adanya.
        </p>
      </header>

      <div className="p3list">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="p3card">
            <div className="p3card-row">
              <span className="p3card-index">{p.index}</span>
              <span className="p3card-title">{p.title}</span>
              <span className="p3status">{p.status}</span>
            </div>
            <div className="p3card-sub">{p.subtitle}</div>
            <p className="p3card-body">{p.summary}</p>
            <div className="p3tags">
              {p.stack.map((s) => (
                <span key={s} className="p3tag">
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </PageShell>
  );
}
