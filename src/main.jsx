import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/* ---------- LENIS SETUP ---------- */
const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
  smoothTouch: false, // keep native scroll on mobile
  easing: (t) => 1 - Math.pow(1 - t, 3),
});

/* ---------- RAF LOOP ---------- */
function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update(); // sync GSAP with Lenis
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

/* ---------- LISTEN TO LENIS SCROLL ---------- */
lenis.on("scroll", ScrollTrigger.update);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
