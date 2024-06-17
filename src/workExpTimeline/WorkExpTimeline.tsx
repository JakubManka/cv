import * as React from "react";
import { FC } from "react";
import Timeline from "@mui/lab/Timeline";
import { Box, styled, Typography } from "@mui/material";
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from "@mui/lab";

const Date: FC<{ date: String }> = ({ date }) => {
  return (
    <Box
      sx={{
        width: "70px",
        height: "30px",
        backgroundColor: "#444",
        clipPath: "polygon(80% 0, 100% 50%, 80% 100%, 0 100%, 0 0)",
        display: "inline-block",
        textAlign: "justify",
        alignContent: "center",
        paddingLeft: "15px",
      }}
    >
      <Typography variant="body1">{date}</Typography>
    </Box>
  );
};

const StyledLineDot = styled(TimelineDot)(({ theme }) => ({
  background: theme.palette.text.secondary,
  boxShadow: `0 0 10px ${theme.palette.text.secondary}`,
}));

const WorkExpTimeline = () => {
  return (
    <Box mt={2} sx={{ height: "100%" }}>
      <Timeline sx={{ height: "100%" }}>
        <TimelineItem>
          <TimelineOppositeContent>
            <Date date="2023" />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <StyledLineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Full Stack Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Date date="2021" />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <StyledLineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Junior Full Stack Developer</Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent>
            <Date date="2021" />
          </TimelineOppositeContent>
          <TimelineSeparator>
            <StyledLineDot />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="h6">Intern</Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Box>
  );
};

export default WorkExpTimeline;
