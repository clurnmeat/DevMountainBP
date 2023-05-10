const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const { titleContains } = require("selenium-webdriver/lib/until");

let driver;

beforeEach(async () => {
  driver = new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});


describe('movieTest', () => {
    // can connect to movie app website through local host. 
    test('testing localhost connection', async () => {
        await driver.get('http://localhost:3000/');
    })

    test('testing input for movies', async () => {
        await driver.get('http://localhost:3000/');
        let searchbar = await driver.findElement(By.name('movieTitle'), 10000);
        await searchbar.click()

    })
})