const { Given, When, Then } = require('@wdio/cucumber-framework');
const { expect, $ } = require('@wdio/globals')
const CategoryPage = require('../../pages/categoryPage.js');
const HomePage = require('../../pages/homePage.js');

Given(/^I go to category page$/, async () => {
    await HomePage.gotoCategoryPage()
});

When(/^I add new category$/, async () => {
    await CategoryPage.addCategory('makanan ringan', 'makanan ringan dari indofood');
});

Then(/^I can see the category in category page$/, async () => {
    await expect(HomePage.toastAlert).toBeDisplayed()
    await expect(HomePage.toastAlert).toHaveText('item ditambahkan')
});

When(/^I delete category$/, async () => {
    await CategoryPage.deleteCategory()
});

Then(/^Category is removed from the category page$/, async () => {
    await expect(HomePage.toastAlert).toBeDisplayed()
    await expect(HomePage.toastAlert).toHaveText('item dihapus')
});


