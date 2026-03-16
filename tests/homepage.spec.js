const { test, expect } = require('@playwright/test');
const { HomePage } = require('../pages/HomePage');

test('homepage search', async ({ page }) => {
  const home = new HomePage(page);
  await home.goto();
  await home.search('test');
  await expect(page).toHaveTitle(/Playwright/);
});
