import { by, element, ElementFinder } from "protractor";

export class HeaderPageObject {
    public newQuoteLink: ElementFinder;

    constructor() {
    this.newQuoteLink = element(by.id("id_New"));
    }
}
