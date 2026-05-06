import express from "express";
import { createServer as createViteServer } from "vite";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // Mock API Data
  app.get("/api/stats", (req, res) => {
    res.json({
      usersHelped: "225",
      sessionsCompleted: "15",
      resilienceImprovement: "68%"
    });
  });

  app.get("/api/pillars", (req, res) => {
    res.json([
      {
        id: "assessment",
        title: "Assessment",
        description: "Clinically validated, culturally adapted tools to help you understand your current mental health baseline.",
        icon: "clipboard-list"
      },
      {
        id: "counseling",
        title: "Counseling",
        description: "Accessible 1-on-1 sessions with licensed professionals, available online or in partner clinics.",
        icon: "message-circle"
      },
      {
        id: "peer-support",
        title: "Peer Support",
        description: "Moderated, safe community groups where individuals can share experiences and coping strategies.",
        icon: "users"
      },
      {
        id: "virtual-growth",
        title: "Virtual Tree Growth",
        description: "A gamified resilience tracker. Watch your virtual tree flourish as you complete wellness exercises.",
        icon: "tree-pine",
        highlight: true
      }
    ]);
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
      configFile: path.join(process.cwd(), "frontend", "vite.config.ts"),
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
