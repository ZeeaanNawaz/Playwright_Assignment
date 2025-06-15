import { Page, Locator } from "@playwright/test";

export class ProductsPage {

    private readonly cartIcon: Locator;

    constructor(private page: Page) { 

        this.cartIcon = page.locator('.shopping_cart_link');
    }

    async addItemToCart(productName: string) {

        const products = this.page.locator('.inventory_item');

        const count = await products.count();
        for (let i = 0; i < count; i++) {
            const product = products.nth(i);
            const name = await product.locator('.inventory_item_name').innerText();

            if (name.trim() === productName.trim()) {
                await product.locator('button:has-text("Add to cart")').click();
                break;
            }
        }
    }
    

    async goToCart() {

        await this.cartIcon.click();

    }
}