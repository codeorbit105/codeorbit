import React from "react";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaEnvelope, FaClock, FaGlobe } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Social + Contact Links
  const instagramUrl =
    "https://www.instagram.com/codeorbitofficial?igsh=MThmeGp4eDlvMnRheg==";
  const linkedinUrl =
    "https://www.linkedin.com/in/codeorbit-technologies-025560397/";
  const mailAddress = "info@codeorbittechnologies.com";
  const phoneNumber = "+91 8294220402";

  return (
    <footer
      className="footer"
      style={{
        width: "100%",
        color: "#fff",
        padding: "100px 8vw 60px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "#000814",
        overflow: "hidden",
      }}
    >
      {/* ----------- Top Section ----------- */}
      <div
        className="footer-top"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "80px",
          width: "100%",
          maxWidth: "1400px",
        }}
      >
        {/* Left Section */}
        <div style={{ flex: "1", minWidth: "300px" }}>
          <p
            style={{
              fontSize: "14px",
              letterSpacing: "1px",
              color: "#66b3ff",
              marginBottom: "10px",
            }}
          >
            HELLO! WE’RE LISTENING
          </p>

          <h1
            style={{
              fontSize: "72px",
              fontWeight: "800",
              lineHeight: "1.1",
              marginBottom: "30px",
            }}
          >
            Let’s talk <br />
            about <br />
            <span
              style={{
                background: "linear-gradient(90deg, #009dff, #00e6e6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              your project
            </span>
          </h1>

          <p
            style={{
              color: "#cce3ff",
              fontWeight: "500",
              fontSize: "16px",
              marginTop: "20px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#cce3ff")}
          >
            SOUND GOOD? LET’S CONNECT! →
          </p>
        </div>

        {/* Right Section */}
        <div
          style={{
            flex: "1.2",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "50px",
            alignItems: "flex-start",
          }}
        >
          {/* Connect With Us */}
          <div>
            <button style={btnStyle}>Connect with us</button>
            <p
              style={mailLink}
              onClick={() => (window.location.href = `mailto:${mailAddress}`)}
            >
              <FaEnvelope style={iconStyle} />
              {mailAddress}
            </p>
            <p
              style={phoneLink}
              onClick={() => (window.location.href = `tel:${phoneNumber}`)}
            >
              {phoneNumber}
            </p>
          </div>

          {/* Address */}
          <div>
            <button style={btnStyle}>Address</button>
            <p style={paraStyle}>
              <FaGlobe style={iconStyle} />
              Second Floor, Tarunika Foods & Confectionery, Dev Raj Tower,
              Gewalbigha, Gaya, Bihar 823001
            </p>
            <p style={paraStyle}>
              <FaClock style={iconStyle} /> Monday–Saturday 09:00AM–07:00PM
            </p>
          </div>

          {/* Follow Us */}
          <div>
            <button style={btnStyle}>Follow us</button>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <p
                onClick={() => window.open(instagramUrl, "_blank")}
                style={followLink}
                onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                Instagram
              </p>
              <p
                onClick={() => window.open(linkedinUrl, "_blank")}
                style={followLink}
                onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
                onMouseOut={(e) => (e.target.style.color = "#fff")}
              >
                LinkedIn
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ----------- Bottom Section ----------- */}
      <div
        className="footer-bottom"
        style={{
          width: "100%",
          maxWidth: "1400px",
          marginTop: "100px",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          paddingTop: "25px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          color: "#b0c4de",
          fontSize: "14px",
          flexWrap: "wrap",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <div>© {currentYear} CodeOrbit Technologies Private Limited</div>

        <div
          style={{
            display: "flex",
            gap: "25px",
            fontSize: "22px",
            cursor: "pointer",
            justifyContent: "center",
          }}
        >
          <FaInstagram
            onClick={() => window.open(instagramUrl, "_blank")}
            style={socialIcon}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#b0c4de")}
          />
          <FaLinkedinIn
            onClick={() => window.open(linkedinUrl, "_blank")}
            style={socialIcon}
            onMouseOver={(e) => (e.target.style.color = "#00c4ff")}
            onMouseOut={(e) => (e.target.style.color = "#b0c4de")}
          />
        </div>
      </div>

      {/* ✅ Responsive Styling */}
      <style>
        {`
          @media (max-width: 1024px) {
            .footer {
              padding: 80px 6vw 50px !important;
            }
            .footer h1 {
              font-size: 54px !important;
            }
            .footer-top {
              gap: 60px !important;
            }
          }

          @media (max-width: 768px) {
            .footer h1 {
              font-size: 42px !important;
              text-align: center !important;
            }
            .footer p {
              text-align: center !important;
            }
            .footer-top {
              flex-direction: column !important;
              gap: 40px !important;
              align-items: center !important;
            }
            .footer-bottom {
              flex-direction: column !important;
              gap: 16px !important;
            }
          }

          @media (max-width: 480px) {
            .footer {
              padding: 60px 5vw 40px !important;
            }
            .footer h1 {
              font-size: 32px !important;
              line-height: 1.3 !important;
            }
            .footer button {
              padding: 8px 16px !important;
              font-size: 14px !important;
            }
            .footer p {
              font-size: 14px !important;
            }
            .footer-bottom {
              font-size: 13px !important;
            }
          }
        `}
      </style>
    </footer>
  );
}

/* ========= STYLES ========= */
const btnStyle = {
  background: "linear-gradient(90deg, #005eff, #00cfff)",
  border: "none",
  borderRadius: "8px",
  padding: "10px 20px",
  color: "#fff",
  fontWeight: "600",
  marginBottom: "15px",
  cursor: "pointer",
};

const iconStyle = {
  marginRight: "10px",
  color: "#00bfff",
};

const paraStyle = {
  marginBottom: "10px",
  color: "#d0e3ff",
  lineHeight: "1.6",
  fontSize: "15px",
};

const mailLink = {
  marginBottom: "10px",
  color: "#d0e3ff",
  lineHeight: "1.6",
  fontSize: "15px",
};

const phoneLink = {
  cursor: "pointer",
  color: "#fff",
  fontSize: "15px",
  transition: "0.3s",
};

const followLink = {
  color: "#fff",
  fontSize: "16px",
  cursor: "pointer",
  transition: "0.3s",
};

const socialIcon = {
  transition: "0.3s",
  color: "#b0c4de",
};
