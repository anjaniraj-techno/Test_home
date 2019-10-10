import { by, element, ElementFinder } from "protractor";

export class PolicytermPageObject {
    // tslint:disable-next-line: no-empty
    public policytermnext: ElementFinder;
    constructor() {
    this.policytermnext = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    } }
