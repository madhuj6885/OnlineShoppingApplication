class HomePage {
constructor(page){
    this.page = page;

    this.openAccntBtn = page.locator("//li[text()='Open Account']/..");
}


async triggerUrl(url){
await this.page.goto(url);

}
async addAccount(){
await this.openAccntBtn.click();
}


}
export default HomePage 