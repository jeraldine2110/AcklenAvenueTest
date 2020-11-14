const {Builder, By, Key, util, JavascriptExecutor} = require("selenium-webdriver");


async function calculateParkCost(){
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://www.shino.de/parkcalc");

    let originalWindow = await driver.getWindowHandle();    
    let pickStartDate = driver.findElement(By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/a"));
    
    driver.findElement(By.id("ParkingLot")).sendKeys("Valet");

    
    driver.close();
}

calculateParkCost();
