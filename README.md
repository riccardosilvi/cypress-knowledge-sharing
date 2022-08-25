# Cypress Knowledge Sharing

## Project Objectives

This project aims at demonstrating how cypress can be helpful in our environment as a testing tool for the following reasons:

- all-in-one solution for unit, integration, e2e testing
- great [documentation](https://docs.cypress.io/guides/overview/why-cypress)
- great collection of [plugins](https://docs.cypress.io/guides/tooling/plugins-guide)
- great community ambassadors like [Gleb Bahmutov](https://github.com/bahmutov) and [Stefano Magni](https://github.com/NoriSte)
- it is under continuos development/improvement
- visual (also) solution. Have a real feedback of what you're doing instead of hoping something is not visually overlapping

## Project Description

The project includes a small exchange replica where the user can subscribe/login and manipulate the market.

## Main Technologies

[React](https://reactjs.org/)

[React-Router-v5](https://v5.reactrouter.com/)

[Vite](https://vitejs.dev/) - project init and bundling

[msw](https://mswjs.io/) - api mocking

[Cypress](https://cypress.io/) - full fledged testing solution

[Cypress Testing Library](https://testing-library.com/docs/cypress-testing-library/intro/) - allows the use of dom-testing queries within Cypress end-to-end browser tests.

[useSWR](https://swr.vercel.app/) - for data fetching is markets page

## Tests

Every test typology is represented:

- Unit - src/components/__tests__/FavoriteToggle.cy.tsx

- Integration - src/components/__tests__/LogInForm.cy.tsx

- End to End - cypress/e2e/signup-and-manipulate-btc-market.cy.ts
