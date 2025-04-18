class ApplyDebitCard {

constructor(page){

    this.appplyBtn = page.locator("//li[text()='Apply Debit Card']/..");
    this.holderName = page.locator("//input[@name='holder_name']");
    this.dob = page.locator("//input[@name='dob']");
    this.pan = page.locator("//input[@name='pan']");
    this.mob = page.locator("//input[@name='mob']");
    this.accno = page.locator("//input[@name='acc_no']");
    this.submitBtn = page.locator("//input[@name='dbt_crd_submit']");



}

async apllyDebitCard(){
    await this.appplyBtn.click();
    await this.holderName.fill("Madhu Kumar A");
    await this.dob.fill("1999-03-04");
    await this.pan.fill("CZGPA1102A")
    await this.mob.fill("6363406834");

    await this.accno.fill("1011431011839");
    await this.submitBtn.click();

}

}

export default ApplyDebitCard