import { useState, useEffect } from "react";
import githubIcon from "../assets/svg/github.svg";
import instagramIcon from "../assets/svg/instagram.svg";


function useTyped(words, speed = 110, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [wi, setWi] = useState(0);
  const [ci, setCi] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wi % words.length];
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplay(word.slice(0, ci + 1));
        if (ci + 1 === word.length) {
          setTimeout(() => setDeleting(true), pause);
        } else {
          setCi((c) => c + 1);
        }
      } else {
        setDisplay(word.slice(0, ci - 1));
        if (ci - 1 === 0) {
          setDeleting(false);
          setWi((w) => w + 1);
          setCi(0);
        } else {
          setCi((c) => c - 1);
        }
      }
    }, deleting ? speed / 2 : speed);
    return () => clearTimeout(timeout);
  }, [ci, deleting, wi, words, speed, pause]);

  return display;
}

// ── Social icon button ───────────────────────────────────────────────────────
function SocialBtn({ href, icon, alt }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={alt}
      style={{
        width: 44,
        height: 44,
        borderRadius: "50%",
        border: "2px solid #00e5ff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "all 0.2s",
        color: "#00e5ff",
        textDecoration: "none",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = "#00e5ff";
        e.currentTarget.style.boxShadow = "0 0 16px #00e5ff88";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = "transparent";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      <img src={icon} alt={alt} style={{ width: 20, height: 20, filter: "invert(1) sepia(1) saturate(5) hue-rotate(160deg)" }} />
    </a>
  );
}

// ── CTA Button ───────────────────────────────────────────────────────────────
function CTABtn({ label, onClick, filled }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 30px",
        borderRadius: 30,
        fontWeight: 700,
        fontSize: 14,
        cursor: "pointer",
        border: "2px solid #00e5ff",
        background: filled ? "#00e5ff" : "transparent",
        color: filled ? "#0d1b2a" : "#00e5ff",
        transition: "all 0.2s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px #00e5ff66";
        if (!filled) e.currentTarget.style.background = "#00e5ff18";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "none";
        if (!filled) e.currentTarget.style.background = "transparent";
      }}
    >
      {label}
    </button>
  );
}

export default function Home({ scrollTo }) {
  const role = useTyped([
    "Blockchain Developer",
    "FullStack Developer",
    "Software Engineer",
  ]);

  return (
    <section
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 40px",
        minHeight: "calc(100vh - 70px)",
        gap: 20,
      }}
    >
      <p style={{ color: "#cdd6e0", fontSize: 18 }}>Hello, It's Me</p>

      <h1 style={{ fontSize: 58, fontWeight: 900, lineHeight: 1.1, color: "#fff" }}>
        Huzaifa Aslam
      </h1>

      <h2 style={{ fontSize: 26, fontWeight: 700, color: "#fff" }}>
        And I am a{" "}
        <span style={{ color: "#00e5ff" }}>
          {role}
          <span
            style={{
              borderRight: "2px solid #00e5ff",
              marginLeft: 2,
              animation: "blink 1s step-end infinite",
            }}
          />
        </span>
      </h2>

      <p style={{ color: "#a0b4c8", lineHeight: 1.85, fontSize: 15, maxWidth: 560, marginTop: 4 }}>
        Highly Motivated Software Engineer with a strong foundation in FullStack Development
        and Blockchain technology. Passionate about building scalable, beautiful, and
        decentralised applications.
      </p>

      {/* Social icons */}
      <div style={{ display: "flex", gap: 16, marginTop: 8 }}>
        {/* LinkedIn — inline SVG (no linkedin.svg in assets) */}
        <a
          href="https://www.linkedin.com/in/huzaifa-aslam-4845152aa/"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
          style={{
            width: 44, height: 44, borderRadius: "50%",
            border: "2px solid #00e5ff", display: "flex",
            alignItems: "center", justifyContent: "center",
            transition: "all 0.2s", textDecoration: "none", color: "#00e5ff",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#00e5ff"; e.currentTarget.style.color = "#0d1b2a"; e.currentTarget.style.boxShadow = "0 0 16px #00e5ff88"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#00e5ff"; e.currentTarget.style.boxShadow = "none"; }}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" style={{ width: 20, height: 20 }}>
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
        </a>

        <SocialBtn href="https://github.com/HuzaifaAslam99" icon={githubIcon} alt="GitHub" />
        <SocialBtn href="https://www.instagram.com/huzaifaaslam99/" icon={instagramIcon} alt="Instagram" />
      </div>

      {/* CTA buttons */}
      <div style={{ display: "flex", gap: 18, marginTop: 10 }}>
        <CTABtn label="View Projects" onClick={() => scrollTo("Projects")} filled />
        <CTABtn label="Contact Me" onClick={() => scrollTo("Contact")} filled={false} />
      </div>
    </section>
  );
}
