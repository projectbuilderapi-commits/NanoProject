import mongoose from "mongoose";

const couponSchema =
  new mongoose.Schema(
    {
      code: {
        type: String,
        required: true,
        unique: true,
      },

      discount: {
        type: Number,
        required: true,
      },

      active: {
        type: Boolean,
        default: true,
      },

      expiresAt: {
        type: Date,
      },
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Coupon",
  couponSchema
);