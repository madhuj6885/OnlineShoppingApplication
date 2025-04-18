class Task {


    constructor(page){
        this.page = page;
        this.taskBtn = page.locator("//div[text()='TASKS']/..");
        this.addNewBtn = page.locator("//div[text()='Add New']");
}

async addTask(){
    await this.taskBtn.click();
    await this.addNewBtn.click();
   

}

}

export default Task