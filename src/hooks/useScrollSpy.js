import { useEffect, useState } from "react";

const HOME_SECTION_IDS = ["hero", "about", "projects", "skills", "contact"];

export function useScrollSpy(enabled = true) {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const sections = HOME_SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let nextActiveId = null;

        for (const entry of entries) {
          if (entry.isIntersecting) {
            nextActiveId = entry.target.id;
            break;
          }
        }

        if (nextActiveId) {
          setActiveId(nextActiveId);
        }
      },
      {
        root: null,
        rootMargin: "-96px 0px -55% 0px",
        threshold: 0.01,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [enabled]);

  return activeId;
}
