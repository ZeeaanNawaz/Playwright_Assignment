import { Locator, Page } from "@playwright/test";

export class CheckoutPage{

    private readonly fName: Locator;
    private readonly lName: Locator;
    private readonly zip: Locator;
    private readonly continueButton: Locator;
    private readonly overviewTitle: Locator;
    private readonly paymentInfo: Locator;
    private readonly shippingInfo: Locator;
    private readonly totalPayInfo: Locator;
    private readonly finishButton: Locator;
    private readonly checkoutTitle: Locator;
    private readonly successMessage: Locator;

    constructor(private readonly page: Page){

        this.fName = page.locator('[data-test="firstName"]');
        this.lName = page.locator('[data-test="lastName"]');
        this.zip = page.locator('[data-test="postalCode"]');
        this.continueButton = page.locator('[data-test="continue"]');

        this.overviewTitle = page.locator('[data-test="title"]');
        this.paymentInfo = page.locator('[data-test="payment-info-label"]');
        this.shippingInfo = page.locator('[data-test="shipping-info-label"]');
        this.totalPayInfo = page.locator('[data-test="total-info-label"]');

        this.finishButton = page.locator('[data-test="finish"]');

        this.checkoutTitle = page.locator('[data-test="title"]');
        this.successMessage = page.locator('[data-test="complete-header"]');
    }

    async fillCheckoutInfo(firstName: string, lastName: string, zip: string){

        await this.fName.fill(firstName);
        await this.lName.fill(lastName);
        await this.zip.fill(zip);
        await this.continueButton.click();
    }

    async getOverviewDetails() {
        return {
            title: await this.overviewTitle.innerText(),
            payment: await this.paymentInfo.innerText(),
            shipping: await this.shippingInfo.innerText(),
            total: await this.totalPayInfo.innerText()
        };
    }
    
    async finishOrder() {

        await this.finishButton.click();
    }

    async getOrderCompletionDetails() {
        return {
            title: await this.checkoutTitle.innerText(),
            message: await this.successMessage.innerText()
        };
    }
    
}