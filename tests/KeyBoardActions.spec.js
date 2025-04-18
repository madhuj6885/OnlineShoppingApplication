import test from "@playwright/test";



test("Keyboard actions",async ({page}) =>{
    await page.goto("http://localhost/login.do");


    await page.pause();

//     await page.keyboard.type('Hello World!');
// await page.keyboard.press('ArrowLeft');

// await page.keyboard.down('Shift');
// for (let i = 0; i < ' World'.length; i++)
//   await page.keyboard.press('ArrowLeft');
// await page.keyboard.up('Shift');

// await page.keyboard.press('Backspace');

    await page.click("#username");
await page.keyboard.type("Hello wordl!");
let l = ('Hello World').length;

// for(let i=0; i<4; i++ ){
//     await page.keyboard.down("Shift");

//     await page.keyboard.press("ArrowLeft");

// }
await page.keyboard.press("Control+A");
await page.keyboard.press("Control+C");
await page.keyboard.press("Tab");
await page.click("input[name='pwd']");

await page.keyboard.down(" ")
//await page.keyboard.press("Control+V");
// await page.keyboard.press("Backspace");
// await page.keyboard.press("Meta");
// await page.keyboard.type("a");
// await page.keyboard.type("b");

// await page.keyboard.type("c");
// await page.keyboard.up("Capslock");



await page.pause();

    // await page.keyboard.type("admin");
    
    // await page.keyboard.insertText("manager");
    // await page.keyboard.down("Control");
    // await page.keyboard.press("p");
    // await page.keyboard.up("Control");
    // await page.click("//div[text()='Login ']");



})