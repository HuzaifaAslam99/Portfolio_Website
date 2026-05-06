import { useState, useRef, useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

export default function App() {
  const [active, setActive] = useState("Home");

  const sectionRefs = {
    Home: useRef(null),
    Skills: useRef(null),
    Projects: useRef(null),
    Contact: useRef(null),
  };

  const scrollTo = (section) => {
    setActive(section);
    sectionRefs[section].current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.dataset.section);
        });
      },
      { threshold: 0.4 }
    );
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        ref.current.dataset.section = key;
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ background: "#0d1b2a", minHeight: "100vh", color: "#fff", fontFamily: "'Segoe UI', sans-serif" }}>
      <Navbar active={active} scrollTo={scrollTo} />
      <div ref={sectionRefs.Home}><Home scrollTo={scrollTo} /></div>
      <div ref={sectionRefs.Skills}><Skills /></div>
      <div ref={sectionRefs.Projects}><Projects /></div>
      <div ref={sectionRefs.Contact}><Contact /></div>
      <footer className="text-center py-5" style={{ color: "#a0b4c8", fontSize: 13, borderTop: "1px solid #00e5ff18" }}>
        © {new Date().getFullYear()} Huzaifa Aslam — All rights reserved
      </footer>
      <style>{`
        @keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-12px)} }
        html { scroll-behavior: smooth; }
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
    </div>
  );
}
