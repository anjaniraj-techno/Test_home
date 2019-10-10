"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const getInformationPage_1 = require("../pages/getInformationPage");
const { When } = require("cucumber");
const getinfo = new getInformationPage_1.GetInformationPageObject();
When(/^I Click On GetInfromation$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    yield getinfo.getInformation.click();
    yield protractor_1.browser.sleep(4000);
}));
When(/^I Click On Continue to Quote$/, () => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.sleep(2000);
    // await browser.switchTo().frame(1);
    // tslint:disable-next-line: max-line-length  ////iframe[@name='dctPopup_dctPopupWindowA0D4D3DAEE920CE567E81B708D645013']
    yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.xpath("//iframe[@name='dctPopup_dctPopupWindowA0D4D3DAEE920CE567E81B708D645013']")));
    yield getinfo.continuetoQuote.click();
    yield protractor_1.browser.sleep(3000);
    // browser.switchToParentFrame();
}));
