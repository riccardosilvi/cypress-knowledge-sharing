import { LogInForm } from "../LogInForm";

describe("unit > components > LogInForm", () => {
  describe("renders", () => {
    it("mounts", () => {
      cy.mount(<LogInForm />);
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
