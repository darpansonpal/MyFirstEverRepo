const {test, expect} = require ('@playwright/test');

test ('Open, login, add 3 prods, checkout, assert & verify', async ({page}) => { 
  // 1. Opening login page, add username, password and click login
  await page.goto("https://saucedemo.com");

  // 2. Adding a verification for login page to have Swag Labs visible as the title!
  await expect(page.getByText('Swag Labs')).toBeVisible();
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.locator('[data-test="login-button"]').click();

  // 3. Assert login successful by checking products visible and prices for products, adding 3 random products to cart!
  await expect(page.getByText('Products')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();
  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  
  // 4. Verifying cart page is the cart page by checking text: Your cart as text visible on the page!
  await expect(page.getByText('Your Cart')).toBeVisible();
  await expect(page.getByText('$29.99')).toBeVisible();
  await page.locator('[data-test="checkout"]').click();
  
  // 5. Verifying Checkout: Your Information as text on checkout step one page
  await expect(page.getByText('Checkout: Your Information')).toBeVisible();
  await page.locator('[data-test="firstName"]').click();
  await page.locator('[data-test="firstName"]').fill('Lean test James');
  await page.locator('[data-test="lastName"]').click();
  await page.locator('[data-test="lastName"]').fill('Bond');
  await page.locator('[data-test="postalCode"]').click();
  await page.locator('[data-test="postalCode"]').fill('1111');
  await page.locator('[data-test="continue"]').click();

  // 6. Verifying Checkout: Overview as the last element before finishing order!
  await expect(page.getByText('Checkout: Overview')).toBeVisible();
  await page.locator('[data-test="finish"]').click();

  // This is incomplete but I'd like to write the below as 
  await page.locator('[data-test="payment-info-value"]').click();
  await page.locator('[data-test="total-label"]').click();

  // 7. Verifying Thank you for your order is what we get on successful order placement!
  await expect(page.getByText('Checkout: Complete!')).toBeVisible();
   await expect(page.getByText('Thank you for your order!')).toBeVisible();
});