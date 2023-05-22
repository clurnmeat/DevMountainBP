// Import the required modules
require( 'module' );
const {Builder, By, Key, until} = require('selenium-webdriver')

// Export a function called 'changeMap'
module.exports = {
  changeMap: async (req, res) => {
    let driver;

    try {

      // Create a new WebDriver instance using the specified browser
      driver = await new Builder().forBrowser('firefox').build();
      
      // Load Google Maps and search for a query
      await driver.get('http://google.com/maps');
      await driver.findElement(By.id('searchboxinput')).sendKeys(`${req.params} masonic centers near me`, Key.ENTER);

      // Wait for an element to load before interacting with it
      await driver.wait(until.elementLocated(By.className('g88MCb S9kvJb ')), 5000);


      // Wait for another element to load before clicking on it
      let element = await driver.findElement( By.className( 'g88MCb S9kvJb ' ) );
      await element.click()
      // let element = await driver.findElement( By.css( 'input' ) ).sendKeys(Key.ENTER);
      await driver.wait(until.elementLocated(By.className('oucrtf PpaGLb')))
      // await driver.wait(until.elementLocated(By.className('qS6JSb fontTitleSmall XbJon')))
      
      
      
      // Send a response with the address
      res.status(200).send('complete');
    } catch (error) {
      // Handle errors by sending an error response
      console.error(error);
      res.status(500).send('There was an error processing your request. Please try again later.');
    } finally {
      // Quit the WebDriver instance if it exists
      if (driver) {
        await driver.quit();
      }
    }
  }
};
