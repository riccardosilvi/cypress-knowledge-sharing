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

const getEmailField = () => cy.findByLabelText("Email");
const getPasswordField = () => cy.findByLabelText("Password");
const getSubmitButton = () => cy.findByText("Entra");

describe("integration > components > LogInForm", () => {
  beforeEach(() => {
    cy.viewport(1024, 768);
  });
  describe("renders", () => {
    it("mounts", () => {
      render(<LogInForm />);
    });
  });

  describe("validation", () => {
    describe("email errors", () => {
      it("should show requested field error, when input blurs out with no value", () => {
        render(<LogInForm />);

        getEmailField().focus().blur();
        cy.findByText("Campo Email richiesto").should("be.visible");

        getSubmitButton().should("be.disabled");
      });

      it("should not accept invalid value, when input blurs out", () => {
        render(<LogInForm />);

        getEmailField()
          .type("invalidmail", {
            force: true,
          })
          .blur();
        cy.findByText("Campo Email non valido").should("be.visible");

        getSubmitButton().should("be.disabled");
      });
    });
    describe("password errors", () => {
      it("should show requested field error, when input blurs out with no value", () => {
        render(<LogInForm />);

        getPasswordField().focus().blur();
        cy.findByText("Campo Password richiesto").should("be.visible");

        getSubmitButton().should("be.disabled");
      });

      it("should show aggregated errors label, when input is invalid and focused", () => {
        render(<LogInForm />);

        getPasswordField().type("meh", {
          force: true,
        });
        cy.findByText("almeno una maiuscola,").should("be.visible");

        getSubmitButton().should("be.disabled");
      });
    });
  });

  describe("submit", () => {
    it("should redirect user to homepage, when login succeeds", () => {
      cy.intercept("POST", "**/api/account/login", {
        statusCode: 200,
        body: {
          success: true,
          user: "silvicardo@gmail.com",
        },
      }).as("login");
      render(<LogInForm />);
      getEmailField().type("silvicardo@gmail.com", {
        force: true,
      });
      getPasswordField().type("T&stone1", { force: true });
      getSubmitButton().click();
      cy.wait("@login");
      getSubmitButton().should("be.enabled");
    });

    it("should show errors, when submit api call fails", () => {
      cy.intercept("POST", "**/api/account/login", {
        statusCode: 400,
        body: {
          success: false,
          user: "silvicardo@gmail.com",
          errors: {
            email: "email api error",
            password: "password api error",
          },
        },
      }).as("login");

      render(<LogInForm />);

      getEmailField().type("silvicardo@gmail.com", {
        force: true,
      });
      getPasswordField().type("T&stone1", { force: true });
      getSubmitButton().click();

      cy.wait("@login");

      cy.findByText("email api error").should("be.visible");
      cy.findByText("password api error").should("be.visible");
      getSubmitButton().should("be.disabled");
    });
  });
});
