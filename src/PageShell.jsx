import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageTransition from "./PageTransition";
import "./p3pages.css";

/**
 * Shared shell for content pages: background video, scroll container,
 * ESC/Backspace handling and a consistent back button.
 */
export default function PageShell({ variant, video, children }) {
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
    <PageTransition variant={variant}>
      <div className="p3page">
        {video && (
          <video
            className="p3page-bg"
            src={video}
            autoPlay
            loop
            muted
            playsInline
            aria-hidden="true"
          />
        )}
        <div className="p3page-scrim" aria-hidden="true" />
        <div className="p3page-scroll">{children}</div>

        <div className="p3back">
          <button
            className="p3back-btn"
            type="button"
            onClick={() => navigate(-1)}
          >
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
