import { Page } from "@playwright/test";

export class InventoryPage {
    constructor(private page: Page) { }

    // Products list Page
    async addItemToCart(itemTestId: string) {
        await this.page.getByTestId(itemTestId).click();
    }

    async goToCart() {
        await this.page.locator('.shopping_cart_link').click();
    }
}