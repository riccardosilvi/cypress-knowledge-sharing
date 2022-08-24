import { mount } from "cypress/react";
import Stepper from "../Stepper";

console.log("test process.env before", process.env);
describe("<Stepper>", () => {
  it("mounts", () => {
    mount(<Stepper />);
    cy.findByText("Cypress Component Testing");
  });

  it("adds one to count, when plus button is clicked", () => {
    cy.mount(<Stepper />);
    cy.findByRole("button", { name: "increment" }).click();
    cy.dataCy("counter").contains("1");
  });
  it("subtracts one to count, when minus button is clicked", () => {
    cy.mount(<Stepper />);
    cy.findByRole("button", { name: "decrement" }).click();
    cy.dataCy("counter").contains("-1");
  });
});
