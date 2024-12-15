import BasePage from "./BasePage.js";

class HomePage extends BasePage {
  constructor() {
    super(`//div[@id="slider-carousel"]`, "Home Page");
    this.menCategory = `//a[@href="#Men"]`;
    this.jeans = `//a[@href="/category_products/6"]`;

    this.navigationLink = (text) => {
      return `//*[text()=" ${text}"]`;
    };
  }

  clickNavigationLink(navigationText) {
    cy.xpath(this.navigationLink(navigationText)).click();
  }

  clickMenCategory() {
    cy.xpath(this.menCategory).click();
  }

  clickJeans() {
    cy.xpath(this.jeans).click();
  }
}

export default new HomePage();
