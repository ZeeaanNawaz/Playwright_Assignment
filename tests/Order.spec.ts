import { expect, test } from '@playwright/test';
import { CartPage } from '../pages/cartPage';
import { LoginPage } from '../pages/loginPage';
import { ProductsPage } from '../pages/productPage';
import { CheckoutPage } from '../pages/checkoutPage';

  test('Scenario 2: Place Order and Checkout Successfully', async ({ page }) => {

    const login = new LoginPage(page);
    const product = new ProductsPage(page);
    const cart = new CartPage(page);
    const checkout = new CheckoutPage(page);
    const productName = 'Sauce Labs Bike Light';

    await login.gotoLoginPage();
    await login.login('standard_user', 'secret_sauce')
    expect(await login.isLoggedIn()).toBe(true);

    await product.addItemToCart(productName);    
    await product.goToCart();

    const cartDEtails = await cart.getCartDetails();
    expect(cartDEtails.title).toBe('Your Cart');
    expect(cartDEtails.item).toBe(productName);

    await cart.proceedToCheckout();
    await checkout.fillCheckoutInfo('Zeeaan', 'Nawaz', '44000');

    const overview = await checkout.getOverviewDetails();
    expect(overview.title).toBe('Checkout: Overview');
    expect(overview.payment).toBe('Payment Information:');
    expect(overview.shipping).toBe('Shipping Information:');
    expect(overview.total).toBe('Price Total');

    await checkout.finishOrder();

    const confirm = await checkout.getOrderCompletionDetails();
    expect(confirm.title).toBe('Checkout: Complete!');
    expect(confirm.message).toBe('Thank you for your order!');
  });