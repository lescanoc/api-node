import express from "express";
import morgan from "morgan";
import pkg from "../package.json";
// Routes
import motorsRoutes from "./routes/motors.routes";
const app = express();

// Settings
app.set("port", 3000);
app.set("pkg", pkg);

// Middlewares
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use('/inicio',(req, res) => {
  res.json({
    name: app.get('pkg').name,
    author: app.get('pkg').author,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
  });
});
app.use('/api/motors',motorsRoutes);

export default app;
