import { by, element, ElementFinder } from "protractor";

export class AdditionalCovergaePageObject {
    // tslint:disable-next-line: no-empty
    public additionalCovenext: ElementFinder;
    constructor() {
    this.additionalCovenext = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    } }
