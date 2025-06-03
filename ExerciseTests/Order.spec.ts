import { test } from '@playwright/test';
import {cartPage } from './pages/cartPage';
import { LoginPage } from './pages/loginPage';
import { InventoryPage } from './pages/inventoryPage';
import { checkoutPage } from './pages/checkoutPage';

  test('Scenario 2: Place Order and Checkout Successfully', async ({ page }) => {
    const login = new LoginPage(page);
    const inventory = new InventoryPage(page);
    const cart = new cartPage(page);
    const checkout = new checkoutPage(page);

    // 1: login
    await login.goto();
    await login.login('standard_user', 'secret_sauce')

    // 2: Add item to cart
    await inventory.addItemToCart('add-to-cart-sauce-labs-backpack');    

    // 3: Go to cart
    await inventory.goToCart();


    // 4: Verify cart items
    await cart.verifyCartItem('Sauce Labs Backpack');

    // 5: Proceed to checkout
    await cart.proceedToCheckout();

    // 6: Enter Checkout Info
    await checkout.fillCheckoutInfo('Zeeaan', 'Nawaz', '44000');
    await checkout.verifyOverviewPage();
    await checkout.finishOrder();
    await checkout.verifyOrderComplete();
  });