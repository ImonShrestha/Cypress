const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportHeight:1080,
  viewportWidth:1920,
  
  e2e: {
    baseUrl : "http://172.27.1.149/login",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    env: {
      username: 'kuul',
      password: 'Test@1234',
    },
  },
});
