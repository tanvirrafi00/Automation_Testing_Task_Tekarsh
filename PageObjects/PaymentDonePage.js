import BasePage from "./BasePage.js";

class PaymentDonePage extends BasePage {
  constructor() {
    super(`//*[text()="Order Placed!"]`, "Payment Done Page");
    this.paymentConfirmMessage = `//div[@class="col-sm-9 col-sm-offset-1"]//p`;
    this.continueButton = `//a[@data-qa="continue-button"]`;
  }

  checkPaymentConfirmMessage(message) {
    cy.xpath(this.paymentConfirmMessage).then((ele) => {
      assert.strictEqual(ele.text(), message);
    });
  }

  clickContinueButton() {
    cy.xpath(this.continueButton).click();
  }
}

export default new PaymentDonePage();
