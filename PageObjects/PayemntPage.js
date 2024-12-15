import BasePage from "./BasePage.js";

class PaymentPage extends BasePage {
  constructor() {
    super(`//h2[@class="heading"]`, "Payment Page");
    this.nameOnCardField = `//input[@data-qa="name-on-card"]`;
    this.cardNumberField = `//input[@data-qa="card-number"]`;
    this.cvcField = `//input[@data-qa="cvc"]`;
    this.expiryMonthField = `//input[@data-qa="expiry-month"]`;
    this.expiryYearField = `//input[@data-qa="expiry-year"]`;
    this.payAndConfirmOrderButton = `//button[@id="submit"]`;
  }

  fillPaymentDetails(payemntDetails) {
    cy.xpath(this.nameOnCardField).type(payemntDetails.nameOnCard);
    cy.xpath(this.cardNumberField).type(payemntDetails.cardNumber);
    cy.xpath(this.cvcField).type(payemntDetails.cvc);
    cy.xpath(this.expiryMonthField).type(payemntDetails.expirationMonth);
    cy.xpath(this.expiryYearField).type(payemntDetails.expirationYear);
  }

  clickPayAndConfirmButton() {
    cy.xpath(this.payAndConfirmOrderButton).click();
  }
}

export default new PaymentPage();
