import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
const theme = createTheme({});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,

  document.getElementById("root")
);
