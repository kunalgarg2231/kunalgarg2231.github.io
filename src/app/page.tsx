"use client";

import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Ticker from "./components/Ticker";
import Hero from "./components/Hero";
import Summary from "./components/Summary";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  useEffect(() => {
    // Scroll-reveal logic
    const revealEls = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    revealEls.forEach((el) => io.observe(el));

    // Nav scroll-spy logic
    const navLinks = document.querySelectorAll(".nav-links a");
    const sections = Array.from(navLinks).map((a) =>
      document.querySelector(a.getAttribute("href") || "")
    );
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = "#" + entry.target.id;
            navLinks.forEach((a) =>
              a.classList.toggle("active", a.getAttribute("href") === id)
            );
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      if (s) spy.observe(s);
    });

    return () => {
      io.disconnect();
      spy.disconnect();
    };
  }, []);

  return (
    <>
      <Navbar />
      <Ticker />
      <Hero />
      <Summary />
      <Experience />
      <Projects />
      <Skills />
      <Education />
      <Certificates />
      <Contact />
    </>
  );
}
