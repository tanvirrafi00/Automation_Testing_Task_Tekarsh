import CategoryProductPage from "../../PageObjects/categoryProductPage.js";
import CheckOutPage from "../../PageObjects/CheckOutPage.js";
import ContactUsPage from "../../PageObjects/ContactUsPage.js";
import CreateAccountPage from "../../PageObjects/CreateAccountPage.js";
import HomePage from "../../PageObjects/HomePage.js";
import LoginPage from "../../PageObjects/LoginPage.js";
import PayemntPage from "../../PageObjects/PayemntPage.js";
import PaymentDonePage from "../../PageObjects/PaymentDonePage.js";
import ProductDetailsPage from "../../PageObjects/ProductDetailsPage.js";
import ViewCartPage from "../../PageObjects/ViewCartPage.js";
import ENDPOINTS from "../constant/endpoints.js";

describe("TS:UI And API Testing", () => {
  let registrationData, messageData, paymentDetails, navigationTextData, contactUsData;
  let brandListData;
  const filePath = "upload/demo.txt";

  before(() => {
    cy.fixture("registrationData.json").then((data) => {
      registrationData = data;
    });

    cy.fixture("messageData.json").then((data) => {
      messageData = data;
    });

    cy.fixture("paymentDetails.json").then((data) => {
      paymentDetails = data;
    });

    cy.fixture("navigationtext.json").then((data) => {
      navigationTextData = data;
    });

    cy.fixture("contactUsData.json").then((data) => {
      contactUsData = data;
    });

    cy.fixture("brandListData.json").then((data) => {
      brandListData = data;
    });
  });

  it("TC:UI testing", () => {
    cy.visit("https://automationexercise.com/login");

    //Complete the sign-up process with:
    LoginPage.setSignUpName(registrationData.name);
    LoginPage.setSignUpEmail(registrationData.email);
    LoginPage.clickSignUpButton();
    CreateAccountPage.fillRegistrationForm(registrationData);
    CreateAccountPage.clickCreateAccountButton();
    CreateAccountPage.checkAccountCreationMessage(messageData.accountCreatedMessage);
    CreateAccountPage.clickContinueButton();

    //Select Product Category
    HomePage.isPageOpened();
    HomePage.clickMenCategory();
    HomePage.clickJeans();

    //View and Update Product:
    CategoryProductPage.isPageOpened();
    CategoryProductPage.clickViewProduct();
    ProductDetailsPage.isPageOpened();
    ProductDetailsPage.setProductQuantity(2);
    ProductDetailsPage.clickAddtoCart();
    ProductDetailsPage.IsAddtoCartModalVisible();

    //Proceed to Checkout:
    ProductDetailsPage.clickViewCart();
    ViewCartPage.isPageOpened();
    ViewCartPage.clickProceedToCheckOut();
    CheckOutPage.isPageOpened();
    CheckOutPage.clickPlaceOrderButton();
    PayemntPage.isPageOpened();
    PayemntPage.fillPaymentDetails(paymentDetails);
    PayemntPage.clickPayAndConfirmButton();
    PaymentDonePage.isPageOpened();
    PaymentDonePage.checkPaymentConfirmMessage(messageData.orderPlace);
    PaymentDonePage.clickContinueButton();

    // Contact Us Form Submission:
    HomePage.clickNavigationLink(navigationTextData.contactUs);
    ContactUsPage.isPageOpened();
    ContactUsPage.fillContactUsForm(contactUsData);
    ContactUsPage.uploadFile(filePath);
    ContactUsPage.isFileUploaded(filePath);
    ContactUsPage.clickSubmitButton();
    ContactUsPage.pressOkToProceed();
    ContactUsPage.checkContactSuccessMessage(messageData.contactSuccessMessage);
  });

  it("TC-001: Validate Brand List", () => {
    cy.request(ENDPOINTS.brandList).then((response) => {
      expect(response.status).to.eq(200);
      const responseBody = typeof response.body === "string" ? JSON.parse(response.body) : response.body;
      const brandsList = responseBody.brands.map((brand) => brand.brand);
      expect(brandsList).to.include.members(brandListData.inludedBrandList);
      expect(brandsList).to.not.include.members(brandListData.excludedBrandList);
    });
  });

  it("TC-002:Verify User Login", () => {
    cy.request({
      method: "POST",
      url: ENDPOINTS.verrifyLogin,
      form: true,
      body: {
        email: registrationData.email,
        password: registrationData.password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      let responseBody = JSON.parse(response.body);
      expect(responseBody.message).to.equal("User exists!");
    });
  });
});
