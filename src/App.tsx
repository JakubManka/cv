import React from "react";
import "./App.css";
import MainPage from "./mainPage/MainPage";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { darkTheme } from "./Theme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={darkTheme}>
        <header className="App-header">
          <CssBaseline />
          <MainPage />
        </header>
      </ThemeProvider>
    </div>
  );
}

export default App;
