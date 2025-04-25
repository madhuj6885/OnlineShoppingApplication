import test from "@playwright/test";
import HomePage from "../OnlineShoppingApplicationPage/HomePage.js";
import LoginPage from "../OnlineShoppingApplicationPage/LoginPage.js";
import AdminPage from "../OnlineShoppingApplicationPage/AdminPage.js";
import admincredentials from "../testData/AdminLoginCredentials.json";
import insertProductDetails from "../testData/insertProduct.json";
import creatCategoryData from "..//testData/createCategoryData.json";
import editproduct from "../testData/editProduct.json";
// import userData from "../testData/userLoginData.json";

admincredentials.forEach((obj, i) =>{
    test(`Multple login ${i}`, async({page}) =>{
        let h = new HomePage(page);
        let a = new AdminPage(page);
        let product = insertProductDetails;
        let category =creatCategoryData;
        let edit = editproduct;
        let username = obj.adminName;
        let password = obj.adminPassword;
        let url = obj.url;
        await h.triggerUrl(url);

    try {
        await a.adminLogin(username, password);

  } catch(E) {
    console.log(`Invalid user name ${username} and password ${password} !`);
    
  }
  await a.createCategory(category.name, category.description);
  await a.addSubCategory(category.name, category.subcategoryName);
  await a.insertProduct(product.categoryName,product.subCategoryName, product.productName, product.proudctCompany, product.productpriceBD, product.productPrice,product.shippingCharges, product.productAvailability );
  await a.editProducts(edit.productName,edit.categoryName,edit.subCategoryName, edit.productDescription, edit.proudctCompany, edit.productpriceBD, edit.productPrice, edit.shippingCharges, edit.productAvailability );
  await a.deleteProducts();
  await a.logout();
  await a.gotoPortal();
 })
})





test('Add a simple invoice test', () => {

    // admin login, creating category, creating subcategory , inserting product, 
    // editing product and deleting product

    test("Admin Login and create category",async ({page}) =>{
    
        let h = new HomePage(page);
        let a = new AdminPage(page);
        // let r = new ReadData();
        // let url = (await r.getData()).url;
        // let username = await r.getData().username;
        // let password = (await r.getData()).password;
       
await page.pause();
        await h.triggerUrl(url);
        await page.waitForTimeout(2000);
        await a.adminLogin(username, password);
        await a.addSubCategory("Health", "Dactors");
        await a.createCategory("", "A simple onie for testing");
        await a.addSubCategory("Health", "Dactors");
        await a.insertProduct("Health","Dactors", "Thrombolyser", "Apple", "1000", "750","50", "In Stock" );
        await a.editProducts("Thrombolyser","Health","Dactors", "Thrombolyser Good", "Meta", "2000", "1750", "150", "In Stock" );
        await a.deleteProducts("Thrombolyser");
        await a.logout();
        await a.gotoPortal();
   
    });


    // creating a new user

    test("Home page and create a new account",async ({page}) =>{
        // let h = new HomePage(page);
        let l = new LoginPage(page);
    
        // await h.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Shopping_Application/");
        // await page.waitForTimeout(2000);
        await h.clickLoginLink();
        await l.createNewAccount("madhumithun", "mdhuj@gmail.com","6363406834", "madhu@123","madhu@123");
        
    })


    //login with existing user  and adding products to the cart

    test("Login as existing user",async ({page}) =>{
        // let h = new HomePage(page);
        // let l = new LoginPage(page);
        // await h.triggerUrl("http://49.249.28.218:8081/AppServer/Online_Shopping_Application/");
        // await page.waitForTimeout(2000);
        await h.clickLoginLink();
        await l.loginAsUser("mdhuj@gmail.com","madhu@123");
        await page.waitForTimeout(2000);
    
        await h.clickOnElectronics();
        await page.waitForTimeout(2000);
    
        await h.addToCart("Pixel 9 pro");
        await page.waitForTimeout(2000);
    
    })



});





