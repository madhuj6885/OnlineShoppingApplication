class Customer  {
       
    constructor(page){
        this.page = page;

        this.newCstmer = page.locator("//div[text()='+ New Customer']");
        this.custNameTbx = page.locator("//input[@id='customerLightBox_nameField']");
        this.custDescTbx = page.locator("//textarea[@id='customerLightBox_descriptionField']");
        this.custDropdown = page.locator("//button[contains(text(), 'Select an active customer')]");
        this.dropElement = page.locator("//a[contains(text(), '-- Select an active customer')]/../../li//a[text()='Media Agency']");
        this.createCstmBtn = page.locator("//span[text()='Create Customer']");
        this.searchTbx = page.locator("//input[@placeholder='Start typing name ...']");

    }


    async addCustomer(){
        await this.newCstmer.click();
        await this.custNameTbx.fill(" John Doe Demo");
        await this.custDescTbx.fill("A new Customer");
        await this.custDropdown.click();
        await this.dropElement.click();
        await this.createCstmBtn.click();

    }

    async deleteCustomer() {


        await this.searchTbx.fill("mithun");
    }

}
export default Customer 