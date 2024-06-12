import { Grid } from "@mui/material";
import "./MainPage.css";
import React from "react";
import LeftPanel from "../leftPanel/LeftPanel";
import RightPanel from "../rightPanel/RightPanel";
import useMediaQuery from "@mui/material/useMediaQuery";
import { mainTheme } from "../Theme";

const MainPage = () => {
  const isMedium = useMediaQuery(mainTheme.breakpoints.down("md"));
  const isExtraLarge = useMediaQuery(mainTheme.breakpoints.down("xl"));

  const rightPanelSize = isMedium ? 10 : isExtraLarge ? 8 : 9;
  const leftPanelSize = isMedium ? 10 : isExtraLarge ? 3 : 2;

  return (
    <Grid
      container
      spacing={2}
      mt={2}
      sx={{ display: "flex", justifyContent: "center" }}
    >
      <Grid item sx={{ paddingBottom: "20px" }} xs={leftPanelSize}>
        <LeftPanel />
      </Grid>
      <Grid item sx={{ paddingBottom: "20px" }} xs={rightPanelSize}>
        <RightPanel />
      </Grid>
    </Grid>
  );
};

export default MainPage;
