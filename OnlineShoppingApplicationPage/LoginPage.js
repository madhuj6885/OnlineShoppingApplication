
class LoginPage {

constructor(page) {
    this.fullName = page.locator("//input[@id='fullname']");
    this.email = page.locator("//input[@id='email']");
    this.contactno = page.locator("//input[@id='contactno']");
   this.password = page.locator("//input[@id='password']");
    this.confirmpassword = page.locator("//input[@id='confirmpassword']");
    this.submitBtn = page.locator("//button[@id='submit']");
    this.logEmail = page.locator("//input[@name='email']");
    this.logPass = page.locator("//input[@id='exampleInputPassword1']");
    this.loginBtn = page.locator("//button[@name='login']");
}


async createNewAccount(fullname, email, contact, pass, cpass){
    await this.fullName.fill(fullname);
    await this.email.fill(email);
    await this.contactno.fill(contact);
    await this.password.fill(pass);
    await this.confirmpassword.fill(cpass);
    await this.submitBtn.click();
}

async loginAsUser(email, password){
    await this.logEmail.fill(email);
    await this.logPass.fill(password);
    await this.loginBtn.click();

}

}

export default LoginPage