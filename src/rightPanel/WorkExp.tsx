import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import {Container, Typography} from "@mui/material";
import {
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator
} from "@mui/lab";

const WorkExp = () => {
    return (
        <Container sx={{height:"100%"}}>
            <Timeline sx={{height:"100%"}}>
                <TimelineItem>
                    <TimelineOppositeContent>
                        2023
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Software Engineer</Typography>
                        <Typography variant="body2">I worked mostly </Typography>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Junior Software Engineer</Typography>
                        <Typography variant="body2">I worked mostly </Typography></TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        2021
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <Typography variant="h6">Intern</Typography>
                        <Typography variant="body2">I worked mostly </Typography></TimelineContent>
                </TimelineItem>
            </Timeline>
        </Container>

    )
}

export default WorkExp;