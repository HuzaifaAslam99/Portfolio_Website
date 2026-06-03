import htmlIcon from "../assets/images/html.png";
import cssIcon from "../assets/images/css.png";
import tailwindIcon from "../assets/images/tailwind.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import nodeIcon from "../assets/images/nodejs.png";
import expressIcon from "../assets/images/express.png";
import mongoIcon from "../assets/images/mongoDB.png";
import hardhatIcon from "../assets/images/hardhat.png";
import solidityIcon from "../assets/images/solidity.png";
import blockchainIcon from "../assets/images/blockchain.png";
import wagmiIcon from "../assets/images/wagmi.png";
import chainlinkIcon from "../assets/images/chainlink.png";
import graphQLIcon from "../assets/images/graphQL.png";

const SKILLS = [
  { name: "HTML",        icon: htmlIcon },
  { name: "CSS",         icon: cssIcon },
  { name: "Tailwind CSS",icon: tailwindIcon },
  { name: "JavaScript",  icon: jsIcon },
  { name: "React",       icon: reactIcon },
  { name: "Node.js",     icon: nodeIcon },
  { name: "Express.js",  icon: expressIcon },
  { name: "MongoDB",     icon: mongoIcon },
  { name: "Solidity",    icon: solidityIcon },
  { name: "Hardhat",     icon: hardhatIcon },
  { name: "Wagmi",       icon: wagmiIcon },
  { name: "Chainlink",   icon: chainlinkIcon },
  { name: "GraphQL",     icon: graphQLIcon },
  { name: "Blockchain",  icon: blockchainIcon },
];

function SkillCard({ name, icon }) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 18,
        padding: "28px 20px",
        minWidth: 130,
        minHeight: 140,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 12,
        cursor: "default",
        transition: "all 0.3s",
        boxShadow: "0 4px 20px #0003",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px) scale(1.05)";
        e.currentTarget.style.boxShadow = "0 16px 40px #00e5ff55";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "";
        e.currentTarget.style.boxShadow = "0 4px 20px #0003";
      }}
    >
      <img src={icon} alt={name} style={{ width: 60, height: 60, objectFit: "contain" }} />
      <span style={{ fontWeight: 700, fontSize: 13, color: "#1a1a2e", textAlign: "center" }}>{name}</span>
    </div>
  );
}

export default function Skills() {
  return (
    <section style={{ background: "#0a1828", padding: "90px 80px" }}>
      <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 900, marginBottom: 8 }}>
        My <span style={{ color: "#00e5ff" }}>Skills</span>
      </h2>
      <p style={{ textAlign: "center", color: "#a0b4c8", marginBottom: 56, fontSize: 15 }}>
        Technologies I work with
      </p>

      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: 24,
        justifyContent: "center",
        maxWidth: 900,
        margin: "0 auto",
      }}>
        {SKILLS.map((s) => (
          <SkillCard key={s.name} {...s} />
        ))}
      </div>
    </section>
  );
}
//