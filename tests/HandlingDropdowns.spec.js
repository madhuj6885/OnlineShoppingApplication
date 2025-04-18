import test, { expect } from "@playwright/test";

test("Dropdowns",async  ({page}) =>{
await page.pause();
    await page.goto("https://www.amazon.in");
    await page.click("#searchDropdownBox");
await page.waitForTimeout(2000);
const place =  page.locator("#searchDropdownBox");
place.selectOption("Amazon Devices");
await expect(place).toEqual("Amazon Devices")


})