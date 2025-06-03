import { Page, expect } from "@playwright/test";

export class checkoutPage{
    constructor(private page: Page){}

    async fillCheckoutInfo(firstName: string, lastName: string, zip: string){
        // Checkout info Page
        await this.page.getByPlaceholder('First Name').fill(firstName);
        await this.page.getByPlaceholder('Last Name').fill(lastName);
        await this.page.getByPlaceholder('Zip/Postal Code').fill(zip);
        await this.page.locator('[data-test="continue"]').click();
    }

    async verifyOverviewPage() {
        // Overview Page
        await expect(this.page.locator('.title')).toHaveText('Checkout: Overview');
        await expect(this.page.locator('[data-test="payment-info-label"]')).toContainText('Payment Information:');
        await expect(this.page.locator('[data-test="shipping-info-label"]')).toContainText('Shipping Information:');
        await expect(this.page.locator('[data-test="total-info-label"]')).toContainText('Price Total');
    }

    async finishOrder() {
        await this.page.locator('[data-test="finish"]').click();
    }

    async verifyOrderComplete() {
        // Order verification Page
        await expect(this.page.locator('.title')).toHaveText('Checkout: Complete!');
        await expect(this.page.locator('.complete-header')).toHaveText('Thank you for your order!');
    }
}