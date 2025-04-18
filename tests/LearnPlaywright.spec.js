import test, { expect } from "@playwright/test";

test("Learn Playwright", async ({page}) =>{

    await page.goto("https://practicetestautomation.com/practice-test-login/");
    await page.pause();


await page.getByLabel("Username").fill("madhu@123");
await page.getByLabel("Password").fill("madhu@123");
await page.getByRole("button", {name:"Submit"}).click();
await expect(page.getByText("Your username is invalid!")).toBeVisible();

await page.pause();
})

test("Open Flipkar Browser ",async ({page})=>{

    await page.goto("http://localhost/login.do");

   //await page.pause();
   await page.fill("id=username","admin");
   await page.fill("input[name='pwd']", "manager");
//    await page.fill("placeholder=Password","manager");
   await page.click("//div[text()='Login ']");

const logoutLink  = await page.locator("//a[text()='Logout']");

await expect(logoutLink).toBeVisible();

const links = await page.$$('a');
for(const link of links) {
    const text =await link.textContent();
    console.log(text);
    
}
await page.close();

    
})

 
test("Print all Links in Amazon",async  ({page}) =>{

//     await page.goto("http://www.amazon.in");

//     await page.fill("id=twotabsearchtextbox", "iphone 16 pro");




// await page.waitForTimeout(5000);
//     const names = await page.$$("//div[contains(text(),'iphone')]");
//     for(const n of names){
// let text = await n.textContent();
// console.log(text);
//     }
//     // await page.pause();

    await page.goto("https://www.google.com");

    await page.fill("//textarea[@name='q']", "javascript");
    await page.waitForTimeout(5000);

    const links = await page.$$("//span[contains(text(),'javascript')]");
    //console.log(links);

  for(let l of links) {
    const text = await l.textContent();
    console.log(text);
    
  }
})
// await page.pause();

    // await page.locator("//li[text()='Men ']").hover();
    //const links  = await page.$$("//section[@class='Men_List']//li");

    // for(const l of links){
    //  let text = await l.textContent();
    //  console.log(text);
     
    // }

 
//     }

    // const links = await page.$$('a');

    // for(const link of links) {
    //     const text = await link.textContent();
    //     console.log(text);
        
    // }
//span[contains(text(), 'iPhone 16 Pro')]