import { useEffect, useState } from "react";

const HOME_SECTION_IDS = ["hero", "about", "projects", "skills", "contact"];

export function useScrollSpy(enabled = true) {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    if (!enabled) {
      return undefined;
    }

    const handleScroll = () => {
      const scrollY = window.scrollY;
      let current = "hero";

      HOME_SECTION_IDS.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) {
          return;
        }

        const sectionTop = section.offsetTop - 96;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionBottom) {
          current = id;
        }
      });

      setActiveId(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [enabled]);

  return activeId;
}
