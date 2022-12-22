const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  "reporter": "mochawesome",
  "reporterOptions": {
    "charts": false,
    "html": true,
    "json": true,
    "reportDir": "cypress/reports",
    "reportFilename": "report",
    "overwrite": true 
  }
});
