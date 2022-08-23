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
import { SWRConfig } from "swr";

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

const swrOptions = {
  fetcher: (...args: Parameters<typeof fetch>) =>
    fetch(...args).then((res) => res.json()),
};
// @ts-ignore
import("./mocks/browser").then(({ worker }) => {
  worker.start({ onUnhandledRequest: "bypass" });
  ReactDOM.render(
    <React.StrictMode>
      <YoungProvider>
        <ThemeProvider theme={{ layout: "light" } as DefaultTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <SWRConfig value={swrOptions}>
              <App />
            </SWRConfig>
          </BrowserRouter>
        </ThemeProvider>
      </YoungProvider>
    </React.StrictMode>,
    document.getElementById("root") as HTMLElement
  );
});
