import { createTheme } from "@mui/material/styles";

export const mainTheme = createTheme({
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
      primary: "#FFFFFF",
      secondary: "#BED754",
    },
    grey: {
      "50": "#46424f",
    },
  },
  typography: {
    fontFamily: "Josefin Slab, serif",
    h5: {
      color: "#BED754",
    },
    h6: {
      color: "#FFFFFF",
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      color: "#BED754",
    },
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
          color: "#FFFFFF",
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
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          color: "#FFFFFF",
        },
      },
    },
  },
});
