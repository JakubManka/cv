import React, { FC } from "react";
import {
  Avatar,
  CardContent,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import "./LeftPanel.css";
import { Header, TextAlign, TypeWriter } from "../common/Typographies";
import { Align, Headers } from "../common/Enums";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../images/avatar.jpg";
import { MainLeftCard, StyledBadge } from "../styles/CustomStyles";
import { darkTheme } from "../Theme";

const LeftPanel: FC = () => {
  const firstSkillsList = [
    "Java",
    "Kotlin",
    "JavaScript",
    "TypeScript",
    "Spring",
    "React",
    "REST",
  ];
  const secondSkillsList = [
    "AWS",
    "MySQL",
    "GCP",
    "Docker",
    "Git",
    "Jira",
    "Atlassian Connect",
  ];

  return (
    <MainLeftCard>
      <CardContent
        sx={{
          backgroundColor: darkTheme.palette.primary.main,
        }}
      >
        <div className="avatar">
          <StyledBadge
            overlap="circular"
            variant="dot"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
          >
            <Avatar
              alt="avatar"
              src={avatar}
              sx={{ height: "80px", width: "80px" }}
            />
          </StyledBadge>
        </div>
        <Typography variant="body1">Jakub Mańka</Typography>
        <TypeWriter />

        <div className="row-direction">
          <TextAlign text="Residence:" align={Align.LEFT} />
          <TextAlign text="Poland" align={Align.RIGHT} />
        </div>

        <div className="row-direction">
          <TextAlign text="City:" align={Align.LEFT} />
          <TextAlign text="Wrocław" align={Align.RIGHT} />
        </div>

        <div className="row-direction">
          <TextAlign text="Age:" align={Align.LEFT} />
          <TextAlign text="25" align={Align.RIGHT} />
        </div>
      </CardContent>

      <CardContent>
        <div className="scrollable">
          <Header text={Headers.CONTACT_ME} />
          <List>
            <ListItem>
              <ListItemIcon>
                <LinkedInIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <a
                    href="https://www.linkedin.com/in/jakubmanka"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="custom-link"
                  >
                    https://www.linkedin.com/in/jakubmanka
                  </a>
                }
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <EmailIcon />
              </ListItemIcon>
              <ListItemText primary="jakmanka@gmail.com" />
            </ListItem>
          </List>
          <Header text={Headers.EDUCATION} />
          <Typography variant="body2">Cybersecurity</Typography>
          <Typography variant="body2">
            Wrocław University of Science and Technology
          </Typography>
          <Typography variant="body2">2018-2022</Typography>

          <Header text={Headers.CERTIFICATION} />
          <Typography variant="body2">
            AWS Certificated Cloud Practitioner Certificate
          </Typography>

          <Header text={Headers.LANGUAGES} />
          <Typography variant="body2">Polish</Typography>
          <Typography variant="body2">English</Typography>

          <Header text={Headers.SKILLS} />
          <div className="skills-box">
            <List
              sx={{
                maxWidth: "100px",
                marginRight: "10px",
              }}
            >
              {firstSkillsList.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
            <List
              sx={{
                maxWidth: "100px",
                marginLeft: "10px",
              }}
            >
              {secondSkillsList.map((skill, index) => (
                <ListItem key={index}>
                  <ListItemText primary={skill} />
                </ListItem>
              ))}
            </List>
          </div>
        </div>
      </CardContent>
    </MainLeftCard>
  );
};

export default LeftPanel;
