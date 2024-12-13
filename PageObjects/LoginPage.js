import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
  constructor() {
    super(`//div[@class="login-form"]//h2`, "Login Page");
    this.signUpUserNameField = `//input[@data-qa="signup-name"]`;
    this.signUpEmailField = `//input[@data-qa="signup-email"]`;
    this.signUpButton = `//button[@data-qa="signup-button"]`;
  }

  setSignUpName(name) {
    cy.xpath(this.signUpUserNameField).type(name);
  }

  setSignUpEmail(email) {
    cy.xpath(this.signUpEmailField).type(email);
  }

  clickSignUpButton() {
    cy.xpath(this.signUpButton).click();
  }
}

export default new LoginPage();
