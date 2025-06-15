import { Locator, Page } from "@playwright/test";

export class CartPage {

    private readonly cartTitle: Locator;
    private readonly itemName: Locator;
    private readonly checkoutButton: Locator;

    constructor(private page: Page) {

        this.cartTitle = page.locator('[data-test="title"]');
        this.itemName = page.locator('.inventory_item_name');
        this.checkoutButton = page.locator('[data-test="checkout"]');
    }

    async getCartDetails() {
        return {
            title: await this.cartTitle.innerText(),
            item: await this.itemName.innerText()
        }
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}