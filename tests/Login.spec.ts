import { expect, test } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

  test('Scenario 1: Login with Valid Credentials', async ({ page }) => {

    const login = new LoginPage(page);

    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce');

    expect(await login.isLoggedIn()).toBe(true);
  });