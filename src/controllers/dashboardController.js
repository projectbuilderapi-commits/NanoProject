import Request from "../models/Request.js";

export const getDashboardAnalytics =
async (req, res) => {
  try {

    const totalRequests =
      await Request.countDocuments();

    const pending =
      await Request.countDocuments({
        status: "Pending",
      });

    const inProgress =
      await Request.countDocuments({
        status: "In Progress",
      });

    const completed =
      await Request.countDocuments({
        status: "Completed",
      });

    const rejected =
      await Request.countDocuments({
        status: "Rejected",
      });

    const revenue =
      await Request.aggregate([
        {
          $match: {
            status: "Completed",
          },
        },
        {
          $group: {
            _id: null,
            totalRevenue: {
              $sum: "$finalPrice",
            },
          },
        },
      ]);

    const projectTypes =
      await Request.aggregate([
        {
          $group: {
            _id: "$projectType",
            count: {
              $sum: 1,
            },
          },
        },
      ]);
    
    const monthlyRequests =
      await Request.aggregate([
        {
          $group: {
            _id: {
              month: {
                $month: "$createdAt",
              },
            },

            count: {
              $sum: 1,
            },
          },
        },

        {
          $sort: {
            "_id.month": 1,
          },
        },
      ]);

    res.status(200).json({
      success: true,
      stats: {
        totalRequests,
        pending,
        inProgress,
        completed,
        rejected,
        monthlyRequests
      },

      revenue:
        revenue[0]?.totalRevenue || 0,

      projectTypes,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};