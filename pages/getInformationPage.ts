import { by, element, ElementFinder } from "protractor";
export class GetInformationPageObject {
    // tslint:disable-next-line: no-empty
    public getInformation: ElementFinder;
    public continuetoQuote: ElementFinder;
    public framecontinue: ElementFinder;
    constructor() {
    this.getInformation = element(by.xpath("//span[@class='g-btn-text' and text()='Get Information']"));
    this.framecontinue = element(by.id("dctPopup_dctPopupWindowDEF2E933F88841DD37815B9E22F4B91B"));
    this.continuetoQuote = element(by.xpath("//span[@class='g-btn-text' and text()='Continue to Quote']"));
    } }
