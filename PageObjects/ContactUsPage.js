import BasePage from "./BasePage.js";

class ContactUsPage extends BasePage {
  constructor() {
    super(`//*[text()="Contact "]`, "Contact Us Page");
    this.nameField = `//input[@data-qa="name"]`;
    this.emailField = `//input[@data-qa="email"]`;
    this.subjectField = `//input[@data-qa="subject"]`;
    this.messageField = `//textarea[@data-qa="message"]`;
    this.uploadFile = `//input[@name="upload_file"]`;
    this.submitButton = `//input[@class="btn btn-primary pull-left submit_form"]`;
    this.contactSuccessMessage = `//div[@class="status alert alert-success"]`;
  }

  fillContactUsForm(formData) {
    cy.xpath(this.nameField).type(formData.name);
    cy.xpath(this.emailField).type(formData.email);
    cy.xpath(this.subjectField).type(formData.subject);
    cy.xpath(this.messageField).type(formData.message);
  }

  uploadFile(filePath) {
    cy.xpath(this.uploadFile).attachFile(filePath);
  }

  clickSubmitButton() {
    cy.xpath(this.submitButton).click();
  }

  pressOkToProceed() {
    cy.on("window:alert", () => true);
  }

  checkContactSuccessMessage(message) {
    cy.xpath(this.contactSuccessMessage).then((el) => {
      assert.strictEqual(el.text(), message);
    });
  }
}

export default new ContactUsPage();
