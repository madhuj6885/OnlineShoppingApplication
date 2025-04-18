import { expect } from "@playwright/test";
import { log } from "console";

class AdminPage {
constructor(page) {
  //admin login elementshi
        this.page = page;
        this.adminLoginLink = page.locator("//a[text()='Admin Login']");
        this.userNameTbx = page.locator("//input[@id='inputEmail']");
        this.passwordTbx = page.locator("//input[@id='inputPassword']");
        this.submitBtn = page.locator("//button[text()='Login']");

// admin logout elements
        this.avatarDropdown = page.locator("//a[@class='dropdown-toggle']");
        this.logoutLink = page.locator("//a[text()='Logout']");
        this.gotoportalLink = page.locator("//ul/li/a/span");

//create category
        this.createCategoryLink = page.locator(" //a[text()=' Create Category '] ");
        this.categoryNameTbx = page.locator("//input[@name='category']");
        this.description = page.locator("//textarea[@name='description']");
        this.createBtn = page.locator("//button[@name='submit']");
        this.confirmationAlert = page.locator("//strong[text()='Well done!']");
        this.closeAlert = page.locator("//button[@class='close']");

//adding subcategory
        this.subCategoryLink = page.locator("//a[text()='Sub Category '] ");
        this.categoryDropdown = page.locator("//select[@name='category'] ");
        this.subcategoryTbx = page.locator("//input[@name='subcategory'] ");
        this.createSubBtn = page.locator("//button[text()='Create'] ");


  // insert Product
 this.insertProdLink = page.locator("//a[text()='Insert Product '] ");
 this.exCategorydrop = page.locator("//select[@name='category']");
 this.subCategorydrop = page.locator("//select[@name='subcategory']");
 this.prodName = page.locator("//input[@name='productName']");
 this.productCompany = page.locator("//input[@name='productCompany']");
 this.productpriceBeforeDisc = page.locator("//input[@name='productpricebd']");
 this.productprice = page.locator("//input[@name='productprice']");
 this.productDescription = page.locator("//textarea[@name='productDescription']");
this.productAvailability = page.locator("//select[@name='productAvailability']");
 this.productimage1 = page.locator("//input[@name='productimage1']");
this.productShippingcharge = page.locator("//input[@name='productShippingcharge']");
this.productimage2= page.locator("//input[@name='productimage2']");
this.productimage3 = page.locator("//input[@name='productimage3']");
this.insertBtn = page.locator("//button[text()='Insert']");


//manage Products
this.manageproductsLink = page.locator("//a[text()='Manage Products ']");
this.searchTbx = page.locator("//label[text()='Search: ']");
this.editIcon = page.locator("//tr[@class='odd']//td//a//i[@class='icon-edit']");
this.rows = page.locator("//table//tbody//tr");
this.deleteIcon = page.locator("//tr[@class='odd']//td//a//i[@class='icon-remove-sign']");
this.deleteConfirmation =page.locator("//strong[text()='Oh snap!']");
this.cancelBtn = page.locator("//button[text()='×']");
this.updateBtn = page.locator("//button[text()='Update']")

//edit products elements

this.changePic1 = page.locator("//label[text()='Product Image1']/../div//a");
this.newpic1 =page.locator("//input[@id='productimage1']");
this.imgUpdate1 = page.locator("//button[@name='submit']");
this.changePic2 = page.locator("//label[text()='Product Image2']/../div//a");
this.newpic2 =page.locator("//input[@id='productimage2']");
this.imgUpdate2 = page.locator("//button[@name='submit']");
this.changePic3 = page.locator("//label[text()='Product Image3']/../div//a");
this.newpic3 =page.locator("//input[@id='productimage3']");
this.imgUpdate3= page.locator("//button[@name='submit']");
}


async adminLogin(username, password){
await this.adminLoginLink.click();
await this.userNameTbx.fill(username);
await this.passwordTbx.fill(password);
await this.submitBtn.click();

    }

async logout(){
await this.avatarDropdown.click();
await this.logoutLink.click();

    }

