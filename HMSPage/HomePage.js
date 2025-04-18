class HomePage {
    constructor(page) {

        this.page = page;
        this.loginBtn = page.locator("//a[text()='Logins']");
        this.patientLogin = page.locator("//h6[text()='Patient Login']/../a");
        this.patusername = page.locator("//input[@name='username']");
        this.patpassword = page.locator("//input[@name='password']");
        this.patLoginBtn = page.locator("//button[@name='submit']");


    }
    async triggerUrl(url){
        await this.page.goto(url);
}

async clickLoginLink(){
    await this.loginBtn.click();
}

async loginasPatient(){
    await this.patientLogin.click();
    // await this.patusername.fill("johndoe12@test.com");
    // await this.patpassword.fill("Test@123");
    await this.patLoginBtn.click();
}
}

export default HomePage