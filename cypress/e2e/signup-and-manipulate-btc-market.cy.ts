type CurrencyName = "btc" | "eth" | "usdt" | "yng"

function signupByCredentials({email, password} : {email: string, password: string}){
      cy.location("pathname").should("equal", "/signup");
      cy.findByLabelText("Email").type(email, {
        force: true,
      });
      cy.findByLabelText("Password").type(password, { force: true });
      cy.findByLabelText("Conferma password").type(password, { force: true });
      cy.findByText(/registrati/i).click()
}

function dumpMarket(name: CurrencyName){
    cy.location("pathname").should("equal", "/markets");

    cy.dataCy(`market-item-${name}`).within(() => {
        cy.findByText(/dump it/i).click()
        cy.findByText("-100.00%")
        cy.findByText("0 €")
    })
}

function starCurrency(name: CurrencyName){
    cy.location("pathname").should("equal", "/markets");

    cy.dataCy(`market-item-${name}`).within(() => {
        cy.findByText("☆").click()
        cy.findByText("★")
    })
}

describe("e2e > signup and intercact with BTC market", () => {
  it("should be able to star BTC and dump it, when registered", () => {

    cy.visit("/");

    cy.location("pathname").should("equal", "/");

    cy.findByText("Non hai un account?").click()

    signupByCredentials({
        email: "bogdanoff@gmail.com",
        password: "HateWoj100%"
    })

    cy.location("pathname").should("equal", "/");

    cy.findByText(/mercati/i).click()

    starCurrency("btc")
    dumpMarket("btc")

  });
});
