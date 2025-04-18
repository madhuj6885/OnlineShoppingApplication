import { test, expect} from "@playwright/test";
// import { log } from "console";



// test("Launch Url of the WebPage",async ({page}) =>{
//    await page.goto("http://localhost/login.do");
//    await page.locator("//input[@id='username']").fill("admin");
//    await page.locator("//input[@name='pwd']").fill("manager");
//    await page.locator("//div[text()='Login ']").click();
// })

test("Has a title", async ({page}) =>{
   await page.goto("http://localhost/login.do");

   // await page.pause()
   await page.locator("//input[@id='username']").fill("admin");
   await page.locator("//input[@name='pwd']").fill("manager");
   await page.locator("//div[text()='Login ']").click(); 
   
//page.pause();
   await page.screenshot({path:"screenshots/demo2.png"});

   

   
})

test.skip("demo", async ({browser}) =>{
   let context = await browser.newContext();
   let page = await context.newPage();
   await page.goto("http://localhost/login.do");

})

test.skip("",async ({page}) =>{
   await page.goto("https://www.opencart.com/index.php?route=account/register");
   const regBtn = page.getByRole('link', {})
})