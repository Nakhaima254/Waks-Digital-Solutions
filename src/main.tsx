import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { HelmetProvider } from "react-helmet-async";

const root = createRoot(document.getElementById("root")!);
root.render(
  <HelmetProvider>
    <AuthProvider>
      <App />
    </AuthProvider>
  </HelmetProvider>
);

// Hide loader after app mounts
const loader = document.getElementById("app-loader");
if (loader) {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
}

// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js').catch(() => {});
  });
}
