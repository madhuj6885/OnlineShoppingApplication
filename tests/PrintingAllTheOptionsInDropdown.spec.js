import test, { expect } from "@playwright/test";

test("Print all Options",async ({page}) =>{

    await page.goto("file:///C:/Users/Admin/OneDrive/Desktop/dropdown.html");

    // const l = await page.locator("#skills option");
//await page.waitForTimeout(5000);
    const options = await page.$$("#skills option");
    await page.waitForTimeout(2000);

    expect(options.length).toBe(5);
    //console.log(options);
    
    for(let opt of options) {
        let text = await opt.textContent();
        if (text === 'Java') {
            opt.check();
            
        }


    }
    await page.waitForTimeout(5000);

    //await expect (l).toHaveCount(5);
})