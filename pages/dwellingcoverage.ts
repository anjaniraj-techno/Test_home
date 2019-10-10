import { by, element, ElementFinder } from "protractor";

export class DwellingCoveragePageObject {
    // tslint:disable-next-line: no-empty
    public dwellingcoverage: ElementFinder;
    constructor() {
    this.dwellingcoverage = element(by.xpath("//span[@class='g-btn-text' and text()='Next']"));

} }
