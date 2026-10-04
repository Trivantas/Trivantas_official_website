import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import fs from "fs";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // If .env exists in root directory and not locally in frontend, load from root
  const hasLocalEnv = fs.existsSync(path.resolve(__dirname, ".env"));
  const hasRootEnv = fs.existsSync(path.resolve(__dirname, "../.env"));
  const envDir = !hasLocalEnv && hasRootEnv ? path.resolve(__dirname, "..") : undefined;

  return {
    ...(envDir ? { envDir } : {}),
    server: {
      host: "::",
      port: 8080,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            "vendor-react": ["react", "react-dom", "react-router-dom"],
            "vendor-ui": ["lucide-react", "framer-motion"],
          },
        },
      },
    },
  };
});
