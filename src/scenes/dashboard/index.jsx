import { Box } from "@mui/material";
import React from "react";
import Header from "../../component/Header"


const Dashboard = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
       </Box>
    </Box>
  );
};

export default Dashboard;
