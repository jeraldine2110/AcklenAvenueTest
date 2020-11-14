const {Builder, By, Key, util, JavascriptExecutor} = require("selenium-webdriver");

async function calculateParkCost(parkType){
    let driver = await new Builder().forBrowser("firefox").build();

    await driver.get("http://www.shino.de/parkcalc");

    let originalWindow = await driver.getWindowHandle();    
    let pickStartDate = driver.findElement(By.xpath("/html/body/form/table/tbody/tr[2]/td[2]/a"));
    
    driver.findElement(By.id("ParkingLot")).sendKeys(parkType);

    await pickStartDate.click();

    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        2000
    );

    let windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
        try {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
                driver.findElement(By.xpath("/html/body/form/table/tbody/tr[5]/td[7]/font/b/a")).click();
            }
        } catch (err) {
            console.log(err);
        }
    });    

    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 1,
        2000
    );

    driver.switchTo().window(originalWindow);
    let pickEndDate = driver.findElement(By.xpath("/html/body/form/table/tbody/tr[3]/td[2]/a"));
    await pickEndDate.click();

    
    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 2,
        2000
    );
    originalWindow = driver.getWindowHandle();
    
    windows = await driver.getAllWindowHandles();
    windows.forEach(async handle => {
        try {
            if (handle !== originalWindow) {
                await driver.switchTo().window(handle);
                driver.findElement(By.xpath("/html/body/form/table/tbody/tr[5]/td[7]/font/b/a")).click();
            }
        } catch (err) {
            console.log(err);
        }
    });    

    await driver.wait(
        async () => (await driver.getAllWindowHandles()).length === 1,
        2000
    );   

    driver.switchTo().window(originalWindow);
    driver.executeScript('document.getElementById("StartingTime").value = "11:00"');
    driver.executeScript('document.getElementById("LeavingTime").value = "13:00"');
    let buttonSubmit = driver.findElement(By.xpath("/html/body/form/input[2]"));
    await buttonSubmit.click();

    let parkCost = await driver.findElement(By.xpath("/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b")).getText()    
    driver.close();
    return parkCost;
}

module.exports.calculateParkCost=calculateParkCost;
