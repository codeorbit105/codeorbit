import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div
      style={{
        // background: "linear-gradient(180deg, #00081a 0%, #020e25 100%)",
        background: "#121212",

        color: "#fff",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main style={{ flex: "1", paddingTop: "80px" }}>{children}</main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
