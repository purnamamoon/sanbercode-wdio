const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const ProductPage = require('../../pages/productPage.js');
const HomePage = require('../../pages/homePage.js');

Given(/^I go to product page$/, async () => {
    await HomePage.gotoProductPage();
});

When(/^I add new product$/, async () => {
    await ProductPage.addProduct('taro', 'taro adalah cemilan', '3000', '3500', '5');
});

Then(/^I can see the product in product page$/, async () => {
    await expect(HomePage.toastAlert).toBeDisplayed()
    await expect(HomePage.toastAlert).toHaveText('item ditambahkan')
});

When(/^I delete product$/, async () => {
    await ProductPage.deleteProduct()
});
  
Then(/^Product is removed from the product page$/, async () => {
    await expect(HomePage.toastAlert).toBeDisplayed()
    await expect(HomePage.toastAlert).toHaveText('item dihapus')
});

  