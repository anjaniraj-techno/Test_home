"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const quickQuote_1 = require("../pages/quickQuote");
const { When } = require("cucumber");
const quickquote = new quickQuote_1.QuickQuoteObject();
When(/^I Enter Firstname "(.*?)"$/, (firstname) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.firstName.sendKeys(firstname);
}));
When(/^I Enter Lastname "(.*?)"$/, (lastName) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.lastName.sendKeys(lastName);
}));
When(/^I Enter dateOfBirth "(.*?)"$/, (dateOfBirth) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.dateOfBirth.sendKeys(dateOfBirth);
}));
When(/^I Enter PhoneNumber "(.*?)"$/, (phoneNumber) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.phoneNumber.sendKeys(phoneNumber);
}));
When(/^I Enter Address1 "(.*?)"$/, (Address1) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.Address1.sendKeys(Address1);
}));
When(/^I Enter Address2 "(.*?)"$/, (Address2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.Address1.sendKeys(Address2);
}));
When(/^I Enter City "(.*?)"$/, (City) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.City.sendKeys(City);
}));
When(/^I Enter ZipCode "(.*?)"$/, (zipCode) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.zipCode.sendKeys(zipCode);
}));
When(/^I Enter Zipcodeq "(.*?)"$/, (zipcodeq) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.zipCodeq.sendKeys(zipcodeq);
}));
When(/^I Enter Primaryphone "(.*?)"$/, (primaryphone) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.primaryphone.sendKeys(primaryphone);
}));
When(/^I Enter Emailaddress "(.*?)"$/, (emailaddress) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.emailaddress.sendKeys(emailaddress);
}));
When(/^I Enter Dwelling Limit "(.*?)"$/, (emailaddress) => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript("window.scrollTo(0,587)");
    yield protractor_1.browser.sleep(2000);
    yield quickquote.dwellinglimit1.sendKeys(emailaddress);
}));
When(/^I Enter Year Limit "(.*?)"$/, (emailaddress) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield quickquote.yearlimit1.sendKeys(emailaddress);
}));
When(/^I Click On Complete an Application$/, () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.executeScript("window.scrollTo(0,10000)");
    yield protractor_1.browser.sleep(3000);
    yield quickquote.completeanApplication.click();
}));
