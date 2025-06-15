import { Locator, Page } from '@playwright/test';

export class LoginPage {

    private readonly usernameField: Locator;
    private readonly passwordField: Locator;
    private readonly loginButton: Locator;
    private readonly productPage: Locator;
    
    constructor(private page: Page) { 
        
        this.usernameField = page.locator('[data-test="username"]')
        this.passwordField = page.locator('[data-test="password"]')
        this.loginButton = page.locator('[data-test="login-button"]')
        this.productPage = page.locator('[data-test="title"]')
    }

    async gotoLoginPage() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async login(username: string, password: string) {

        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();

    }

    async isLoggedIn() {
        return this.page.url().includes('inventory.html') &&
            await this.productPage.innerText() === 'Products';
      }
}