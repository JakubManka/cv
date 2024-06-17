import React, { FC } from "react";
import {
  Avatar,
  Box,
  Button,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import "./LeftPanel.css";
import { Header, TextAlign, TypeWriter } from "../common/Typographies";
import { Align, Headers } from "../common/Enums";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import avatar from "../files/avatar.jpg";
import jakub_manka_cv from "../files/jakub_manka_cv.pdf";
import { MainLeftCard, StyledBadge } from "../styles/CustomStyles";
import { mainTheme } from "../Theme";
import DownloadIcon from "@mui/icons-material/Download";
import GitHubIcon from "@mui/icons-material/GitHub";

const LeftPanel: FC = () => {
  const hoverStyle = {
    color: mainTheme.palette.text.primary,
    ":hover": {
      color: mainTheme.palette.text.secondary,
    },
  };

  return (
    <MainLeftCard>
      <CardContent
        sx={{
          backgroundColor: mainTheme.palette.primary.main,
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
      </CardContent>

      <CardContent
        sx={{
          paddingBottom: "0",
          paddingTop: "0",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Header text={Headers.CONTACT_ME} />
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Box mb={1}>
            {
              <a
                href="https://www.linkedin.com/in/jakubmanka"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-link"
              >
                <LinkedInIcon sx={{ marginRight: "10px" }} />
                <Typography sx={{ marginTop: "2px" }}>linkedin</Typography>
              </a>
            }
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <EmailIcon sx={{ marginRight: "10px" }} />
            <Typography>jakmanka@gmail.com</Typography>
          </Box>
        </Box>

        <Header text={Headers.EDUCATION} />
        <Typography variant="body1">Cybersecurity</Typography>
        <Typography variant="body1">
          Wrocław University of Science and Technology
        </Typography>
        <Typography variant="body1">2018-2022</Typography>

        <Header text={Headers.CERTIFICATION} />
        <Typography variant="body1">
          AWS Certificated Cloud Practitioner Certificate
        </Typography>

        <Header text={Headers.LANGUAGES} />
        <Typography variant="body1">Polish</Typography>
        <Typography variant="body1">English</Typography>
      </CardContent>
      <CardContent
        sx={{
          backgroundColor: mainTheme.palette.primary.main,
        }}
      >
        <Container sx={{ display: "flex", padding: "0" }}>
          <Button
            sx={hoverStyle}
            href={jakub_manka_cv}
            target="_blank"
            download="jakub_manka_cv.pdf"
            rel="noreferrer"
          >
            {/*<a href={jakub_manka_cv} target="_blank" rel="noreferrer">*/}
            {/*</a>*/}
            DOWNLOAD CV
            <DownloadIcon
              sx={{
                width: "19px",
                height: "19px",
                color: "inherit",
              }}
            />
          </Button>
          <Box
            sx={{
              alignItems: "center",
              display: "flex",
              marginLeft: "auto",
            }}
          >
            <IconButton
              href="https://www.linkedin.com/in/jakubmanka"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              <LinkedInIcon
                sx={{
                  width: "19px",
                  height: "19px",
                  ...hoverStyle,
                }}
              />
            </IconButton>
            <IconButton
              href="https://github.com/JakubManka/"
              target="_blank"
              rel="noopener noreferrer"
              className="custom-link"
            >
              <GitHubIcon
                sx={{
                  width: "19px",
                  height: "19px",
                  ...hoverStyle,
                }}
              />
            </IconButton>
          </Box>
        </Container>
      </CardContent>
    </MainLeftCard>
  );
};

export default LeftPanel;
