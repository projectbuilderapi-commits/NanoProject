import bcrypt from "bcryptjs";
import dotenv from "dotenv";

import connectDB from "../src/config/db.js";
import Admin from "../src/models/Admin.js";

dotenv.config();

await connectDB();

const hashedPassword =
  await bcrypt.hash("OpacityQ1", 12);

await Admin.create({
  email: "stationerypioneer12@gmail.com",
  password: hashedPassword,
});

process.exit();