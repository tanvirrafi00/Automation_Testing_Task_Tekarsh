import CreateAccountPage from "../../PageObjects/CreateAccountPage.js";
import LoginPage from "../../PageObjects/LoginPage.js";

describe("TS:Checkout and contact form submission", () => {
  it("TC:001", () => {
    cy.visit("https://automationexercise.com/login");

    cy.fixture("registrationData.json").then((data) => {
      cy.log(data.name);
      LoginPage.setSignUpName(data.name);
      LoginPage.setSignUpEmail(data.email);
    });

    LoginPage.clickSignUpButton();

    cy.fixture("registrationData.json").then((data) => {
      CreateAccountPage.fillRegistrationForm(data);
    });

    CreateAccountPage.clickCreateAccountButton();
    cy.log("hello");

    cy.fixture("messageData.json").then((data) => {
      cy.log(data.accountCreatedMessage);
      CreateAccountPage.checkAccountCreationMessage(data.accountCreatedMessage);
    });

    CreateAccountPage.clickContinueButton();
  });
});
