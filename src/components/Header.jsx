import { useState, useRef, useLayoutEffect, useEffect } from "react";
import gsap from "gsap";
import Sidelogo from "../assets/images/SideLogo.png";
import "../assets/css/header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const menuRef = useRef(null);
  const itemsRef = useRef([]);
  const tl = useRef(null);

  // Reset items ref on every render
  itemsRef.current = [];

  useLayoutEffect(() => {
    /* HEADER LOAD ANIMATION*/
    gsap.fromTo(
      headerRef.current,
      { y: -50, autoAlpha: 0 },
      {
        y: 0,
        autoAlpha: 1,
        duration: 1,
        ease: "power3.out",
      }
    );

    /*  MENU INITIAL STATE  */
    gsap.set(menuRef.current, { top: "-100dvh" });
    gsap.set(itemsRef.current, { autoAlpha: 0, y: 20 });

    /* MENU TIMELINE */
    tl.current = gsap.timeline({ paused: true });

    tl.current
      .to(menuRef.current, {
        top: 0,
        duration: 0.8,
        ease: "power4.out",
      })
      .to(
        itemsRef.current,
        {
          autoAlpha: 1,
          y: 0,
          stagger: 0.12,
          duration: 0.5,
          ease: "power3.out",
        },
        "-=0.3"
      );

    return () => {
      tl.current && tl.current.kill();
    };
  }, []);

  /* ---------------- PLAY / REVERSE MENU ---------------- */
  useEffect(() => {
    if (!tl.current) return;
    menuOpen ? tl.current.play() : tl.current.reverse();
  }, [menuOpen]);

  return (
    <>
      {/* HEADER */}
      <header ref={headerRef}>
        <div className="left-header">
          <img src={Sidelogo} alt="Side Logo" />
        </div>

        <div className="right-header">
          <div
            className={`burger pointer ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </header>

      {/* FULLSCREEN MENU */}
      <div className="MainOpen" ref={menuRef}>
        <ul>
          {["About", "Main", "Contact"].map((item, i) => (
            <li key={i} ref={(el) => el && itemsRef.current.push(el)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Header;
