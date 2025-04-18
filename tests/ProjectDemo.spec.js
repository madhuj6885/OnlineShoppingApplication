import test from "@playwright/test";

test.skip("Open Actitime Browser", async ({page}) =>{
    await page.goto("https://demoapps.qspiders.com/");
        await page.pause();
await page.getByText("Experience the seamless interactions and responsive designs").click();
await page.getByPlaceholder("Enter your name").fill("madhu");
await page.locator("#email").fill("madhuj6885@gmail.com");
await page.locator("//input[@id='password']").fill("madhu@123");
await page.getByText("//button[text()='Register']").click();

})

test.skip("Handling Buttons", async ({page}) => {
await page.goto("https://demoapps.qspiders.com/ui/button");
await page.pause();
// await page.locator("//button[text()='Yes']/../..//button[1]").click();
const btn =  page.locator("//button[@id='btn']");
await btn.hover();
await btn.click();
    
})


test.skip("Handling Links", async ({page}) => {
    await page.goto("https://demoapps.qspiders.com/ui/link");
    await page.pause();
   const contactLink =  page.locator("//a[normalize-space()='Contact Us']");
   await contactLink.hover();
   await contactLink.click();
        
    })

    test.skip("Handling Radio Buttons2", async ({page}) => {
        await page.goto("https://demoapps.qspiders.com/ui/radio");
        await page.pause();
       const contactLink =  page.locator("//input[@id='attended1']");
       await contactLink.check();
            
        })

        test.skip("Handling Radio Buttons", async ({page}) => {
            await page.goto("https://demoapps.qspiders.com/ui/radio");
            await page.pause();
           const contactLink =  page.locator("//input[@id='willin2']");
           //await contactLink.check();
           const btn = page.locator("//button[@id='btn']");
           await btn.click();
                
            })

            test.skip("Handling Checkboxees",async ({page}) => {
                await page.goto("https://demoapps.qspiders.com/ui/checkbox");
await page.pause();
                const el = page.locator("//input[@id='domain1']");
                const el2 = page.locator("//input[@id='mode2']");
                await el.hover();
                await el.check();
                await el2.hover();
                await el2.click();
            })
test("", async ({page}) =>{
    await page.goto("https://demoapps.qspiders.com/ui/dropdown");
await page.pause();
    await page.locator("//select[@id='select1']").selectOption("+44");

})