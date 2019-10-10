
import { Then } from "cucumber";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import { QuickQuoteObject } from "../pages/quickQuote";
const { When } = require("cucumber");

const quickquote: QuickQuoteObject = new QuickQuoteObject();
When(/^I Enter Firstname "(.*?)"$/, async (firstname) => {
    await browser.sleep(2000);
    await quickquote.firstName.sendKeys(firstname);
});

When(/^I Enter Lastname "(.*?)"$/, async (lastName) => {
    await browser.sleep(2000);
    await quickquote.lastName.sendKeys(lastName);
});

When(/^I Enter dateOfBirth "(.*?)"$/, async (dateOfBirth) => {
    await browser.sleep(2000);
    await quickquote.dateOfBirth.sendKeys(dateOfBirth);
});

When(/^I Enter PhoneNumber "(.*?)"$/, async (phoneNumber) => {
    await browser.sleep(2000);
    await quickquote.phoneNumber.sendKeys(phoneNumber);
});

When(/^I Enter Address1 "(.*?)"$/, async (Address1) => {
    await browser.sleep(2000);
    await quickquote.Address1.sendKeys(Address1);
});

When(/^I Enter Address2 "(.*?)"$/, async (Address2) => {
    await browser.sleep(2000);
    await quickquote.Address1.sendKeys(Address2);
});
When(/^I Enter City "(.*?)"$/, async (City) => {
    await browser.sleep(2000);
    await quickquote.City.sendKeys(City);
});

When(/^I Enter ZipCode "(.*?)"$/, async (zipCode) => {
    await browser.sleep(2000);
    await quickquote.zipCode.sendKeys(zipCode);
});

When(/^I Enter Zipcodeq "(.*?)"$/, async (zipcodeq) => {
    await browser.sleep(2000);
    await quickquote.zipCodeq.sendKeys(zipcodeq);
});
When(/^I Enter Primaryphone "(.*?)"$/, async (primaryphone) => {
    await browser.sleep(2000);
    await quickquote.primaryphone.sendKeys(primaryphone);
});
When(/^I Enter Emailaddress "(.*?)"$/, async (emailaddress) => {
    await browser.sleep(2000);
    await quickquote.emailaddress.sendKeys(emailaddress);
});

When(/^I Enter Dwelling Limit "(.*?)"$/, async (emailaddress) => {
    browser.executeScript("window.scrollTo(0,587)");
    await browser.sleep(2000);
    await quickquote.dwellinglimit1.sendKeys(emailaddress);
});

When(/^I Enter Year Limit "(.*?)"$/, async (emailaddress) => {
    await browser.sleep(2000);
    await quickquote.yearlimit1.sendKeys(emailaddress);
});

When(/^I Click On Complete an Application$/, async () => {
    browser.executeScript("window.scrollTo(0,10000)");
    await browser.sleep(3000);
    await quickquote.completeanApplication.click();
});
