const shuffle = require("../src/shuffle");
const { Builder, Browser, By, until } = require("selenium-webdriver");
let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});




describe("shuffle should...", () => {
  // CODE HERE
  test('Display 5 bots', async () => {

  })
});
