import dotenv from "dotenv";

import connectDB from "../src/config/db.js";

import Coupon from "../src/models/Coupon.js";

dotenv.config();

await connectDB();

await Coupon.insertMany([
  {
    code: "SAVE10",
    discount: 10,
  },

  {
    code: "WELCOME15",
    discount: 15,
  },

  {
    code: "STUDENT20",
    discount: 20,
  },
]);

process.exit();