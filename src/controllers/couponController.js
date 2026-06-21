import Coupon from "../models/Coupon.js";

export const validateCoupon =
async (req, res) => {
  try {

    const {
      code,
      amount,
    } = req.body;

    const coupon =
      await Coupon.findOne({
        code:
          code.toUpperCase(),
      });

    if (!coupon) {
      return res.status(404).json({
        success: false,
        message:
          "Invalid Coupon",
      });
    }

    if (!coupon.active) {
      return res.status(400).json({
        success: false,
        message:
          "Coupon Disabled",
      });
    }

    if (
      coupon.expiresAt &&
      coupon.expiresAt <
        new Date()
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Coupon Expired",
      });
    }

    const discountAmount =
      (amount *
        coupon.discount) /
      100;

    const finalPrice =
      amount -
      discountAmount;

    res.status(200).json({
      success: true,

      coupon: coupon.code,

      discount:
        coupon.discount,

      discountAmount,

      finalPrice,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};