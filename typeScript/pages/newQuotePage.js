"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class NewQuotePageObject {
    constructor() {
        this.partyTypeDropDown = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.PartyType']"));
        this.searchTypeDropDown = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.SearchType']"));
        this.firstNameTextBox = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.FirstName']"));
        this.lastNameTextBox = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.PartyName']"));
        this.locationStateDropDown = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.LocationState']"));
        this.locationPostalCode = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='PartyClearanceInput.LocationZipCode']"));
        this.runClearanceButton = protractor_1.element(protractor_1.by.linkText("Run Clearance"));
        this.newQuoteButton = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='New Quote']"));
        this.product = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='data.VersionIDPages']"));
        this.start = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Start']"));
        this.dateOfBirth = protractor_1.element(protractor_1.by.xpath("//input[@name='date_8|m/d/yyyy']"));
        // this.phoneNumber = element(by.xpath("//input[@name='string_9|phone']"));
        this.Address1 = protractor_1.element(protractor_1.by.xpath("//input[@name='string_C|']"));
        this.City = protractor_1.element(protractor_1.by.xpath("//input[@name='string_F|x']"));
        this.zipCode = protractor_1.element(protractor_1.by.xpath("//input[@name='string_11|zipcode']"));
        // this.getInformation = element(by.xpath("//span[@class='g-btn-text' and text()='Get Information']"));
        this.gender = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='DriverInput.Gender']"));
        this.MaritalStatus = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='DriverInput.MaritalStatus']"));
        this.DateOfBirthd = protractor_1.element(protractor_1.by.xpath("//input[@name='date_CA|mm-dd-yyyy']"));
        this.ModelYear = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.Year']"));
        // this.ModelYear = element(by.xpath("//[@name='f_v6AE67C29C221468589F87E420C979A56D3_2_1-inputEl']"));
        this.Make = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.Make']"));
        this.model = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.Model']"));
        this.description = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.Description']"));
        // tslint:disable-next-line: max-line-length
        this.nextca = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextdriverhistory = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.vinNumber = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.VIN']"));
        this.vinLookup = protractor_1.element(protractor_1.by.xpath("'//span[@class=\'g-btn-text\' and text()=\'Lookup by VIN\']'"));
        this.milesdriven = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.AnnualMileage']"));
        this.vehicleownlease = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='VehicleInput.FinancialStatus']"));
        this.nextvehicle = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextAddinterest = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextUnderwriter = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextinsuracnehistory = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextclaimhistory = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextPricingcoverage = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.collectionMethod = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='CollectionMethodSelection.CollectionMethodSelection']"));
        this.billingkeysbillClass = protractor_1.element(protractor_1.by.xpath("//input[@fieldref='BillingKeys.BillClass']"));
        this.nextpaympage = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']")); // scroll down req
        this.bindissue = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Bind/Issue']"));
        this.policynumber = protractor_1.element(protractor_1.by.xpath("//div[@fieldref='PolicySummary.PolicyNumber']"));
    }
}
exports.NewQuotePageObject = NewQuotePageObject;
