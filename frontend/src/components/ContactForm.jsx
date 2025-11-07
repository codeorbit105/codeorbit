import React from "react";

export default function ContactForm() {
  return (
    <section
      style={{
        width: "100vw",
        background: "#121212",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "100px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1300px",
          // background: "linear-gradient(90deg, #37b7ff 0%, #76e0ff 100%)",
          borderRadius: "15px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          overflow: "hidden",
          padding: "60px 80px",
        }}
      >
        {/* ---------- LEFT CONTENT ---------- */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            zIndex: 2,
          }}
        >
          <h1
            style={{
              fontSize: "60px",
              fontWeight: "800",
              color: "#fff",
              lineHeight: "1.2",
              marginBottom: "30px",
            }}
          >
            Transform your{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #004cff, #0078ff)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              brand today!
            </span>
          </h1>

          <a
            href="/start"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "8px",
              backgroundColor: "#000",
              color: "#fff",
              fontSize: "16px",
              fontWeight: "600",
              padding: "14px 30px",
              borderRadius: "10px",
              textDecoration: "none",
              transition: "all 0.3s ease",
            }}
            onMouseOver={(e) =>
              (e.target.style.boxShadow = "0 0 25px rgba(0,0,0,0.3)")
            }
            onMouseOut={(e) => (e.target.style.boxShadow = "none")}
          >
            Let’s Discuss a project →
          </a>
        </div>

        {/* ---------- RIGHT SIDE IMAGE ---------- */}
        <div
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
            minWidth: "300px",
          }}
        >
          <img
            src="/assets/logos/logo.png"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              objectFit: "contain",
              transform: "translateY(10px)",
            }}
          />
        </div>
      </div>
    </section>
  );
}
