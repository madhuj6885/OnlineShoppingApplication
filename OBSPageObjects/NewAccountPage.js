import { log } from "console";

class NewAccount {
   constructor(page){

    this.name = page.locator("//input[@name='name']");
    this.gender = page.locator("//select[@name='gender']");
    this.mobile = page.locator("//input[@name='mobile']");
    this.email = page.locator("//input[@name='email']")
    this.landline = page.locator("//input[@name='landline']")
    this.dob = page.locator("//input[@name='dob']")
    this.pan = page.locator("//input[@name='pan_no']")
    this.citizenship = page.locator("//input[@name='citizenship']")
    this.homeaddrs = page.locator("//input[@name='homeaddrs']")
    this.officeaddrs = page.locator("//input[@name='officeaddrs']")
    this.country = page.locator("//select[@name='country']")
    this.state = page.locator("//select[@name='state']")
    this.city = page.locator("//select[@name='city']")
    this.pin = page.locator("//input[@name='pin']")
    this.arealoc = page.locator("//input[@name='arealoc']")
    this.nominee_name = page.locator("//input[@name='nominee_name']")
    this.nominee_ac_no = page.locator("//input[@name='nominee_ac_no']")
    this.acctype = page.locator("//select[@name='acctype']");
    this.submitBtn = page.locator("//input[@name='submit']");
    this.confirmBtn = page.locator("//input[@name='cnfrm-submit']");

    
 }

   async createAccount(){
await this.name.fill("Madhu");
await this.gender.selectOption("Male");
await this.mobile.fill("6363406834");
await this.email.fill("madhuj6885@gmail.com");
await this.landline.fill("1234556");
// let date = await this.dob;
// date.value("03/04/2023");

// let c = await this.dob.click();
// c.fill("03/04/1997");
// await this.dob.fill("03/04/1997");

await this.pan.fill("czgpa1102a");
await this.citizenship.fill("123333");
await this.homeaddrs.fill("Hoskote");
await this.officeaddrs.fill("Bangalore");
await this.state.selectOption("California")
await this.city.selectOption("Texas City")
await this.pin.fill("562114");
await this.arealoc.fill("mvj hospital");
await this.nominee_name.fill("mother");
await this.nominee_ac_no.fill("6245055441");
await this.acctype.selectOption("Saving");
await this.submitBtn.click();
await this.confirmBtn.click();




   }

}
export default NewAccount