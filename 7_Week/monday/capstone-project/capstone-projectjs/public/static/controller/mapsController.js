// Import the required modules
require( 'module' );
const {Builder, By, Key, until} = require('selenium-webdriver');
const firefox = require( 'selenium-webdriver/firefox' )
const screen = {
  width: 640,
  height: 480
};

// Export a function called 'changeMap'
module.exports = {
  changeMap: async (req, res) => {
    let driver;

    try {

      // Create a new WebDriver instance using the specified browser
      driver = await new Builder().forBrowser('firefox').setFirefoxOptions(new firefox.Options().windowSize(screen)).build();
      
      // Load Google Maps and search for a query
      await driver.get('http://google.com/maps');
      await driver.findElement( By.id( 'searchboxinput' ) ).sendKeys( `${req.params.zipcode} masonic temple near me`, Key.ENTER );
      await driver.wait(until.elementLocated(By.className('hfpxzc')), 60000)
      let btn = await driver.findElement(By.className('hfpxzc'))
      let aria_label = await btn.getAttribute("aria-label")
    
      
      // Wait for an element to load before interacting with it
      await driver.wait(until.elementLocated(By.className('hfpxzc ')), 5000);


      // Wait for another element to load before clicking on it
      let element = await driver.findElement( By.className( ' hfpxzc ' ) );
      await element.click()
      
      
      await driver.wait( until.elementLocated( By.className('DVeyrd  ')), 60000 )
      let phoneBtn = await driver.findElement(By.className('DVeyrd  '))
     
      await phoneBtn.click()

   
      
      // Send a response with the address
      res.status(200).send(`Your local lodge is ${aria_label}, the directions have been sent to your phone.`);
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
