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
    await driver.get('http://localhost:3000/');
    let drawBtn = await driver.findElement(By.id("draw"));
    await drawBtn.click();
    let botsList = await driver.findElements(By.className("bot-card outline"));
    expect(botsList.length).toBe(5);
  }),
  test('Bots Should be different', async () => {
    await driver.get('http://localhost:3000/');
    let drawBtn = await driver.findElement(By.id('draw'));
    await drawBtn.click();
    let bots = await driver.findElements(By.css("div.bot-card.outline"));
    let botsListsNames = [];
    for(let i=0; i<bots.length; i++){
      await bots[i].getText().then((text) => {
        botsListsNames.push((text))
        
      });
    };
    await driver.get('http://localhost:3000/');
    let newBotsListNames = [];
    drawBtn = await driver.findElement(By.id('draw'))
    drawBtn.click()
    bots = await driver.findElements(By.css("div.bot-card.outline"));
    for(let i=0; i<bots.length; i++){
      await bots[i].getText().then((text) => {
        newBotsListNames.push(text)
      })
    };
    expect(botsListsNames).not.toBe(newBotsListNames)    
    
  })
});
