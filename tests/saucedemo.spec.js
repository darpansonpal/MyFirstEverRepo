const {test, expect} = require ('@playwright/test');

test ('open Saucedemologin page', async ({page}) => { 
    await page.goto("https://saucedemo.com");
    await page.locator('[data-test="username"]').click();
  await page.locator('[data-test="username"]').fill('standard_user');
  await page.locator('[data-test="password"]').click();
  await page.locator('[data-test="password"]').fill('secret_sauce');
  await page.pause(2000);
  await page.locator('[data-test="login-button"]').click();
  await page.pause(2000);

  await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
  await page.locator('[data-test="add-to-cart-sauce-labs-onesie"]').click();
  await page.locator('[data-test="remove-sauce-labs-onesie"]').click();
  await page.locator('[data-test="shopping-cart-link"]').click();
  await page.pause(2000);
  await page.locator('[data-test="checkout"]').click();
  await page.pause(4000);
});