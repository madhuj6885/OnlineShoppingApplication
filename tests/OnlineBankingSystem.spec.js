import test from "@playwright/test";
import HomePage from "../OBSPageObjects/HomePage";
import NewAccount from "../OBSPageObjects/NewAccountPage";
import StaffLogin from "../OBSPageObjects/StaffLogin";
import ApplyDebitCard from "../OBSPageObjects/ApplyDebitCard";

test("Open Browser and Click Open Accout Button",async ({page}) =>{
let homePage = new HomePage(page);
let newaccount = new NewAccount(page);
await page.pause();
await homePage.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php");
await homePage.addAccount();
await newaccount.createAccount();
// await page.waitForTimeout(5000);
})

test("Staff Login and Approve New Account Application",async ({page}) =>{
    let homePage = new HomePage(page);
    let staffPage = new StaffLogin(page);
    await page.pause();
   
   await homePage.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php");
    await staffPage.staffLogin("21001", "password");
    await staffPage.approveNewAccount();
    await page.waitForTimeout(10000);



})
test("Staff Login and Delete Customer",async ({page}) =>{
    let homePage = new HomePage(page);
    let staffPage = new StaffLogin(page);


    
   
   await homePage.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php");
    await staffPage.staffLogin();
    await page.waitForTimeout(5000);

   await staffPage.deleteCustomer();
    await page.waitForTimeout(10000);
})

test("Apply Debit Card",async ({page}) =>{
    let homePage = new HomePage(page);
    let debitPage = new ApplyDebitCard(page);
    await page.pause();
   
   await homePage.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Banking_System/index.php");
   await debitPage.apllyDebitCard();

    await page.waitForTimeout(5000);
})