const { Builder, Browser, By, Key, until } = require("selenium-webdriver");
const { titleContains, elementIsNotVisible, titleIs } = require("selenium-webdriver/lib/until");


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
        let title = await driver.getTitle()
        await expect(title).toBe('Movies List')
    })

    test('testing input for movies', async () => {
        await driver.get('http://localhost:3000/');
        let searchbar = await driver.findElement(By.name('movieTitle'), 10000);
        await searchbar.click()
        await searchbar.sendKeys('Movie Name', Key.ENTER)
        let movieItem = await driver.findElement(By.id('movie-0'));
        await driver.wait(until.elementIsVisible(movieItem));
      let text = await driver.findElement(By.css('ul#movies-list li label')).getText()
      
      await expect(text).toBe('Movie Name');
        

    })

    test('removing movies', async ()=> {
      await driver.get('http://localhost:3000/');
        let searchbar = await driver.findElement(By.name('movieTitle'), 10000);
        await searchbar.click()
        await searchbar.sendKeys('Movie Name', Key.ENTER)
        let movieItem = await driver.findElement(By.id('movie-0'));
        await driver.wait(until.elementIsVisible(movieItem));
      let text = await driver.findElement(By.css('ul#movies-list li label')).getText()
      
      await driver.findElement(By.className('delete-btn')).click();
      let movieList = await driver.findElement(By.css('#movies-list')).getText() 
      expect(movieList).toBe('')
    })
})