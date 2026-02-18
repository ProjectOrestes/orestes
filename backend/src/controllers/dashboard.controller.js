import * as dashboardService from "../services/dashboard.service.js";

export const getDashboardSummary = async (req, res, next) => {
  try {
    const summary = await dashboardService.getDashboardSummaryData();
    res.json(summary);
  } catch (error) {
    // El error.middleware.js que configuramos se encarga de esto
    next(error); 
  }
};