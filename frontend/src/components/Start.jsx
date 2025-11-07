import React, { useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaGlobe, FaClock, FaComments } from "react-icons/fa";

export default function Start() {
  const form = useRef();

  // ✅ EmailJS + Backend setup
  const BACKEND_URL = "http://localhost:5000";
  const EMAILJS_SERVICE_ID = "service_9wy53h9";
  const EMAILJS_TEMPLATE_ID = "template_dl28r05";
  const EMAILJS_PUBLIC_KEY = "uWMq668TupgP9942q";

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const data = Object.fromEntries(formData.entries());

    console.log("Backend URL:", BACKEND_URL);

    try {
      // ✅ 1️⃣ Send data to backend
      const backendRes = await fetch(`${BACKEND_URL}/api/start`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!backendRes.ok) {
        throw new Error(`Backend error: ${backendRes.status}`);
      }

      const backendResult = await backendRes.json();
      console.log("Backend Response:", backendResult);

      // ✅ 2️⃣ Send Email using EmailJS
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        form.current,
        EMAILJS_PUBLIC_KEY
      );

      alert("✅ Message sent & stored successfully!");
      form.current.reset();
    } catch (err) {
      console.error("❌ Error in sending:", err);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <section
      id="contact"
      style={{
        width: "100%",
        minHeight: "100vh",
        background: "#121212",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "40px",
        padding: "80px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1200px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: "80px",
        }}
      >
        {/* LEFT SIDE - FORM */}
        <div style={{ flex: "1.4", minWidth: "340px" }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "left", marginBottom: "40px" }}
          >
            <button
              style={{
                background: "linear-gradient(90deg, #005eff, #00cfff)",
                border: "none",
                borderRadius: "20px",
                padding: "6px 16px",
                color: "#fff",
                fontWeight: "600",
                letterSpacing: "0.5px",
                marginBottom: "20px",
              }}
            >
              CONTACT
            </button>

            <h1
              style={{
                fontSize: "48px",
                fontWeight: "700",
                lineHeight: "1.2",
                color: "#fff",
              }}
            >
              Let’s{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #009dff, #00e6e6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                talk business.
              </span>{" "}
              But <br />
              you first.
            </h1>
          </motion.div>

          {/* ✅ FORM SECTION */}
          <form
            ref={form}
            onSubmit={sendEmail}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "20px",
            }}
          >
            <div style={inputGroup}>
              <label style={labelStyle}>Hello, my name is:</label>
              <input
                type="text"
                name="from_name"
                placeholder="Your name"
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Here is my email:</label>
              <input
                type="email"
                name="from_email"
                placeholder="yourname@gmail.com"
                required
                style={inputStyle}
              />
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>Tell us about your project:</label>
              <select
                name="project_type"
                style={{ ...inputStyle, color: "#a9b8cc" }}
                required
              >
                <option value="Social Media Marketing">
                  Social Media Marketing
                </option>
                <option value="Web Design">Web Design</option>
                <option value="Branding">Branding</option>
                <option value="SEO Optimization">SEO Optimization</option>
                <option value="Content Creation">Content Creation</option>
                <option value="App Development">App Development</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div style={inputGroup}>
              <label style={labelStyle}>
                When do you need this project completed?
              </label>
              <input
                type="text"
                name="timeline"
                placeholder="I need it by next month"
                style={inputStyle}
                required
              />
            </div>

            <div
              style={{
                gridColumn: "1 / -1",
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <label style={labelStyle}>About project:</label>
              <textarea
                name="message"
                rows="5"
                placeholder="Your project description"
                required
                style={{
                  ...inputStyle,
                  resize: "none",
                }}
              ></textarea>
            </div>

            <div style={{ gridColumn: "1 / -1" }}>
              <button
                type="submit"
                style={submitButton}
                onMouseOver={(e) => (e.target.style.opacity = 0.85)}
                onMouseOut={(e) => (e.target.style.opacity = 1)}
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* RIGHT SIDE - INFO */}
        <div style={{ flex: "0.8", minWidth: "300px" }}>
          <h3 style={infoTitle}>Connect with us</h3>
          <p style={infoLine}>
            <FaEnvelope color="#00bfff" /> info@codeorbittechnologies.com
          </p>
          <p style={infoLine}>
            <FaComments color="#00bfff" /> +91 8294220402
          </p>

          <h3 style={infoTitle}>Address</h3>
          <p style={infoLine}>
            <FaGlobe color="#00bfff" />
            Second Floor, Tarunika Foods & Confectionery, Dev Raj Tower,
            Gewalbigha, Gaya, Bihar 823001
          </p>
          <p style={infoLine}>
            <FaClock color="#00bfff" /> Monday → Saturday 09:00AM–07:00PM
          </p>
        </div>
      </div>

      {/* ✅ Responsive Adjustments */}
      <style>
        {`
          @media (max-width: 1024px) {
            section#contact {
              padding: 60px 30px;
            }
            h1 {
              font-size: 40px !important;
            }
          }

          @media (max-width: 768px) {
            section#contact {
              flex-direction: column;
              padding: 60px 20px;
            }
            h1 {
              font-size: 32px !important;
              text-align: center !important;
            }
            form {
              display: flex !important;
              flex-direction: column !important;
            }
            button[type="submit"] {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            h1 {
              font-size: 26px !important;
              line-height: 1.4 !important;
            }
            input, textarea, select {
              font-size: 14px !important;
            }
            .infoLine {
              font-size: 14px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

/* ================== STYLES ================== */
const inputGroup = {
  display: "flex",
  flexDirection: "column",
  gap: "8px",
};

const labelStyle = {
  fontSize: "14px",
  color: "#a9b8cc",
};

const inputStyle = {
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: "10px",
  padding: "14px",
  color: "#fff",
  outline: "none",
  fontSize: "15px",
  transition: "0.3s",
};

const submitButton = {
  width: "100%",
  background: "linear-gradient(90deg, #3b9dff, #00e6e6)",
  border: "none",
  padding: "15px",
  borderRadius: "10px",
  color: "#001020",
  fontWeight: "700",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
};

const infoTitle = {
  fontSize: "22px",
  marginBottom: "20px",
  color: "#fff",
  fontWeight: "600",
};

const infoLine = {
  marginBottom: "12px",
  color: "#b0c4de",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};
