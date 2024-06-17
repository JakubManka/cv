import React from "react";
import "./App.css";
import MainPage from "./mainPage/MainPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { mainTheme } from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={mainTheme}>
        <CssBaseline />
        <MainPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
