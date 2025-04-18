import { expect } from "@playwright/test";
import test from "@playwright/test";




test("Handling multiple tabs", async ({browser}) =>{
    let context = await browser.newContext();
    let page = await context.newPage();

    //triggring secure.indeed.com page
    await page.goto("https://myntra.com/");
    //printing secure.indeed.com web page url
    console.log(await page.url());
    //page.keyboard.press()
    //locators for google and apple login buttons
    let searchTbx = await page.locator("//input[@placeholder='Search for products, brands and more']");
    await searchTbx.fill("watches");
    await page.keyboard.press("Enter");
    // await searchTbx.keyboard.press("Enter");
    // searchTbx.keyboard.press("Enter");
    let firstProduct = await page.locator("//h3[text()='WROGN']/../..");
    // firstProduct.click();
    // let appleLoginButton = await page.locator("//button[@id='apple-signin-button']");

    

    let [firstProductPage] = await Promise.all([
        context.waitForEvent('page'),
        firstProduct.click(),

    ]);
    // let [applePage] = await Promise.all([
    //     context.waitForEvent('page'),
    //     appleLoginButton.click()

    // ]);
    try {
        await expect(firstProductPage.locator("//div[text()='ADD TO BAG']")).toBeVisible();
        await firstProductPage.locator("//div[text()='ADD TO BAG']").click();
        console.log("Item added successfully to cart ");
        
} catch(e) {

    console.log("Locator is not locating properly so, click action is not able");
    
}
    await firstProductPage.waitForTimeout(5000);
console.log(await firstProductPage.url());
// console.log(await applePage.url());


    // await googlePage.locator("//a[text()='Help']").click();
    // await googlePage.waitForTimeout(5000);
    // await googlePage.locator("//input[@name='q']").fill("Mithun");
    // await googlePage.waitForTimeout(5000);

})

// test("Handling multiple tabs", async ({browser}) =>{
//     let context = await browser.newContext();
//     let page = await context.newPage();

//     //triggring secure.indeed.com page
//     await page.goto("https://secure.indeed.com/auth");
//     //printing secure.indeed.com web page url
//     console.log(await page.url());
    
//     //locators for google and apple login buttons
//     let googleLoginButton = await page.locator("//button[@id='login-google-button']");
//     let appleLoginButton = await page.locator("//button[@id='apple-signin-button']");
    

//     let [googlePage] = await Promise.all([
//         context.waitForEvent('page'),
//         googleLoginButton.click(),

//     ]);
//     let [applePage] = await Promise.all([
//         context.waitForEvent('page'),
//         appleLoginButton.click()

//     ]);
// console.log(await googlePage.url());
// console.log(await applePage.url());


//     await googlePage.locator("//a[text()='Help']").click();
//     await googlePage.waitForTimeout(5000);
//     await googlePage.locator("//input[@name='q']").fill("Mithun");
//     await googlePage.waitForTimeout(5000);

// })