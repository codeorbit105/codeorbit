import React from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function WebSolutions() {
  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "180px 8vw 120px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "1.2",
            background: "linear-gradient(90deg, #00bfff, #c084fc)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          From “manage yourself,” to fully integrated
          <br />
          <span style={{ color: "#d48fff" }}>Websites or Apps</span>, we cover
          every aspect of development
          <br />
          for <span style={{ color: "#d48fff" }}>every market size.</span>
        </motion.h1>
      </section>

      {/* ===== CASE STUDY / IMAGE SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 8vw",
        }}
      >
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          style={{ fontSize: "24px", color: "#b0c4de" }}
        >
          Tailored & scalable{" "}
          <span style={{ color: "#00bfff" }}>Web & App solutions.</span>
        </motion.h2>

        <motion.img
          src="/assets/projects/sol1.jpg" // 🔹 Replace with your real image
          alt="Web Solutions Project"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          style={{
            width: "70%",
            maxWidth: "800px",
            borderRadius: "12px",
            marginTop: "40px",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        />
      </section>

      {/* ===== EXPERTISE / DESCRIPTION SECTION ===== */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          gap: "60px",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: "700",
              lineHeight: "1.3",
            }}
          >
            <span style={{ color: "#00bfff" }}>Tailored</span> web and app
            solutions, <br />
            <span style={{ color: "#00e6e6" }}>ready to scale</span>, because
            there is no such thing as one-size-fits-all.
          </h2>

          <button
            style={{
              background: "linear-gradient(90deg, #005eff, #00d4ff)",
              border: "none",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "25px",
              fontWeight: "600",
              marginTop: "30px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            💡 OUR OFFERS
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div
          style={{
            flex: "1",
            minWidth: "340px",
            color: "#b0c4de",
            fontSize: "17px",
            lineHeight: "1.8",
            marginTop: "30px",
          }}
        >
          Whether you need a simple showcase website, a scalable e-commerce
          platform, or an integrated application — we build it all, from small
          businesses to enterprise-level systems. <br />
          <br />
          Code Orbit Technologies specializes in performance-driven development
          with responsive design, SEO optimization, and modern architecture that
          scales with your audience.
        </div>
      </section>

      {/* ===== SERVICE LIST (Expandable) ===== */}
      <section style={{ padding: "60px 8vw 100px" }}>
        {[
          {
            title: "Showcase Website",
            description:
              "We create visually stunning showcase websites that represent your brand identity with clarity and elegance. Perfect for businesses looking to make a strong first impression online.",
          },
          {
            title: "E-commerce",
            description:
              "From product listing to secure checkout, we build full-featured e-commerce platforms designed for high performance, easy navigation, and conversion-focused user experiences.",
          },
          {
            title: "App Development",
            description:
              "We design and develop scalable, high-performing mobile and web apps that blend innovation, design, and seamless functionality for users across all devices.",
          },
          {
            title: "Web Portals",
            description:
              "Our team builds advanced web portals with user authentication, dashboards, and custom data systems — tailored to simplify your business operations and improve collaboration.",
          },
          {
            title: "UI/UX Design",
            description:
              "We craft intuitive and aesthetic interfaces that enhance user engagement, combining creative visuals with user-centered design principles for an unforgettable digital experience.",
          },
          {
            title: "API Integration & CMS Setup",
            description:
              "We integrate APIs and set up powerful CMS platforms like WordPress, Strapi, and Sanity — making your website dynamic, scalable, and easy to manage.",
          },
        ].map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            style={{
              borderBottom: "1px solid rgba(255,255,255,0.1)",
              padding: "22px 0",
            }}
          >
            <ServiceItem
              index={i}
              title={service.title}
              description={service.description}
            />
          </motion.div>
        ))}
      </section>
    </div>
  );
}

/* ===== SERVICE ITEM COMPONENT ===== */
function ServiceItem({ index, title, description }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      {/* Header */}
      <div
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <span style={{ color: "#00bfff", fontWeight: "500" }}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <h4 style={{ fontSize: "20px", fontWeight: "500" }}>{title}</h4>
        </div>

        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            fontSize: "22px",
            color: "#00bfff",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          ⌄
        </motion.span>
      </div>

      {/* Description */}
      <AnimatePresence>
        {open && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.7,
              fontSize: "15px",
              paddingLeft: "50px",
              maxWidth: "750px",
            }}
          >
            {description}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
