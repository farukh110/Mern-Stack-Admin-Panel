import User from "../models/User.js";
import OverAllStat from "../models/OverAllStat.js";
import Transaction from "../models/Transaction.js";

export const getUser = async (req, res) => {

    try {

      const { id } = req.params;
      const user = await User.findById(id);

      res.status(200).json(user);

    } catch (error) {

        res.status(404).json({ message: error.message });
    }
}

export const getDashboardStatus = async (req, res) => {

   try {

    const currentMonth = "July";
    const currentYear = 2021;
    const currentDay = "2021-4-9";

    // transactions
    const transactions = await Transaction.find().limit(50).sort({ createdOn: -1 });

    // overall stats
    const overAllStat = await OverAllStat.find({ year: currentYear });

    const { totalCustomers, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory } = overAllStat[0];

    const thisMonthStats = overAllStat[0].monthlyData.find(({ month }) => {
      return month === currentMonth
    });

    const todayStats = overAllStat[0].dailyData.find(({ date }) =>{
      return date === currentDay
    });

    res.status(200).json({
      totalCustomers, yearlyTotalSoldUnits, yearlySalesTotal, monthlyData, salesByCategory, thisMonthStats, todayStats, transactions
    });

   } catch (error) {
       res.status(404).json({ message: error.message });
   }
}