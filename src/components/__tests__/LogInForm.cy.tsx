import { LogInForm } from "../LogInForm";
import React, { ReactNode } from "react";
import {
  createGlobalStyle,
  DefaultTheme,
  ThemeProvider,
} from "styled-components";
import { css, YoungProvider } from "@youngagency/young-ui";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "../../context/AuthContext";
import { mount } from "cypress/react";
const render = (component: ReactNode) => {
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

  const TestComponent = (
    <YoungProvider>
      <ThemeProvider theme={{ layout: "light" } as DefaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <AuthContextProvider>{component}</AuthContextProvider>
        </BrowserRouter>
      </ThemeProvider>
    </YoungProvider>
  );

  return mount(TestComponent);
};

describe("unit > components > LogInForm", () => {
  describe("renders", () => {
    it.only("mounts", () => {
      render(<LogInForm />);
    });
  });
  describe.skip("validation", () => {
    describe("email", () => {
      it("should not accept invalid value, when input blurs out", () => {});
    });
    describe("password", () => {
      it("should not accept invalid value, when input blurs out", () => {});
    });
  });

  describe.skip("submit", () => {
    it("should redirect user to homepage, when login succeeds", () => {});

    it("should show errors, when submit api call fails", () => {});
  });
});
