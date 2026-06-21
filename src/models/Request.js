import mongoose from "mongoose";

const requestSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,

    college: String,
    department: String,
    year: String,

    projectType: String,

    platform: [String],

    authentication: [String],

    features: [String],

    requirements: [String],

    deadline: String,

    referenceLink: String,

    description: String,

    estimatedPrice: Number,

    couponCode: String,

    discount: Number,

    finalPrice: Number,

    status: {
      type: String,
      enum: [
        "Pending",
        "In Progress",
        "Completed",
        "Rejected",
      ],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Request",
  requestSchema
);