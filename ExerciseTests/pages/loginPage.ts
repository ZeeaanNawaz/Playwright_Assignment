import { APIRequestContext, Page, expect } from '@playwright/test';

export class LoginPage {
    constructor(private page: Page) { }

    async goto() {
        // await this.page.goto('https://www.saucedemo.com/');
        try {
            console.log('Navigating...');
            await this.page.goto('https://www.saucedemo.com/', { waitUntil: 'load', timeout: 10000 });
            console.log('Navigation successful');
        } catch (e) {
            console.error('Navigation failed:', e);
            throw e;
        }
    }

    async login(username: string, password: string) {
        await this.page.getByPlaceholder('Username').fill(username);
        await this.page.getByPlaceholder('Password').fill(password);
        await this.page.locator('[data-test="login-button"]').click();
        await expect(this.page).toHaveURL(/inventory\.html$/);
        await expect(this.page.locator('.title')).toHaveText('Products');
    }
}