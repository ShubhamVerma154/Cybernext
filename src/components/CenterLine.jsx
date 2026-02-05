import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../assets/css/centreline.scss";

gsap.registerPlugin(ScrollTrigger);

function CenterLine({
  start = "top 100%",
  end = "top 60%",
  height = 80,
}) {
  const wrapperRef = useRef(null);
  const lineRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { height: 0 },
        {
          height,
          ease: "none",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start,
            end,
            scrub: true,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert(); // 🔥 cleanup per instance
  }, [start, end, height]);

  return (
    <div className="centreline" ref={wrapperRef}>
      <div className="mainLine" ref={lineRef}></div>
    </div>
  );
}

export default CenterLine;
