import test from "@playwright/test";
test("login",async  ({page}) =>{

    await page.goto("http://106.51.82.61:9007/");
    await page.locator("//input[@name='email']").fill("admin@admin.com");
    await page.locator("//input[@name='password']").fill("admin@123");
    await page.locator("//button[@class='btn btn-primary btn-block btn-login']").click();


})