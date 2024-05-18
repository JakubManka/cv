import React, { FC } from "react";
import { Grid, List, ListItem, Typography } from "@mui/material";
import { Header } from "../common/Typographies";
import {
  CustomProjectPaper,
  CustomWorkExpPaper,
  GreyedOutText,
  MainRightCard,
} from "../styles/CustomStyles";
import { Headers } from "../common/Enums";

const RightPanel: FC = () => {
  return (
    <MainRightCard>
      <Header text={Headers.WORK_EXPERIENCE} />
      <Grid container spacing={3} sx={{ padding: "20px" }}>
        <Grid item xs={4}>
          <CustomWorkExpPaper>
            <Typography variant="body1" pt={1}>
              Software Engineer
            </Typography>
            <Typography variant="body1">03.2023 - present</Typography>
            <Typography variant="body2">Projects I worked on:</Typography>
            <List>
              <ListItem>
                <Typography variant="body1">Evans Ride to Work</Typography>
              </ListItem>
              <ListItem sx={{ alignItems: "center" }}>
                <Typography variant="body1">Create multiple subtask</Typography>
                <GreyedOutText>Jira plugin</GreyedOutText>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Multiple microservices</Typography>
                <GreyedOutText>for fruugo.com</GreyedOutText>
              </ListItem>
            </List>
          </CustomWorkExpPaper>
        </Grid>
        <Grid item xs={4}>
          <CustomWorkExpPaper>
            <Typography variant="body1" pt={3}>
              Junior Software Engineer
            </Typography>
            <Typography variant="body1">10.2021 - 03.2023</Typography>
            <Typography variant="body2">Projects I worked on: </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">Create multiple subtask</Typography>
                <GreyedOutText>Jira plugin</GreyedOutText>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Multiple microservices</Typography>
                <GreyedOutText>for fruugo.com</GreyedOutText>
              </ListItem>
            </List>
          </CustomWorkExpPaper>
        </Grid>
        <Grid item xs={4}>
          <CustomWorkExpPaper>
            <Typography variant="body1" pt={3}>
              Intern
            </Typography>
            <Typography variant="body1">07.2021 - 09.2021</Typography>
            <Typography variant="body2"> Projects I worked on: </Typography>
            <List>
              <ListItem>
                <Typography variant="body1">Internship</Typography>
                <GreyedOutText>project</GreyedOutText>
              </ListItem>
              <ListItem>
                <Typography variant="body1">Create multiple subtask</Typography>
                <GreyedOutText>Jira plugin</GreyedOutText>
              </ListItem>
            </List>
          </CustomWorkExpPaper>
        </Grid>
      </Grid>

      <Header text={Headers.PROJECTS} />

      <Grid container spacing={2} sx={{ padding: "20px" }}>
        <Grid item xs={4}>
          <CustomProjectPaper>
            <Typography variant="body1" pt={2}>
              Fruugo's microservices
            </Typography>
            <Typography variant="body1">12.2021 - present</Typography>
            <Typography variant="body1">
              Tech stack and tools I used:
            </Typography>
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
          </CustomProjectPaper>
        </Grid>
        <Grid item xs={4}>
          <CustomProjectPaper>
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
                    Fixing bugs, Creating documentations
                  </Typography>
                </ListItem>
                <ListItem>
                  <Typography variant="body2" mt={-2}>
                    Resolving clients issues and providing assistance as needed
                  </Typography>
                </ListItem>
              </List>
            </Typography>
          </CustomProjectPaper>
        </Grid>
        <Grid item xs={4}>
          <CustomProjectPaper>
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
          </CustomProjectPaper>
        </Grid>
      </Grid>
    </MainRightCard>
  );
};

export default RightPanel;
