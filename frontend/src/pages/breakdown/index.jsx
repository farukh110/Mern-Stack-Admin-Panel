import React from "react";
import { Box } from "@mui/material";
import Header from "components/header/Header";
import BreakdownChart from "components/controls/breakdown-chart/BreakdownChart";

const Breakdown = () => {
  return (
    <Box m="1.5rem 2.5rem">
      <Header title="Breakdown" subtitle="breakdown of sales report" />

      <Box mt="40px" height="75vh">

        <BreakdownChart />

      </Box>
    </Box>
  );
};

export default Breakdown;
