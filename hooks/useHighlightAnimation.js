import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Returns a ref that animates a horizontal highlight reveal when mounted.
 * Attach the ref to the element that should expand (e.g., a background span).
 */
export function useHighlightAnimation({
  delay = 0,
  duration = 0.6,
  ease = "power2.out",
} = {}) {
  const highlightRef = useRef(null);

  useEffect(() => {
    const element = highlightRef.current;
    if (!element) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { transformOrigin: "left center", scaleX: 0 },
        {
          transformOrigin: "left center",
          scaleX: 1,
          duration,
          ease,
          delay,
        }
      );
    }, element);

    return () => ctx.revert();
  }, [delay, duration, ease]);

  return highlightRef;
}

