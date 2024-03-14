class LoginPage {
    get emailInput() {
        return $('(//input[@id="email"])');
    }
  
    get passwordInput() {
        return $('(//input[@id="password"])');
    }
  
    get loginButton() {
        return $('(//button[@class="chakra-button css-1n8i4of"])');
    }
  
    async open() {
        await browser.url('https://kasirdemo.belajarqa.com/');
    }
  
    async login(username, password) {
        await this.emailInput.setValue(username);
        await this.passwordInput.setValue(password);
        await this.loginButton.click();
    }

    async getUrl() {
        return await browser.getUrl()    
    }
  }
  
  module.exports = new LoginPage();