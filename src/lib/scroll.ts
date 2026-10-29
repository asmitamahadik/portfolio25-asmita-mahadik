import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

let lenis: Lenis | null = null;
let tick: ((time: number) => void) | null = null;

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initScroll() {
  if (prefersReducedMotion() || lenis) return;

  lenis = new Lenis({
    autoRaf: false,
    smoothWheel: true,
  });

  lenis.on("scroll", ScrollTrigger.update);

  tick = (time: number) => {
    lenis?.raf(time * 1000);
  };
  gsap.ticker.add(tick);
  gsap.ticker.lagSmoothing(0);

  ScrollTrigger.refresh();
}

export function destroyScroll() {
  if (tick) {
    gsap.ticker.remove(tick);
    tick = null;
  }
  lenis?.destroy();
  lenis = null;
}

export function scrollToTarget(target: string | HTMLElement, offset = 0) {
  if (lenis) {
    lenis.scrollTo(target, { offset });
    return;
  }

  const el = typeof target === "string" ? document.querySelector(target) : target;
  el?.scrollIntoView({ behavior: prefersReducedMotion() ? "auto" : "smooth", block: "start" });
}

export { ScrollTrigger };
