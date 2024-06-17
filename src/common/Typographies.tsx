import { Box, Paper, Typography } from "@mui/material";
import React, { FC } from "react";
import { Align } from "./Enums";
import Typewriter from "typewriter-effect";
import { mainTheme } from "../Theme";

interface TextAlignProps {
  text: string;
  align: Align.LEFT | Align.RIGHT;
}

export const TextAlign: FC<TextAlignProps> = ({ text, align }) => {
  const alignStyle = {
    marginLeft: align === Align.LEFT ? "0" : "auto",
    marginRight: align === Align.LEFT ? "auto" : "0",
  };
  return (
    <Typography variant="body1" sx={alignStyle}>
      {text}
    </Typography>
  );
};

export const Header: FC<{
  text: string;
}> = ({ text }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        // maxWidth: "270px",
        // margin: "10px",
      }}
    >
      <Paper
        variant="outlined"
        sx={{
          background: "#282c34",
          paddingLeft: "40px",
          paddingRight: "40px",
          borderRadius: "50px",
          color: "#FFFFFF",
          marginTop: "10px",
          marginBottom: "10px",
        }}
      >
        <Typography variant="h5">{text}</Typography>
      </Paper>
    </Box>
  );
};

export const TypeWriter: FC = () => {
  return (
    <Box sx={{ color: mainTheme.palette.text.secondary }}>
      <Typewriter
        options={{
          strings: ["Software Engineer", "Full stack Developer"],
          autoStart: true,
          loop: true,
        }}
      />
    </Box>
  );
};
