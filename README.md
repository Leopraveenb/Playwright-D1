# PlaywrightDemo Advanced

## Features
- Page Object Model (POM) structure
- Enhanced reporting (HTML)
- Screenshots and video recording
- Example homepage test

## Structure
- `pages/`: Page Object classes
- `tests/`: Test files
- `reports/`: Test reports
- `playwright.config.js`: Advanced config

## Getting Started
1. Install dependencies:
   ```bash
   npm install -D @playwright/test
   npx playwright install
   ```
2. Run tests:
   ```bash
   npx playwright test
   ```
3. View reports:
   - Open `reports/index.html` in your browser

## Example POM Usage
See `pages/HomePage.js` and `tests/homepage.spec.js` for usage.

## Resources
- [Playwright Docs](https://playwright.dev/docs/intro)
