import linkedinIcon from "../assets/svg/instagram.svg"; // swap with your linkedin svg
import instagramIcon from "../assets/svg/instagram.svg";
import xContactIcon from "../assets/svg/xContact.svg";

// ── Contact Row ──────────────────────────────────────────────────────────────
function ContactRow({ label, value, href, icon }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        textDecoration: "none",
        padding: "4px 0",
        borderBottom: "1px solid #00e5ff18",
      }}
    >
      <span style={{ color: "#00e5ff", fontWeight: 600, fontSize: 17 }}>{label}</span>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span style={{ color: "#cdd6e0", fontSize: 14 }}>{value}</span>
        <div
          style={{
            width: 42,
            height: 42,
            borderRadius: "50%",
            border: "2px solid #00e5ff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icon}
        </div>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section style={{ background: "#0a1828", padding: "90px 80px" }}>
      <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 900, marginBottom: 56 }}>
        Contact <span style={{ color: "#00e5ff" }}>Me</span>
      </h2>

      <div style={{
        maxWidth: 680,
        margin: "0 auto",
        background: "#0d2035",
        border: "2px solid #00e5ff",
        borderRadius: 22,
        padding: "52px 64px",
        boxShadow: "0 0 48px #00e5ff22",
        display: "flex",
        flexDirection: "column",
        gap: 32,
      }}>
        {/* LinkedIn */}
        <ContactRow
          label="LinkedIn Profile"
          value="linkedin.com/in/huzaifa-aslam"
          href="https://www.linkedin.com/in/huzaifa-aslam-4845152aa"
          icon={
            <svg viewBox="0 0 24 24" fill="#00e5ff" style={{ width: 20, height: 20 }}>
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          }
        />

        {/* Instagram
        <ContactRow
          label="Instagram"
          value="@huzaifaaslam"
          href="https://instagram.com/huzaifaaslam"
          icon={
            <img
              src={instagramIcon}
              alt="Instagram"
              style={{ width: 20, height: 20, filter: "invert(72%) sepia(98%) saturate(400%) hue-rotate(160deg)" }}
            />
          }
        /> */}

        {/* Email */}
        <ContactRow
          label="Email Address"
          value="huzaifaaslam322@gmail.com"
          href="mailto:huzaifaaslam322@gmail.com"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth={2} style={{ width: 20, height: 20 }}>
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m2 7 10 7 10-7" />
            </svg>
          }
        />

        {/* Phone */}
        <ContactRow
          label="Phone Number"
          value="+92 336 0777378"
          href="tel:+923360777378"
          icon={
            <svg viewBox="0 0 24 24" fill="none" stroke="#00e5ff" strokeWidth={2} style={{ width: 20, height: 20 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          }
        />
      </div>
    </section>
  );
}
