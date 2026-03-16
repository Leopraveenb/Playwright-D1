class HomePage {
  constructor(page) {
    this.page = page;
    this.searchBox = 'input[placeholder="Search"]';
    this.searchButton = 'button[type="submit"]';
  }

  async goto() {
    await this.page.goto('https://playwright.dev');
  }

  async search(text) {
    await this.page.fill(this.searchBox, text);
    await this.page.click(this.searchButton);
  }
}

module.exports = { HomePage };
