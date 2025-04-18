class Login {
 constructor(page){
    this.page = page;
        this.usn = page.locator("id=username");
        this.pwd = page.locator("input[name='pwd']");
        this.lgnBtn = page.locator("//div[text()='Login ']")
        this.logoutBtn = page.locator("//span[text()='Create Project']/../..")
       
    


    }
async getUrl(url){
    await this.page.goto(url);
}

async login(username, password){
      await  this.usn.fill(username);
       await this.pwd.fill(password);
       await this.lgnBtn.click();
    
       
    }
 async logout(){

        await this.logoutBtn.click();
    }

 

  
}
export default Login