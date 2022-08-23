import React from "react";
import ReactDOM from "react-dom";
import { css, YoungProvider } from "@youngagency/young-ui";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const GlobalStyle = createGlobalStyle(
  css({
    "*": {
      fontFamily: "matter",
      color: "textPrimary",
      fontFeatureSettings: "'tnum' on, 'lnum' on, 'ss04' on",
    },
    body: {
      "::-webkit-scrollbar": {
        display: "none",
      },
      scrollbarWidth: "none",
      msOverflowStyle: "none",
    },
  })
);

ReactDOM.render(
  <React.StrictMode>
    <YoungProvider>
      <ThemeProvider theme={{ layout: "light" } as DefaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </YoungProvider>
  </React.StrictMode>,
  document.getElementById("root") as HTMLElement
);
