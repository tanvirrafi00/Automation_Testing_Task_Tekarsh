import BasePage from "./BasePage.js";

class CheckoutPage extends BasePage {
  constructor() {
    super(`//*[text()="Checkout"]`, "checkout page");

    this.placeOrderButton = `//a[@class="btn btn-default check_out"]`;
  }

  clickPlaceOrderButton() {
    cy.xpath(this.placeOrderButton).click();
  }
}

export default new CheckoutPage();
