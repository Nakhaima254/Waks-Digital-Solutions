import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const root = createRoot(document.getElementById("root")!);
root.render(
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    <App />
  </ThemeProvider>
);

// Hide loader after app mounts
const loader = document.getElementById("app-loader");
if (loader) {
  loader.style.opacity = "0";
  setTimeout(() => loader.remove(), 500);
}
