import { Grid } from "@mui/material";
import "./MainPage.css";
import React from "react";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";

const MainPage = () => {
  return (
    <Grid container spacing={2} sx={{ margin: "10px", maxHeight: "1000px" }}>
      <Grid item xs={3}>
        <LeftPanel />
      </Grid>
      <Grid item xs={9}>
        <RightPanel />
      </Grid>
    </Grid>
  );
};

export default MainPage;
