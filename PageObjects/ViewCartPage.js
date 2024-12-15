import BasePage from "./BasePage.js";

class ViewCartPage extends BasePage {
  constructor() {
    super(`//*[text()="Shopping Cart"]`, "View Cart Page");

    this.proceedToCheckOut = `//a[@class="btn btn-default check_out"]`;
  }

  clickProceedToCheckOut() {
    cy.xpath(this.proceedToCheckOut).click();
  }
}

export default new ViewCartPage();
