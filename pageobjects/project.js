class Project {
    constructor(page){
this.page =page;
        this.newPrjct = page.locator("//div[text()='+ New Project']");
        this.prJName = page.locator("//input[@id='projectPopup_projectNameField']");
        this.prjDropdown = page.locator("//button[contains(text(),'Add Project for')]");
        this.selectCstdrop = page.locator("//a[text()='Madhu']");
        this.prjDescTbx = page.locator("//textarea[@id='projectPopup_projectDescriptionField']");
        this.createPrjct = page.locator("//span[text()='Create Project']");
    }

async createProject(){

    await this.newPrjct.click();
    await this.prJName.fill("Demo2 srtre");
    await this.prjDropdown.click();
    await this.selectCstdrop.click();
    await this.prjDescTbx.fill("A simple Project");
    await this.createPrjct.click();

}

}

export default Project