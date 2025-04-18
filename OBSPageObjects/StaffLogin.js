class StaffLogin {

constructor(page){

    this.staffLoginlLink = page.locator("//a[text()='Staff Login']");
    this.staffId = page.locator("//input[@name='staff_id']");
    this.password = page.locator("//input[@name='password']");
    this.loginBtn = page.locator("//input[@name='staff_login-btn']");
    this.approveIcon = page.locator("//input[@name='apprvac']");
    this.deleteCustIcon = page.locator("//input[@name='del_cust']");
    this.custAcNo = page.locator("//input[@name='Cust_ac_no']");
    this.custId = page.locator("//input[@name='Cust_ac_Id']");
    this.reason = page.locator("//input[@name='reason']");
    this.deleteBtn = page.locator("//input[@name='delete']");
    this.creditCustBtn = page.locator("//input[@name='credit_cust_ac']");
    this.customerNumber = page.locator("//input[@name='customer_account_no'");
    this.amount = page.locator("//input[@name='credit_amount']");
    this.creditBtn = page.locator("//input[@name='credit_btn']");

    this.approveBtn = page.locator("//td[text()='madhu Kumar A']/../..//td[@class='actions']//button[text()='Approve']");
    this.logoutBtn = page.locator("//input[@name='logout_btn']");


}

async staffLogin(username, password){
    await this.staffLoginlLink.click();
    await this.staffId.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();


}
async approveNewAccount(){
   await this.approveIcon.click();
   await this.approveBtn.click();
   await this.logoutBtn.click();
}

async deleteCustomer(){
    await this.deleteCustIcon.click();
    await this.custAcNo.fill();
    await this.custId.fill();
    await this.reason.fill("simple");
    await this.deleteBtn.click();
    await this.logoutBtn.click();


}


async creditCustomer(){
    await this.creditCustBtn.click();
    await this.customerNumber.fill("1234569");
    await this.amount.fill("1566");
    await this.creditBtn.click();
    await this.logoutBtn.click();
}

}



export default StaffLogin 