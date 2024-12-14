// import { assert } from "chai";
import BasePage from "./BasePage.js";

class CreateAccountPage extends BasePage {
  constructor() {
    super(`//*[text()="Enter Account Information"]`, "Create Account Page");
    this.mrTitle = `//div[@id="uniform-id_gender1"]`;
    this.mrsTitle = `//div[@id="uniform-id_gender2"]`;
    this.passwordField = `//input[@id="password"]`;
    this.birthDay = `//select[@id="days"]`;
    this.birthMonth = `//select[@id="months"]`;
    this.birthYear = `//select[@id="years"]`;
    this.newsLetterCheckBox = `//input[@id="newsletter"]`;
    this.specialOfferCheckBox = `//input[@id="optin"]`;
    this.firstNameField = `//input[@id="first_name"]`;
    this.lastNameField = `//input[@id="last_name"]`;
    this.companyField = `//input[@id="company"]`;
    this.address1Field = `//input[@id="address1"]`;
    this.address2Field = `//input[@id="address2"]`;
    this.country = `//select[@id="country"]`;
    this.stateField = `//input[@id="state"]`;
    this.cityField = `//input[@id="city"]`;
    this.zipcodeField = `//input[@id="zipcode"]`;
    this.phoneNumberField = `//input[@id="mobile_number"]`;
    this.createAccountButton = `//button[@data-qa="create-account"]`;
    this.accountCreationMessage = `//h2[@class="title text-center"]`;
    this.continueButton = `//a[@data-qa="continue-button"]`;
  }

  fillRegistrationForm(data) {
    cy.xpath(this.mrTitle).click();
    cy.xpath(this.passwordField).type(data.password);
    cy.xpath(this.birthDay).select(data.birthDay);
    cy.xpath(this.birthMonth).select(data.birthMonth);
    cy.xpath(this.birthYear).select(data.birthYear);
    cy.xpath(this.newsLetterCheckBox).check();
    cy.xpath(this.specialOfferCheckBox).check();
    cy.xpath(this.firstNameField).type(data.firstName);
    cy.xpath(this.lastNameField).type(data.lastName);
    cy.xpath(this.companyField).type(data.companyName);
    cy.xpath(this.address1Field).type(data.addressLine1);
    cy.xpath(this.address2Field).type(data.addressLine2);
    cy.xpath(this.country).select(data.country);
    cy.xpath(this.stateField).type(data.state);
    cy.xpath(this.cityField).type(data.city);
    cy.xpath(this.zipcodeField).type(data.zipCode);
    cy.xpath(this.phoneNumberField).type(data.mobileNumber);
  }

  clickCreateAccountButton() {
    cy.xpath(this.createAccountButton).click();
  }

  checkAccountCreationMessage(message) {
    cy.log(message);
    cy.xpath(this.accountCreationMessage).then((el) => {
      assert.strictEqual(el.text(), message);
    });
  }

  clickContinueButton() {
    cy.xpath(this.continueButton).click();
  }
}

export default new CreateAccountPage();
