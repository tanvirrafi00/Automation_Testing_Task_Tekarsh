import BasePage from "./BasePage.js";

class LoginPage extends BasePage {
  constructor() {
    super(`//div[@class="login-form"]//h2`, "Login Page");
  }
}

export default new LoginPage();
