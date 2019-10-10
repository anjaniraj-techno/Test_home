import { by, element, ElementFinder } from "protractor";

export class QuickQuoteObject {
    // tslint:disable-next-line: no-empty
    public firstName: ElementFinder;
    public lastName: ElementFinder;
    public phoneNumber: ElementFinder;
    public  email: ElementFinder;
    public  dwellinglimit: ElementFinder;
    public  yearbuilt: ElementFinder;
    public completeanApplication: ElementFinder;
    public dateOfBirth: ElementFinder;
    public Address1: ElementFinder;
    public Address2: ElementFinder;
    public City: ElementFinder;
    public zipCode: ElementFinder;
    public zipCodeq: ElementFinder;
    public primaryphone: ElementFinder;
    public emailaddress: ElementFinder;
    public dwellinglimit1: ElementFinder;
    public yearlimit1: ElementFinder;

    constructor() {
    this.firstName = element(by.xpath("//input[@name='string_3|']"));
    this.lastName = element(by.xpath("//input[@name='string_4|']"));
    this.completeanApplication = element(by.xpath("//span[@class='g-btn-text' and text()='Complete an Application']"));
    this.dateOfBirth = element(by.xpath("//input[@name='date_7|m/d/yyyy']"));
    this.Address1 = element(by.xpath("//input[@name='string_B|']"));
    this.Address2 = element(by.xpath("//input[@name='string_C|']"));
    this.City = element(by.xpath("//input[@name='string_E|x']"));
    this.zipCode = element(by.xpath("//input[@name='string_10|zipcode']"));
    this.zipCodeq = element(by.xpath("//input[@fieldref='AccountInput.ZipCode']"));
    this.primaryphone = element(by.xpath("//input[@fieldref='AccountInput.PrimaryPhone']"));
    this.emailaddress = element(by.xpath("//input[@fieldref='AccountInput.Email']"));
    this.dwellinglimit1 = element(by.xpath("//input[@fieldref='CoverageADwellingInput.Limit']"));
    this.yearlimit1 = element(by.xpath("//input[@fieldref='DwellingInput.YearBuilt']"));

} }
