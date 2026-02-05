import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import scrollImg from "../assets/images/top.svg";
import "../assets/css/scrollTop.scss";

gsap.registerPlugin(ScrollTrigger);

function ScrollCircle() {
  const circleRef = useRef(null);
  const triggerRef = useRef(null);

  useLayoutEffect(() => {
    if (!circleRef.current) return;

    const radius = 22;
    const circumference = 2 * Math.PI * radius;

    const ctx = gsap.context(() => {
      gsap.set(circleRef.current, {
        strokeDasharray: circumference,
        strokeDashoffset: circumference,
        rotate: -90,
        transformOrigin: "50% 50%",
      });

      gsap.to(circleRef.current, {
        strokeDashoffset: 0,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    }, triggerRef);

    return () => ctx.revert(); // ✅ scoped cleanup
  }, []);

  return (
    <div
      className="scroll-indicator"
      ref={triggerRef}
      onClick={() =>
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    >
      <img src={scrollImg} className="scrollTop" alt="Scroll to top" />

      <svg width="50" height="50" viewBox="0 0 50 50">
        {/* Background circle */}
        <circle
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="#fff"
          strokeWidth="3"
        />

        {/* Progress circle */}
        <circle
          ref={circleRef}
          cx="25"
          cy="25"
          r="22"
          fill="none"
          stroke="#232821"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default ScrollCircle;
