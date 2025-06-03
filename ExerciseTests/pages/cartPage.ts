import { Page, expect } from "@playwright/test";

export class cartPage {
    constructor(private page: Page) {}

    async verifyCartItem(itemName: string){
        // My cart Page
        await expect(this.page.locator('.title')).toHaveText('Your Cart');
        await expect(this.page.locator('.inventory_item_name')).toHaveText(itemName);
    }

    async proceedToCheckout() {
        await this.page.locator('[data-test="checkout"]').click();
    }
}