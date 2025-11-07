import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const servicesItems = [
    { label: "Branding", path: "/branding" },
    { label: "Web Solutions", path: "/web" },
    { label: "Photography & Videography", path: "/photo" },
    { label: "Consulting", path: "/consulting" },
  ];

  const handleDropdown = (name) => setActiveDropdown(name);
  const closeDropdown = () => setActiveDropdown(null);

  const handleNavClick = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const el = document.querySelector(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 600);
    } else {
      const el = document.querySelector(sectionId);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="navbar-header">
      <nav className="navbar-container">
        {/* 🔹 Logo */}
        <div className="navbar-logo" onClick={() => handleNavClick("#home")}>
          <img
            src="/assets/logos/logo.png"
            alt="Code Orbit Technologies"
            className="logo-img"
          />
        </div>

        {/* 🔹 Desktop Links */}
        <div className="nav-links">
          <span style={linkStyle} onClick={() => handleNavClick("#home")}>
            Home
          </span>

          {/* Services Dropdown */}
          <div
            className="nav-dropdown"
            onMouseEnter={() => handleDropdown("services")}
            onMouseLeave={closeDropdown}
          >
            <span style={linkStyle}>Services</span>
            <AnimatePresence>
              {activeDropdown === "services" && (
                <DropdownMenu
                  items={servicesItems}
                  closeDropdown={closeDropdown}
                />
              )}
            </AnimatePresence>
          </div>

          <Link to="/about" style={linkStyle}>
            About
          </Link>

          <span style={linkStyle} onClick={() => handleNavClick("#vision")}>
            Vision & Mission
          </span>
        </div>

        {/* 🔹 CTA (Desktop) */}
        <Link to="/start" className="cta-desktop" style={ctaStyle}>
          start a project →
        </Link>

        {/* 🔹 Mobile Menu Toggle */}
        <div
          className="menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? "✕" : "☰"}
        </div>
      </nav>

      {/* 🔹 Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <MobileNavItem
              label="Home"
              onClick={() => handleNavClick("#home")}
            />

            {/* Mobile Services Dropdown */}
            <div className="mobile-dropdown">
              <p
                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                className="mobile-dropdown-title"
              >
                Services {mobileServicesOpen ? "▲" : "▼"}
              </p>
              <AnimatePresence>
                {mobileServicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mobile-dropdown-items"
                  >
                    {servicesItems.map((item, idx) => (
                      <Link
                        key={idx}
                        to={item.path}
                        className="mobile-dropdown-link"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <MobileNavItem label="About" to="/about" />
            <MobileNavItem
              label="Vision & Mission"
              onClick={() => handleNavClick("#vision")}
            />
            <MobileNavItem label="Start a Project" to="/start" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* 💅 Embedded CSS for Responsiveness */}
      <style>{`
        /* ===== NAVBAR BASE ===== */
        .navbar-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          background: rgba(0, 0, 0, 0.55);
          backdrop-filter: blur(10px);
          transition: background 0.3s ease;
        }

        .navbar-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 18px 40px;
        }

        .navbar-logo {
          cursor: pointer;
          display: flex;
          align-items: center;
        }

        .logo-img {
          height: 40px;
          width: auto;
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 40px;
        }

        .nav-dropdown {
          position: relative;
        }

        /* CTA */
        .cta-desktop {
          background: linear-gradient(90deg, #3b9dff, #00d4ff);
          padding: 10px 18px;
          border-radius: 10px;
          color: #001;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,212,255,0.25);
          transition: all 0.3s ease;
        }

        .cta-desktop:hover {
          transform: scale(1.05);
          box-shadow: 0 0 20px rgba(0,212,255,0.6);
        }

        /* ===== MOBILE MENU TOGGLE ===== */
        .menu-toggle {
          font-size: 28px;
          color: #fff;
          cursor: pointer;
          display: none;
          transition: transform 0.3s ease;
        }

        .menu-toggle:hover {
          transform: scale(1.1);
        }

        /* ===== MOBILE MENU ===== */
        .mobile-menu {
          position: absolute;
          top: 72px;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          z-index: 90;
        }

        .mobile-dropdown-title {
          color: #fff;
          font-size: 16px;
          font-weight: 500;
          cursor: pointer;
          margin: 12px 0;
        }

        .mobile-dropdown-link {
          color: #bcd3f5;
          text-decoration: none;
          display: block;
          font-size: 15px;
          padding: 8px 0;
          transition: color 0.3s ease;
        }

        .mobile-dropdown-link:hover {
          color: #00d4ff;
        }

        /* ===== RESPONSIVENESS ===== */
        @media (max-width: 992px) {
          .nav-links {
            display: none !important;
          }
            
          .menu-toggle {
            display: block !important;
          }
          .cta-desktop {
            display: none !important;
          }
          .navbar-container {
            padding: 16px 24px;
          }
        }

        @media (max-width: 576px) {
          .navbar-container {
            padding: 14px 20px;
          }
          .logo-img {
            height: 34px;
          }
        }

        @media (min-width: 993px) {
          .mobile-menu {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
}

/* ===== Helper Components ===== */
function MobileNavItem({ label, to, onClick }) {
  const base = {
    color: "#fff",
    textDecoration: "none",
    fontSize: "16px",
    fontWeight: 500,
    margin: "12px 0",
    cursor: "pointer",
    transition: "color 0.3s ease",
  };
  const hover = (e, isHover) =>
    (e.target.style.color = isHover ? "#00d4ff" : "#fff");

  if (to)
    return (
      <Link
        to={to}
        style={base}
        onMouseEnter={(e) => hover(e, true)}
        onMouseLeave={(e) => hover(e, false)}
        onClick={onClick}
      >
        {label}
      </Link>
    );
  return (
    <span
      style={base}
      onMouseEnter={(e) => hover(e, true)}
      onMouseLeave={(e) => hover(e, false)}
      onClick={onClick}
    >
      {label}
    </span>
  );
}

/* ===== Dropdown Menu (Desktop) ===== */
function DropdownMenu({ items, closeDropdown }) {
  return (
    <motion.div
      className="dropdown-menu"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
    >
      {items.map((item, idx) => (
        <motion.div
          key={idx}
          whileHover={{ backgroundColor: "rgba(255,255,255,0.08)" }}
          onClick={closeDropdown}
        >
          <Link to={item.path} className="dropdown-link">
            {item.label}
          </Link>
        </motion.div>
      ))}
      <style>{`
        .dropdown-menu {
          position: absolute;
          top: 35px;
          left: -20px;
          background: rgba(0, 0, 0, 0.9);
          border: 1px solid rgba(0, 200, 255, 0.1);
          border-radius: 12px;
          padding: 12px 0;
          min-width: 220px;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
          z-index: 99;
          backdrop-filter: blur(14px);
        }
        .dropdown-link {
          color: #fff;
          text-decoration: none;
          padding: 10px 20px;
          font-size: 14.5px;
          font-weight: 500;
          display: block;
          transition: color 0.3s ease;
        }
        .dropdown-link:hover {
          color: #00d4ff;
        }
      `}</style>
    </motion.div>
  );
}

/* ===== Link & CTA Styles ===== */
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  fontWeight: 500,
  fontSize: "15px",
  letterSpacing: "0.3px",
  cursor: "pointer",
  transition: "color 0.3s ease, transform 0.2s ease",
};

const ctaStyle = {
  background: "linear-gradient(90deg, #3b9dff, #00d4ff)",
  padding: "10px 18px",
  borderRadius: "10px",
  color: "#001",
  fontWeight: 700,
  textDecoration: "none",
  boxShadow: "0 4px 15px rgba(0,212,255,0.25)",
  transition: "transform 0.2s ease, box-shadow 0.3s ease",
  cursor: "pointer",
};
