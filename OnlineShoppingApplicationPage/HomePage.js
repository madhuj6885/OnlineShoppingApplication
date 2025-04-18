class HomePage {

    constructor(page){
        this.page = page;
        this.loginLink = page.locator("//a[text()='Login']");
        this.electronicsLink = page.locator("//a[text()=' Electronics']");

        // this.electronicsLink = page.locator("//a[text()='Home']");


        //adding products to add cart
        this.productList = "//h3[@class='name']/a";
        this.addCartBtn = page.locator("//a[text()=' ADD TO CART']");
        this.addToCartBtn = page.locator("//button[text()='Add to cart']");

        //img[@src='brandsimage/dell.jpg']/../../..//
}

    async triggerUrl(url) {
        await this.page.goto(url);
    }


    async clickLoginLink(){
        await this.loginLink.click();
    }


    async addToCart(productname){
        const productList = await this.page.$$(this.productList);
        for(const product of productList) {
            if (productname === await product.textContent()) {
                // console.log(product.textContent())
                await product.click();
                break;
            }
        }
        // await this.page.waitForTimeout(2000);
       await this.addCartBtn.click();
       await this.page.waitForTimeout(2000);

    }

    async clickOnElectronics(){
        await this.electronicsLink.click();

    }
}

export default HomePage