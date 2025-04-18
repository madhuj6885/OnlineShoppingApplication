import test from "@playwright/test";

test("Hadnling Multiple Frames", async({page}) =>{


await page.goto("https://demoapps.qspiders.com/ui/frames/multiple?sublist=2");
let frame1 = await page.frameLocator("(//iframe)[1]");
await frame1.locator("//input[@id='email']").fill("madhuj@gmail.com");
await frame1.locator("//input[@id='password']").fill("madhuj6885");
await frame1.locator("//input[@id='confirm-password']").fill("madhuj6885");
//await frame1.locator("//button[@id='submitButton']").click();

let frame2 = await page.frameLocator("(//iframe)[2]");
await frame2.locator("//input[@id='username']").fill("madhuj@6885");
await frame2.locator("//input[@id='password']").fill("madhuj6885");
//await frame2.locator("//button[@id='submitButton']").click();


})

test("Nested Frames", async ({page}) =>{
    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");

    let parentFrame = await page.frameLocator("//iframe[@class='w-full h-96']");
    let defaultEmail = await parentFrame.locator("//p[text()='Admin@gmail.com']").textContent();
    let defaultPass =await  parentFrame.locator("//p[text()='Default Password']//following-sibling::p[1]").textContent();

    // let defaultCpass = parentFrame.locator("//p[text()='Admin@1234']").textContent();

    let childFrame = await parentFrame.frameLocator("//div[@class='form_container']//iframe");
    await childFrame.locator("//input[@name='email']").fill(defaultEmail);
    await childFrame.locator("//input[@name='password']").fill(defaultPass);
    await childFrame.locator("//input[@name='confirmPassword']").fill(defaultPass)

})

test("Nested and multiple frames",async ({page}) =>{

    await page.goto("https://demoapps.qspiders.com/ui/frames/nested?sublist=1");
    let parentFrame = await page.frameLocator("//iframe[@class='w-full h-96']");
    let email = await parentFrame.locator("//input[@text()='Admin@gmail.com']").textContent();
    let pass = await parentFrame.locator("//p[text()='Default Password']//following-sibling::p[1]").textContent();


})