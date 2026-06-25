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
import contactRoutes from "./routes/contactRouter.js";
import designRoutes from "./routes/designRoutes.js";

const app = express();

app.use(helmet());

app.use(
  cors({
    origin:
      "http://localhost:5173",
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/projects", projectRoutes);

app.use("/api/requests", requestRoutes);

app.use("/api/auth", authRoutes);

app.use("/api/dashboard", dashboardRoutes);

app.use("/api/coupons", couponRoutes);
app.use("/api/contacts", contactRoutes);

app.use(
  "/api/designs",
  designRoutes
);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;