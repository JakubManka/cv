import { Grid } from "@mui/material";
import "./MainPage.css";
import React from "react";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { darkTheme } from "../Theme";

const MainPage = () => {
  const isMediumSize = useMediaQuery(darkTheme.breakpoints.down("md"));
  return (
    <Grid
      container
      spacing={2}
      mt={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item xs={isMediumSize ? 10 : 2}>
        <LeftPanel />
      </Grid>
      <Grid item xs={isMediumSize ? 10 : 9}>
        <RightPanel isMediumSize={isMediumSize} />
      </Grid>
    </Grid>
  );
};

export default MainPage;
