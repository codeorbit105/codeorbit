import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    define: {
      "import.meta.env.VITE_API_URL": JSON.stringify(env.VITE_API_URL),
      "import.meta.env.VITE_EMAILJS_SERVICE_ID": JSON.stringify(
        env.VITE_EMAILJS_SERVICE_ID
      ),
      "import.meta.env.VITE_EMAILJS_TEMPLATE_ID": JSON.stringify(
        env.VITE_EMAILJS_TEMPLATE_ID
      ),
      "import.meta.env.VITE_EMAILJS_PUBLIC_KEY": JSON.stringify(
        env.VITE_EMAILJS_PUBLIC_KEY
      ),
    },
  };
});
