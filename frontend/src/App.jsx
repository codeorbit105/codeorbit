import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// ✅ Import global layout wrapper
import Layout from "./components/Layout";

// ✅ Import all pages
import Home from "./pages/Home";
import Start from "./components/Start";
import Branding from "./pages/Branding";
import WebSolutions from "./pages/WebSolutions";
import Photography from "./pages/Photography";
import Consulting from "./pages/Consulting";
import About from "./components/About";

// ✅ Optional (for smooth scroll to top on route change)
import ScrollToTop from "./components/ScrollToTopButton";

export default function App() {
  return (
    <Router>
      {/* Auto scrolls to top when navigating */}
      <ScrollToTop />

      {/* Define routes */}
      <Routes>
        {/* 🏠 Home */}
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />

        {/* 💬 Start a Project */}
        <Route
          path="/start"
          element={
            <Layout>
              <Start />
            </Layout>
          }
        />

        {/* 💼 Services */}
        <Route
          path="/branding"
          element={
            <Layout>
              <Branding />
            </Layout>
          }
        />
        <Route
          path="/web"
          element={
            <Layout>
              <WebSolutions />
            </Layout>
          }
        />
        <Route
          path="/photo"
          element={
            <Layout>
              <Photography />
            </Layout>
          }
        />
        <Route
          path="/consulting"
          element={
            <Layout>
              <Consulting />
            </Layout>
          }
        />

        {/* 🎨 Portfolio Pages */}
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}
