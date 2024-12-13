export default class BasePage {
  constructor(uniqueElementLocator, name) {
    this.uniqueElementLocator = uniqueElementLocator;
    this.name = name;
  }

  /**
   * Check if the form is opened, with 'pageLoadTime' timeout
   * @returns {Promise<boolean>} true if opened else false
   */
  isPageOpened() {
    cy.xpath(this.uniqueElementLocator).should("be.visible");
  }
}
