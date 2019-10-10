import { by, element, ElementFinder } from "protractor";

export class InsurancehistoryPageObject {
    // tslint:disable-next-line: no-empty
    public insuracnehnext: ElementFinder;
    constructor() {
    this.insuracnehnext = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    } }
