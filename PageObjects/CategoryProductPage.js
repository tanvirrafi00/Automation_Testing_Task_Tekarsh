import BasePage from "./BasePage.js";
class CategoryProductPage extends BasePage {
  constructor() {
    super(`//div[@class="breadcrumbs"]`, "Category Product page");
    // this.viewFirstProduct = `//a[@href="/product_details/33"]`;
  }

  clickViewProduct() {
    cy.xpath(`//a[@href="/product_details/33"]`).click();
  }
}

export default new CategoryProductPage();
