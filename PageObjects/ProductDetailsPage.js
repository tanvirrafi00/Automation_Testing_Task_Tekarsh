import BasePage from "./BasePage.js";

class ProductDetailsPage extends BasePage {
  constructor() {
    super(`//textarea[@id="review"]`, "product details Page");
    this.productQuantity = `//input[@id="quantity"]`;
    this.addToCartButton = `//button[@class="btn btn-default cart"]`;
    this.addToCartModal = `//div[@class="modal-content"]`;
    this.viewCart = `//a[@href="/view_cart"]//u`;
  }

  setProductQuantity(count) {
    cy.xpath(this.productQuantity).clear().type(count);
  }

  clickAddtoCart() {
    cy.xpath(this.addToCartButton).click();
  }

  IsAddtoCartModalVisible() {
    cy.xpath(this.addToCartModal).should("be.visible");
  }

  clickViewCart() {
    cy.xpath(this.viewCart).click();
  }
}

export default new ProductDetailsPage();
