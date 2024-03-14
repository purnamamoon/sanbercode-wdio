const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const LoginPage = require('../../pages/loginPage.js');

Given(/^I open the Kasir Aja website$/, async () => {
  await LoginPage.open();
});

When(/^I login with valid credentials$/, async () => {
  //Untuk cek udah login atau belum
  if(!(await LoginPage.getUrl()).includes('/dashboard')){
    await LoginPage.login('admin@email.com', 'adminadmin');
  }
});

Then(/^I should be on the dashboard page$/, async () => {
  await expect(browser).toHaveUrl('https://kasirdemo.belajarqa.com/dashboard');
});
