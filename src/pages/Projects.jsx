import foodCartImg from "../assets/images/foodcart.png";
import ticketImg from "../assets/images/tickets.png";
import githubIcon from "../assets/svg/github.svg"; // Assuming you still use this somewhere in your UI

import tailwindIcon from "../assets/images/tailwind.png";
import jsIcon from "../assets/images/js.png";
import reactIcon from "../assets/images/react.png";
import nodeIcon from "../assets/images/nodejs.png";
import expressIcon from "../assets/images/express.png";
import mongoIcon from "../assets/images/mongoDB.png";
import hardhatIcon from "../assets/images/hardhat.png";
import solidityIcon from "../assets/images/solidity2.png";
import blockchainIcon from "../assets/images/blockchain.png";

const PROJECTS = [
  {
    title: "Web3 Food Cart DApp",
    image: foodCartImg,
    description:
      "A full-stack decentralized food ordering system accepting ETH & USDC on Base Sepolia. To prevent lost payments when users disconnect mid-transaction, I built a robust server-side verification system. Orders are saved as 'pending' in MongoDB, Solidity smart contracts handle the payment, and Alchemy Webhooks trigger the backend to cryptographically verify the blockchain event before updating the database to 'paid'. This is my flagship project demonstrating advanced async state management.",
    tagIcons: [reactIcon, tailwindIcon, nodeIcon, expressIcon, mongoIcon, hardhatIcon, solidityIcon, blockchainIcon],
    tagNames: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Hardhat", "Solidity", "Base Blockchain"],
    github: "https://github.com/HuzaifaAslam99/FoodAppMernBase",
  },
  {
    title: "Cricket Tickets DApp",
    image: ticketImg,
    description:
      "A decentralized event ticketing platform applying the same bulletproof event-driven architecture as my Food Cart DApp. Users securely purchase cricket tickets using crypto. The system stores ticket metadata/IPFS hashes on the blockchain, while the backend independently verifies the transaction via webhooks to update the order status in MongoDB. This proves the scalability of the Webhook architecture across different Web3 use cases.",
    tagIcons: [reactIcon, tailwindIcon, nodeIcon, expressIcon, mongoIcon, hardhatIcon, solidityIcon, blockchainIcon],
    tagNames: ["React", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Hardhat", "Solidity"],
    github: "https://github.com/HuzaifaAslam99/CricketVault-DApp",
  },
];

// export default PROJECTS; // Make sure to export it based on how your file is structured

function ProjectCard({ title, image, description, tagIcons, tagNames, github }) {
  return (
    <div
      style={{
        background: "#0d2035",
        border: "2px solid #00e5ff44",
        borderRadius: 20,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 18,
        transition: "all 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "#00e5ff";
        e.currentTarget.style.boxShadow = "0 0 28px #00e5ff33";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "#00e5ff44";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Screenshot */}
      <div style={{
        width: "100%",
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        border: "1px solid #00e5ff22",
        background: "#0a1828",
      }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
        />
      </div>

      <h3 style={{ fontSize: 22, fontWeight: 800, textAlign: "center", color: "#fff" }}>{title}</h3>

      <p style={{ color: "#00e5ffcc", fontSize: 14, lineHeight: 1.75 }}>{description}</p>

      {/* Footer: tech icons + github */}
      <div style={{   display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: "auto", paddingTop: 8 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
          {tagIcons.map((icon, i) => (
            <img key={i} src={icon} alt={tagNames[i]} title={tagNames[i]} style={{ width: 36, height: 36, objectFit: "contain" }} />
          ))}
        </div>

        <a
          href={github}
          target="_blank"
          rel="noreferrer"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            padding: "8px 14px",
            borderRadius: 10,
            border: "1px solid #ffffff33",
            background: "#ffffff14",
            color: "#fff",
            fontSize: 13,
            fontWeight: 600,
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={(e) => { e.currentTarget.style.background = "#00e5ff22"; }}
          onMouseLeave={(e) => { e.currentTarget.style.background = "#ffffff14"; }}
        >
          <img src={githubIcon} alt="GitHub" style={{ width: 20, height: 20, filter: "invert(1)" }} />
          GitHub
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section style={{ padding: "90px 80px" }}>
      <h2 style={{ textAlign: "center", fontSize: 40, fontWeight: 900, marginBottom: 8 }}>
        My <span style={{ color: "#00e5ff" }}>Projects</span>
      </h2>
      <p style={{ textAlign: "center", color: "#a0b4c8", marginBottom: 56, fontSize: 15 }}>
        Things I've built
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(420px, 1fr))",
        gap: 32,
        maxWidth: 1100,
        margin: "0 auto",
      }}>
        {PROJECTS.map((p) => (
          <ProjectCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}
