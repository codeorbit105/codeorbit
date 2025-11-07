import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import Lenis from "@studio-freight/lenis";

function SmoothScrollApp() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      smooth: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <App />;
}

createRoot(document.getElementById("root")).render(<SmoothScrollApp />);
