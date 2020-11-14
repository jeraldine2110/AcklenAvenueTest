const { Builder, By, Key, util, JavascriptExecutor } = require("selenium-webdriver");

async function calculateParkCost(parkType, startDate, LeavingDate, startingTime, leavingTime) {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get("http://www.shino.de/parkcalc");
    driver.executeScript("document.getElementById('StartingDate').value='" + startDate + "'");
    driver.executeScript("document.getElementById('LeavingDate').value='" + LeavingDate + "'");
    driver.executeScript("document.getElementById('StartingTime').value = '" + startingTime + "'");
    driver.executeScript("document.getElementById('LeavingTime').value = '" + leavingTime + "'");
    let buttonSubmit = driver.findElement(By.xpath("/html/body/form/input[2]"));
    await buttonSubmit.click();
    let parkCost = await driver.findElement(By.xpath("/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b")).getText()
    driver.close();
    return parkCost;
}

module.exports.calculateParkCost = calculateParkCost;