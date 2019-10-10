import { browser, by, element, protractor } from "protractor";
import { GetInformationPageObject } from "../pages/getInformationPage";
const { When} = require("cucumber");

const getinfo: GetInformationPageObject = new GetInformationPageObject();

When(/^I Click On GetInfromation$/, async () => {
    await browser.sleep(2000);
    await getinfo.getInformation.click();
    await browser.sleep(4000);
});

When(/^I Click On Continue to Quote$/, async () => {
    await browser.sleep(2000);
    await browser.switchTo().frame(0);
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: max-line-length  ////iframe[@name='dctPopup_dctPopupWindowA0D4D3DAEE920CE567E81B708D645013']
   // await browser.switchTo().frame(element(by.xpath("//iframe[@name='dctPopup_dctPopupWindowA0D4D3DAEE920CE567E81B708D645013']")));
    await getinfo.continuetoQuote.click();
    await browser.sleep(3000);
   // browser.switchToParentFrame();
    });
