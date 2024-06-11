import React, {FC} from "react";
import {Container, Grid, List, ListItem, Typography} from "@mui/material";
import {Header} from "../common/Typographies";
import {
    ProjectPaper,
    MainRightCard,
} from "../styles/CustomStyles";
import {Headers, ProjectNames} from "../common/Enums";
import WorkExpField from "./WorkExpField";
import WorkExp from "./WorkExp";

const RightPanel: FC<{ isMediumSize: boolean }> = ({isMediumSize}) => {
    const paperSize = isMediumSize ? 12 : 4;
    return (
        <MainRightCard>
            <Container>
                <Header text={Headers.PROJECTS}/>

                <Grid container spacing={2} sx={{padding: "20px"}}>
                    <Grid item xs={paperSize}>
                        <ProjectPaper>
                            <Typography variant="body1" pt={2}>
                                Fruugo's microservices
                            </Typography>
                            <Typography variant="body1">I worked on </Typography>
                            <List>
                                <ListItem>
                                    <Typography variant="body2">
                                        Java, Spring, Maven, Hibernate, MySQL, REST, JUnit
                                    </Typography>
                                </ListItem>
                                <ListItem>
                                    <Typography variant="body2" mt={-2}>
                                        JavaScript, TypeScript, React, Webpack, prettier, HTML, SCSS
                                    </Typography>
                                </ListItem>

                                <ListItem>
                                    <Typography variant="body2" mt={-2}>
                                        Docker, Bamboo, Bitbucket, Jira
                                    </Typography>
                                </ListItem>
                            </List>

                            <Typography variant="body1">
                                During that period, I was involved in:
                                <List>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Implementing Google Pay for Braintree
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Implementing FE and BE features
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Fixing bugs, creating documentations
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </ProjectPaper>
                    </Grid>
                    <Grid item xs={paperSize}>
                        <ProjectPaper>
                            <Typography variant="body1" pt={2}>
                                Create multiple subtask jira plugin
                            </Typography>
                            <Typography variant="body1">07.2021 - present</Typography>
                            <Typography variant="body1">
                                Tech stack and tools I used:
                                <List>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Java, Spring, Maven, Hibernate, MySQL, REST, JUnit
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            JavaScript, Atlassian Connect framework, HTML, SCSS
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Jenkins,GitHub, AWS, Jira
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                            <Typography variant="body1">
                                During that period, I was involved in:
                                <List>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Implementing FE and BE features
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Fixing bugs, creating documentations
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Resolving clients issues and providing assistance as needed
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </ProjectPaper>
                    </Grid>
                    <Grid item xs={paperSize}>
                        <ProjectPaper>
                            <Typography variant="body1" pt={2}>
                                Evans Ride to Work
                            </Typography>
                            <Typography variant="body1">01.2023 - 04.2023</Typography>
                            <Typography variant="body1">
                                Tech stack and tools I used:
                                <List>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Kotlin, Spring, Gradle, Hibernate, MySQL, REST, JUnit
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            TypeScript, React, prettier, node.js
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Docker, GitHub, Jira, AWS lambda
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                            <Typography variant="body1">
                                During that period, I was involved in:
                                <List>
                                    <ListItem>
                                        <Typography variant="body2">
                                            Implementing all AWS lambdas
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Implementing FE and BE features
                                        </Typography>
                                    </ListItem>
                                    <ListItem>
                                        <Typography variant="body2" mt={-2}>
                                            Fixing bugs, creating documentations
                                        </Typography>
                                    </ListItem>
                                </List>
                            </Typography>
                        </ProjectPaper>
                    </Grid>
                </Grid>
            </Container>
            <Container>
                <Header text={Headers.WORK_EXPERIENCE}/>
                <WorkExp/>
            </Container>
        </MainRightCard>
    );
};

export default RightPanel;
