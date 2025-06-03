import { test, expect, request } from '@playwright/test';
// import {cartPage } from './pages/cartPage';
import { LoginPage } from './pages/loginPage';
// import { InventoryPage } from './pages/inventoryPage';
// import { checkoutPage } from './pages/checkoutPage';
// import { openWeather } from './pages/weatherAPIPage';

// test.describe('Sauce Demo E2E Scenarios', () => {

  test('Scenario 1: Login with Valid Credentials', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login('standard_user', 'secret_sauce')
  });

//   test('Scenario 2: Place Order and Checkout Successfully', async ({ page }) => {
//     const login = new LoginPage(page);
//     const inventory = new InventoryPage(page);
//     const cart = new cartPage(page);
//     const checkout = new checkoutPage(page);

//     // 1: login
//     await login.goto();
//     await login.login('standard_user', 'secret_sauce')

//     // 2: Add item to cart
//     await inventory.addItemToCart('add-to-cart-sauce-labs-backpack');    

//     // 3: Go to cart
//     await inventory.goToCart();


//     // 4: Verify cart items
//     await cart.verifyCartItem('Sauce Labs Backpack');

//     // 5: Proceed to checkout
//     await cart.proceedToCheckout();

//     // 6: Enter Checkout Info
//     await checkout.fillCheckoutInfo('Zeeaan', 'Nawaz', '44000');
//     await checkout.verifyOverviewPage();
//     await checkout.finishOrder();
//     await checkout.verifyOrderComplete();
//   });

// });


// test('Use Openweather', async ({ page }) => {

//   const apiContext = await request.newContext();
//   const weather = new openWeather(apiContext);
  
//   const data = await weather.getTemp('Islamabad', 'pk', '73703b5d8e4c038edd0685d8b81fe840')

//   // Extract and log the temperature
//   const tempKelvin = data.main.temp;
//   const tempCelsius = (tempKelvin - 273.15).toFixed(2);

//   console.log(`🌡️ Temperature in Islamabad: ${tempCelsius}°C`);

//   // Assert the location
//   expect(data.name).toBe('Islamabad');
  
// });
