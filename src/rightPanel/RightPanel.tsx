import React, { FC } from "react";
import { Box, Grid, Paper, styled, Typography } from "@mui/material";
import { Header } from "../common/Typographies";
import {
  MainRightCard,
  ProjectPaper,
  ProjectTypography,
} from "../styles/CustomStyles";
import { Headers } from "../common/Enums";
import WorkExpTimeline from "../workExpTimeline/WorkExpTimeline";

import { IconProps } from "../common/Interfaces";
import { icons } from "../common/icons/Icons";
import { mainTheme } from "../Theme";
import useMediaQuery from "@mui/material/useMediaQuery";

interface SkillIconProps {
  icon: FC<IconProps>;
  label: string;
}

const StyledSkillIcon = styled(Paper)(({ theme }) => ({
  background: theme.palette.primary.main,
  borderRadius: "20px",
  width: "100px",
  height: "100px",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  "&:hover": {
    background: theme.palette.text.secondary,
    width: "120px",
    height: "120px",
    margin: "-10px",
  },
}));

const SkillIcon: FC<SkillIconProps> = ({ icon: Icon, label }) => {
  return (
    <StyledSkillIcon theme={mainTheme}>
      <Icon size="50px" />
      <Typography mt="10px" variant="body1">
        {label}
      </Typography>
    </StyledSkillIcon>
  );
};

const RightPanel: FC = () => {
  const isLarge = useMediaQuery(mainTheme.breakpoints.down("lg"));
  const paperSize = isLarge ? 12 : 4;
  return (
    <MainRightCard>
      <Box mt={0}>
        <Header text={Headers.PROJECTS} />
        <Grid container spacing={2} sx={{ padding: "20px" }}>
          <Grid item xs={paperSize}>
            <ProjectPaper>
              <Typography variant="h6" pt={2}>
                Fruugo's microservices
              </Typography>
              <ProjectTypography>
                <ul>
                  <li>Managed multiple microservices architecture</li>
                  <li>Integrated Google Pay for payment processing</li>
                  <li>
                    Implemented new endpoints, functionalities, and React
                    components.
                  </li>
                  <li>Created comprehensive Unit and Integration tests</li>
                  <li>Prepared documentation for reference</li>
                  <li>Resolved bugs promptly to ensure system stability</li>
                  <li>Shared knowledge with junior developers</li>
                </ul>
              </ProjectTypography>
            </ProjectPaper>
          </Grid>
          <Grid item xs={paperSize}>
            <ProjectPaper>
              <Typography variant="h6" pt={2}>
                "Create multiple subtask" Jira plugin
              </Typography>
              <ProjectTypography>
                <ul>
                  <li>Resolved client issues promptly.</li>
                  <li>Conducted live demos for client understanding</li>
                  <li>Utilized Atlassian Connect for plugin development</li>
                  <li>Implemented new endpoints and functionalities</li>
                  <li>
                    Wrote comprehensive Unit and Integration tests to ensure
                    code reliability and performance
                  </li>
                  <li>Developed documentation</li>
                  <li>Resolved bugs promptly to ensure system stability</li>
                </ul>
              </ProjectTypography>
            </ProjectPaper>
          </Grid>
          <Grid item xs={paperSize}>
            <ProjectPaper>
              <Typography variant="h6" pt={2}>
                Evans Ride to Work
              </Typography>
              <ProjectTypography>
                <ul>
                  <li>Implemented AWS Lambdas</li>
                  <li>Integrated with AWS services: S3, DocumentDB, Cognito</li>
                  <li>Implemented endpoints and functionalities</li>
                  <li>Created Unit and Integration tests</li>
                  <li>
                    Prepared documentation for easy understanding and future
                    reference
                  </li>
                  <li>Resolved bugs promptly to ensure system stability</li>
                </ul>
              </ProjectTypography>
            </ProjectPaper>
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box>
          <Grid container spacing={2} sx={{ padding: "20px" }}>
            <Grid item xs={isLarge ? 12 : 8}>
              <Box>
                <Header text={Headers.SKILLS} />
                <Grid
                  container
                  spacing={2}
                  mt={2}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  {icons.map((icon, index) => {
                    return (
                      <Grid item xs={0} key={index}>
                        <SkillIcon icon={icon.element} label={icon.label} />
                      </Grid>
                    );
                  })}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={isLarge ? 12 : 4}>
              <Header text={Headers.WORK_EXPERIENCE} />
              <WorkExpTimeline />
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainRightCard>
  );
};

export default RightPanel;
