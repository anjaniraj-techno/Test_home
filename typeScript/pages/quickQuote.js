"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class QuickQuoteObject {
    constructor() {
        this.firstName = protractor_1.element(protractor_1.by.xpath("//input[@name='string_3|']"));
        this.lastName = protractor_1.element(protractor_1.by.xpath("//input[@name='string_4|']"));
        this.completeanApplication = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Complete an Application']"));
        this.dateOfBirth = protractor_1.element(protractor_1.by.xpath("//input[@name='date_7|m/d/yyyy']"));
        this.Address1 = protractor_1.element(protractor_1.by.xpath("//input[@name='string_B|']"));
        this.Address2 = protractor_1.element(protractor_1.by.xpath("//input[@name='string_C|']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//input[@name='string_E|x']"));
        this.zipCode = protractor_1.element(protractor_1.by.xpath("//input[@name='string_10|zipcode']"));
        this.zipCodeq = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='AccountInput.ZipCode']"));
        this.primaryphone = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='AccountInput.PrimaryPhone']"));
        this.emailaddress = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='AccountInput.Email']"));
        this.dwellinglimit1 = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='CoverageADwellingInput.Limit']"));
        this.yearlimit1 = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='DwellingInput.YearBuilt']"));
    }
}
exports.QuickQuoteObject = QuickQuoteObject;
