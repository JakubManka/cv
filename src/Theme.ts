import { createTheme } from "@mui/material/styles";

export const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#282c34", // Customize primary color
    },
    secondary: {
      main: "#1A2027", // Customize secondary color
    },
    background: {
      default: "#121212", // Customize background color
    },
    text: {
      primary: "white",
      secondary: "#8c8c8e",
    },
  },
  typography: {
    h6: {
      color: "white",
    },
    body1: {
      color: "white",
      // fontSize: "0.9rem",
    },
    body2: {
      color: "#8c8c8e",
      fontSize: "0.9rem",
    },
    // Add other custom typography styles here
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          background: "#282c34",
        },
      },
    },
    MuiListItemIcon: {
      styleOverrides: {
        root: {
          color: "white",
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
        },
      },
    },
    MuiListItemText: {
      styleOverrides: {
        primary: {
          fontSize: "0.9rem",
          color: "#8c8c8e",
        },
      },
    },
  },
  // Add other custom theme settings here
});
