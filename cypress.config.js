const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: ["**/*.cy.{js,jsx,ts,tsx}", "**/*.spec.{js,jsx,ts,tsx}"],
    supportFile: "cypress/support/e2e.{js,jsx,ts,tsx}",
    excludeSpecPattern: [],
  },
  defaultCommandTimeout: 15000,
});
