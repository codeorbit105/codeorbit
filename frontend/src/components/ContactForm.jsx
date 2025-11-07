import React from "react";

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* ---------- LEFT CONTENT ---------- */}
        <div className="contact-left">
          <h1 className="contact-title">
            Transform your <span className="highlight">brand today!</span>
          </h1>

          <a href="/start" className="contact-btn">
            Let’s Discuss a Project →
          </a>
        </div>

        {/* ---------- RIGHT IMAGE ---------- */}
        <div className="contact-right">
          <img
            src="/assets/logos/logo.png"
            alt="Contact Logo"
            className="contact-image"
          />
        </div>
      </div>

      {/* 💅 Responsive Styling */}
      <style>{`
        /* ===== BASE SECTION ===== */
        .contact-section {
          width: 100vw;
          background: #121212;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 100px 20px;
          box-sizing: border-box;
        }

        .contact-container {
          width: 100%;
          max-width: 1300px;
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          overflow: hidden;
          padding: 60px 80px;
          box-sizing: border-box;
        }

        /* ===== LEFT SIDE ===== */
        .contact-left {
          flex: 1;
          min-width: 320px;
          z-index: 2;
          text-align: left;
        }

        .contact-title {
          font-size: clamp(2rem, 5vw, 4rem);
          font-weight: 800;
          color: #fff;
          line-height: 1.2;
          margin-bottom: 30px;
        }

        .highlight {
          background: linear-gradient(90deg, #004cff, #0078ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          background-color: #000;
          color: #fff;
          font-size: 16px;
          font-weight: 600;
          padding: 14px 30px;
          border-radius: 10px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .contact-btn:hover {
          box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
          transform: translateY(-2px);
        }

        /* ===== RIGHT IMAGE ===== */
        .contact-right {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          position: relative;
          min-width: 300px;
          margin-top: 20px;
        }

        .contact-image {
          width: 100%;
          max-width: 550px;
          height: auto;
          object-fit: contain;
          transform: translateY(10px);
        }

        /* =============== RESPONSIVE BREAKPOINTS =============== */

        /* 📱 Phones */
        @media (max-width: 576px) {
          .contact-section {
            padding: 60px 20px;
          }

          .contact-container {
            flex-direction: column;
            text-align: center;
            padding: 40px 20px;
          }

          .contact-left {
            order: 1;
          }

          .contact-right {
            order: 2;
            margin-top: 40px;
          }

          .contact-title {
            font-size: clamp(1.8rem, 7vw, 2.4rem);
            line-height: 1.3;
            margin-bottom: 20px;
          }

          .contact-btn {
            font-size: 0.9rem;
            padding: 12px 24px;
            border-radius: 8px;
          }

          .contact-image {
            max-width: 350px;
          }
        }

        /* 📲 Tablets */
        @media (min-width: 577px) and (max-width: 992px) {
          .contact-container {
            flex-direction: column;
            text-align: center;
            padding: 50px 40px;
          }

          .contact-left {
            margin-bottom: 30px;
          }

          .contact-title {
            font-size: clamp(2.2rem, 6vw, 3rem);
          }

          .contact-btn {
            font-size: 1rem;
          }

          .contact-image {
            max-width: 400px;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .contact-title {
            font-size: 4.2rem;
          }
        }

        /* 🖥️ Ultra-Wide */
        @media (min-width: 1600px) {
          .contact-container {
            max-width: 1400px;
          }

          .contact-title {
            font-size: 4.5rem;
          }

          .contact-image {
            max-width: 600px;
          }
        }
      `}</style>
    </section>
  );
}
