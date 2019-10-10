import { by, element, ElementFinder } from "protractor";

export class NewQuotePageObject {
    public partyTypeDropDown: ElementFinder;
    public searchTypeDropDown: ElementFinder;
    public firstNameTextBox: ElementFinder;
    public lastNameTextBox: ElementFinder;
    public locationStateDropDown: ElementFinder;
    public runClearanceButton: ElementFinder;
    public newQuoteButton: ElementFinder;
    public locationPostalCode: ElementFinder;
    public product: ElementFinder;
    public start: ElementFinder;

    public dateOfBirth: ElementFinder;

    public Address1: ElementFinder;
    public City: ElementFinder;
    public zipCode: ElementFinder;

    public  gender: ElementFinder;
    public  DateOfBirthd: ElementFinder;
    public  MaritalStatus: ElementFinder;
    public ModelYear: ElementFinder;
    public Make: ElementFinder;
    public model: ElementFinder;
    public description: ElementFinder;

    public nextca: ElementFinder;
    public nextapplicant: ElementFinder;
    public nextpolterm: ElementFinder;
    public nextdriver: ElementFinder;
    public nextdriverhistory: ElementFinder;
    public vinNumber: ElementFinder;
    public vinLookup: ElementFinder;
    public milesdriven: ElementFinder;
    public vehicleownlease: ElementFinder;
    public nextvehicle: ElementFinder;
    public nextAddinterest: ElementFinder;
    public nextUnderwriter: ElementFinder;
    public nextinsuracnehistory: ElementFinder;
    public nextclaimhistory: ElementFinder;
    public nextPricingcoverage: ElementFinder;
    public collectionMethod: ElementFinder;
    public billingkeysbillClass: ElementFinder;
    public nextpaympage: ElementFinder;
    public bindissue: ElementFinder;
    public policynumber: ElementFinder;

    constructor() {
        this.partyTypeDropDown = element(by.xpath("//input[@fieldref='PartyClearanceInput.PartyType']"));
        this.searchTypeDropDown = element(by.xpath("//input[@fieldref='PartyClearanceInput.SearchType']"));
        this.firstNameTextBox = element(by.xpath("//input[@fieldref='PartyClearanceInput.FirstName']"));
        this.lastNameTextBox = element(by.xpath("//input[@fieldref='PartyClearanceInput.PartyName']"));
        this.locationStateDropDown = element(by.xpath("//input[@fieldref='PartyClearanceInput.LocationState']"));
        this.locationPostalCode = element(by.xpath("//input[@fieldref='PartyClearanceInput.LocationZipCode']"));
        this.runClearanceButton = element(by.linkText("Run Clearance"));
        this.newQuoteButton = element(by.xpath("//span[@class='g-btn-text' and text()='New Quote']"));
        this.product = element(by.xpath("//input[@fieldref='data.VersionIDPages']"));
        this.start = element(by.xpath("//span[@class='g-btn-text' and text()='Start']"));

        this.dateOfBirth = element(by.xpath("//input[@name='date_8|m/d/yyyy']"));
       // this.phoneNumber = element(by.xpath("//input[@name='string_9|phone']"));

        this.Address1 = element(by.xpath("//input[@name='string_C|']"));
        this.City = element(by.xpath("//input[@name='string_F|x']"));
        this.zipCode = element(by.xpath("//input[@name='string_11|zipcode']"));
       // this.getInformation = element(by.xpath("//span[@class='g-btn-text' and text()='Get Information']"));

        this.gender = element(by.xpath("//input[@fieldref='DriverInput.Gender']"));
        this.MaritalStatus = element(by.xpath("//input[@fieldref='DriverInput.MaritalStatus']"));
        this.DateOfBirthd = element(by.xpath("//input[@name='date_CA|mm-dd-yyyy']"));
        this.ModelYear = element(by.xpath("//input[@fieldref='VehicleInput.Year']"));
        // this.ModelYear = element(by.xpath("//[@name='f_v6AE67C29C221468589F87E420C979A56D3_2_1-inputEl']"));
        this.Make = element(by.xpath("//input[@fieldref='VehicleInput.Make']"));
        this.model = element(by.xpath("//input[@fieldref='VehicleInput.Model']"));
        this.description = element(by.xpath("//input[@fieldref='VehicleInput.Description']"));
        // tslint:disable-next-line: max-line-length

        this.nextca = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));

        this.nextdriverhistory = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.vinNumber = element(by.xpath("//input[@fieldref='VehicleInput.VIN']"));
        this.vinLookup = element(by.xpath("'//span[@class=\'g-btn-text\' and text()=\'Lookup by VIN\']'"));
        this.milesdriven = element(by.xpath("//input[@fieldref='VehicleInput.AnnualMileage']"));
        this.vehicleownlease = element(by.xpath("//input[@fieldref='VehicleInput.FinancialStatus']"));
        this.nextvehicle = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextAddinterest = element (by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextUnderwriter  = element (by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextinsuracnehistory = element (by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextclaimhistory = element (by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.nextPricingcoverage = element (by.xpath("//span[@class='g-btn-text' and text()='Next']"));
        this.collectionMethod = element(by.xpath("//input[@fieldref='CollectionMethodSelection.CollectionMethodSelection']"));
        this.billingkeysbillClass = element(by.xpath("//input[@fieldref='BillingKeys.BillClass']"));
        this.nextpaympage = element (by.xpath("//span[@class='g-btn-text' and text()='Next']")); // scroll down req
        this.bindissue = element (by.xpath("//span[@class='g-btn-text' and text()='Bind/Issue']"));
        this.policynumber = element (by.xpath("//div[@fieldref='PolicySummary.PolicyNumber']"));
}}
