import { FavoriteToggle } from "../FavoriteToggle";

describe("unit > components > FavoriteToggle", () => {
  describe("renders", () => {
    it("mounts", () => {
      cy.mount(<FavoriteToggle />);
    });
  });

  describe("initial status", () => {
    it("should be initially not favorite, when no initial value is specified", () => {
      cy.mount(<FavoriteToggle />);
      cy.findByText("☆");
    });

    it("should be initially favorite, when specified", () => {
      cy.mount(<FavoriteToggle isInitialFavorite />);
      cy.findByText("★");
    });
  });

  describe("toggle functionality", () => {
    it("should turn to favorite, when clicked", () => {
      cy.mount(<FavoriteToggle />);
      cy.findByText("☆").click();
      cy.findByText("★");
    });

    it("should turn to not favorite, when clicked and initially favorite", () => {
      cy.mount(<FavoriteToggle isInitialFavorite />);
      cy.findByText("★").click();
      cy.findByText("☆");
    });
  });

  describe("onChanged callback", () => {
    it("should not be invoked, when component initially renders", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mount(<FavoriteToggle onChanged={onChangeSpy} />);
      expect(onChangeSpy).not.to.have.been.called;
    });

    it("should be invoked, when component toggle favorite status", () => {
      const onChangeSpy = cy.spy().as("onChangeSpy");
      cy.mount(<FavoriteToggle onChanged={onChangeSpy} />);
      cy.findByText("☆").click();
      cy.get("@onChangeSpy").should("have.been.calledWith", true);
    });
  });
});
