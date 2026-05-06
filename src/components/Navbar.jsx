const NAV_LINKS = ["Home", "Skills", "Projects", "Contact"];

export default function Navbar({ active, scrollTo }) {
  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "18px 60px",
        position: "sticky",
        top: 0,
        zIndex: 100,
        background: "#0d1b2acc",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid #00e5ff18",
      }}
    >
      <span style={{ fontWeight: 800, fontSize: 20, color: "#fff", letterSpacing: 0.5 }}>
        My Portfolio
      </span>
      <div style={{ display: "flex", gap: 36 }}>
        {NAV_LINKS.map((link) => (
          <button
            key={link}
            onClick={() => scrollTo(link)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15,
              color: active === link ? "#00e5ff" : "#cdd6e0",
              transition: "color 0.2s",
            }}
          >
            {link}
          </button>
        ))}
      </div>
    </nav>
  );
}
