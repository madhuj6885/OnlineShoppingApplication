import test from "@playwright/test";

test("Dropdown", async ({page})=>{
    await page.goto("file:///C:/Users/Admin/OneDrive/Desktop/dropdown.html");

    const sel = page.locator("#skills");
    await sel.selectOption(['java', 'javascript', 'pearl'
    ]);
 
    await page.waitForTimeout(2000);

})