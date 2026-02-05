import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "../assets/css/banner.scss";
import BannerBg from "../assets/images/banneBg.svg";
import FirstImg from "../assets/images/firstImg.webp";
import SecondImg from "../assets/images/SecondImg.webp";
import ThirdImg from "../assets/images/thirdImg.webp";
import ForthImg from "../assets/images/forthImg.webp";
import FifthImg from "../assets/images/fifthImg.webp";
import SixthImg from "../assets/images/sixthImg.webp";

gsap.registerPlugin(ScrollTrigger);

function Banner() {
  const bannerFirstRef = useRef(null);

  const secondImageRefs = useRef([]);
  const thirdImageRefs = useRef([]);

  secondImageRefs.current = [];
  thirdImageRefs.current = [];

  useLayoutEffect(() => {
    /* ---------- INTRO FADE ---------- */
    gsap.fromTo(
      bannerFirstRef.current,
      { autoAlpha: 0, y: 40 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 0.8,
        ease: "power3.out",
      }
    );

    /* ---------- BANNER SECOND PARALLAX ---------- */
    const secondY = [250, 150, -200];

    secondImageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: secondY[i],
          ease: "none",
          scrollTrigger: {
            trigger: ".Banner-second",
            start: "top top",
            end: "top -100%",
            scrub: true,
          },
        }
      );
    });

    /* ---------- BANNER THIRD PARALLAX ---------- */
    const thirdY = [-150, 200, -20];

    thirdImageRefs.current.forEach((img, i) => {
      gsap.fromTo(
        img,
        { y: 0 },
        {
          y: thirdY[i],
          ease: "none",
          scrollTrigger: {
            trigger: ".Banner-third",
            start: "top 100%",
            end: "top top",
            scrub: true,
          },
        }
      );
    });

    /* ---------- BELOW LINE HEIGHT ANIMATION ---------- */
    gsap.fromTo(
      ".mainline",
      { height: "0dvh" },
      {
        height: "30dvh",
        ease: "none",
        scrollTrigger: {
          trigger: ".Below-line",
          start: "top 100%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section className="main-Banner">
      <img src={BannerBg} className="MainBg" alt="Banner Background" />

      {/* TEXT */}
      <article className="Banner-frst">
        <div className="main-content" ref={bannerFirstRef}>
          <h1>Cybernext</h1>
          <h4>Mohalli Best Restaurant</h4>
        </div>
      </article>

      {/* BANNER SECOND */}
      <article className="Banner-second imgBanner">
        {[FirstImg, SecondImg, ThirdImg].map((img, i) => (
          <div key={i} className={`Imagecontainer Banner${i}`}>
            <img
              src={img}
              className="bannerImg"
              ref={(el) => el && secondImageRefs.current.push(el)}
              alt={`Banner second ${i}`}
            />
          </div>
        ))}
      </article>

      {/* BANNER THIRD */}
      <article className="Banner-third imgBanner">
        {[ForthImg, FifthImg, SixthImg].map((img, i) => (
          <div key={i} className={`Imagecontainer Banner${i}`}>
            <img
              src={img}
              className="bannerImg"
              ref={(el) => el && thirdImageRefs.current.push(el)}
              alt={`Banner third ${i}`}
            />
          </div>
        ))}
      </article>

      {/* BELOW LINE */}
      <article className="Below-line">
        <div className="mainline"></div>
      </article>
    </section>
  );
}

export default Banner;
