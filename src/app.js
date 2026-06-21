import express from "express";
import cors from "cors";
import helmet from "helmet";

import projectRoutes from "./routes/projectRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import errorMiddleware from "./middleware/errorMiddleware.js";
import couponRoutes from "./routes/couponRoutes.js";
import notFoundMiddleware from "./middleware/notFoundMiddleware.js";

const app = express();

app.use(helmet());

app.use(cors({
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 
}));
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.use("/api/requests", requestRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/coupons", couponRoutes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;