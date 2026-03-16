// Basic Playwright config for beginners
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    ignoreHTTPSErrors: true,
    screenshot: 'on', // Take screenshot on failure
    video: 'on',      // Record video for each test
    trace: 'on',      // Collect trace for each test
  },
  reporter: [['html', { outputFolder: 'reports', open: 'never' }], ['list']],
});