    async gotoPortal(){
        await this.gotoportalLink.click();
    }


async createCategory(name, desc){
        await this.createCategoryLink.click();
        await this.categoryNameTbx.fill(name);
        await this.description.fill(desc);
        await this.createBtn.click();
        await expect(this.confirmationAlert).toBeVisible();
        await this.closeAlert.click();
    }


async addSubCategory(catName, subcatName){
        await this.subCategoryLink.click();
        await this.categoryDropdown.selectOption(catName);
        await this.subcategoryTbx.fill(subcatName);
        await this.createSubBtn.click();
        await expect(this.confirmationAlert).toBeVisible();
        await this.closeAlert.click();
    }

async insertProduct(cat, sub, name, comapany, discprice, price,shippingcharge, availability){
        await this.insertProdLink.click();
        await this.exCategorydrop.selectOption(cat);
        await this.subCategorydrop.selectOption(sub);
        await this.prodName.fill(name);
        await this.productCompany.fill(comapany);
        await this.productpriceBeforeDisc.fill(discprice);
        await this.productprice.fill(price);
        // await this.productDescription.fill(desc);
        await this.productShippingcharge.fill(shippingcharge);
        await this.productAvailability.selectOption(availability);
        const prdImg1 = await this.productimage1;
        await prdImg1.setInputFiles("OnlineShoppingApplicationPage/images/1112495919.jpg");
        const prdImg2 = await this.productimage2;
        await prdImg2.setInputFiles("OnlineShoppingApplicationPage/images/1112495919.jpg");
        const prdImg3 = await this.productimage3;
        await prdImg3.setInputFiles("OnlineShoppingApplicationPage/images/1112495919.jpg");
        await this.insertBtn.click();
        await expect(this.confirmationAlert).toBeVisible();
        await this.closeAlert.click();
}

async manageProducts(prodName){
    await this.manageproductsLink.click();
    await this.page.reload();
    await this.searchTbx.fill(prodName);
   
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(2000);


}

async deleteProducts(){

    await this.manageProducts("island Treasure of silver");
    const rowCount = await this.rows.count();
    console.log(rowCount);
    console.log(await this.rows);
    
    


    // const matchedRow = await this.rows.filter(() =>{
    //     has:threadId.page.locator("td");
        
    // })
    
    const matchedRow = await this.rows.filter({
      has:await this.rows.locator("td"),
        hasText: "island Treasure of silver",
      }).count();
    expect(matchedRow).toBeGreaterThan(0); 
    console.log(matchedRow);
    
    await expect(this.deleteIcon).toBeVisible();
    await this.page.on('dialog', dialog => dialog.accept());
    await this.deleteIcon.click();
    await expect(this.deleteConfirmation).toBeVisible();
    await this.cancelBtn.click();
}

async editProducts(prodName, cat, sub, name, comapany, discprice, price,shippingcharge, availability){

    await this.manageProducts(prodName);
    await expect(this.editIcon).toBeVisible();
    await this.editIcon.click();
    await this.exCategorydrop.selectOption(cat);
    await this.subCategorydrop.selectOption(sub);
    await this.prodName.fill(name);
    await this.productCompany.fill(comapany);
    await this.productpriceBeforeDisc.fill(discprice);
    await this.productprice.fill(price);
    // await this.productDescription.fill(desc);
    await this.productShippingcharge.fill(shippingcharge);
    await this.productAvailability.selectOption(availability);
    await this.changePic1.click();

    const prdImg1 = await this.newpic1;
    await prdImg1.setInputFiles("OnlineShoppingApplicationPage/images/IMG_20240410_205032_065.jpg");
    await this.imgUpdate1.click();
    // const prdImg2 = await this.newpic2;
    // await prdImg2.setInputFiles("OnlineShoppingApplicationPage/images/IMG_20240410_205032_065.jpg");
    // await this.imgUpdate2.click();

    // const prdImg3 = await this.newpic3;
    // await prdImg3.setInputFiles("OnlineShoppingApplicationPage/images/IMG_20240410_205032_065.jpg");
    // await this.imgUpdate3.click();

//    await this.updateBtn.click();
   await expect(this.confirmationAlert).toBeVisible();
    await this.closeAlert.click();

}
}

export default AdminPage