import { Then } from "cucumber";
import { browser, by, element, ElementFinder, protractor } from "protractor";
import { NewQuotePageObject } from "../pages/newQuotePage";
const { When } = require("cucumber");

const newQuote: NewQuotePageObject = new NewQuotePageObject();

When(/^I Select PartyType "(.*?)"$/, async (partyType) => {
    await browser.sleep(2000);
    await newQuote.partyTypeDropDown.sendKeys(partyType);
});

When(/^I Select SearchType "(.*?)"$/, async (searchType) => {
    await browser.sleep(2000);
    await newQuote.searchTypeDropDown.click();
    await browser.sleep(2000);
    const searchTypeDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'" + searchType + "\']";
    const searchTypeDropDownOptions  = element(by.xpath(searchTypeDropDownOptionsXpath));
    await searchTypeDropDownOptions.click();
});

When(/^I Enter First Name "(.*?)"$/, async (firstName) => {
    await browser.sleep(2000);
    await newQuote.firstNameTextBox.sendKeys(firstName);
});

When(/^I Enter Last Name "(.*?)"$/, async (lastName) => {
    await browser.sleep(2000);
    await newQuote.lastNameTextBox.sendKeys(lastName);
});

When(/^I Select Location State "(.*?)"$/, async (state) => {
    await browser.sleep(2000);
    await newQuote.locationStateDropDown.click();
    await browser.sleep(2000);
    const locationStateDropDownOptionsXpath = "//li[@role=\'option\' and text()=\'" + state + "\']";
    const locationStateDropDownOptions  = element(by.xpath(locationStateDropDownOptionsXpath));
    await locationStateDropDownOptions.click();
});

When(/^I Select Location Zipcode "(.*?)"$/, async (zipcode) => {
    await browser.sleep(2000);
    await newQuote.locationPostalCode.sendKeys(zipcode);
});

When(/^I Click On Run Clearance Button$/, async () => {
    await browser.sleep(5000);
    // tslint:disable-next-line: quotemark
    browser.executeScript('arguments[0].scrollIntoView()', newQuote.runClearanceButton.getWebElement());
    await newQuote.runClearanceButton.click();
});

When(/^I Click On New Quote Button$/, async () => {
    await browser.sleep(3000);
    await newQuote.newQuoteButton.click();
});

When(/^I Select Product "(.*?)"$/, async (product) => {
    await browser.sleep(3000);
    await newQuote.product.click();
    await browser.sleep(2000);
    const productOptionsXpath = "//li[@role=\'option\' and text()=\'" + product + "\']";
    const productOptionsXpathOptions  = element(by.xpath(productOptionsXpath));
    await productOptionsXpathOptions.click();
});

When(/^I Click On Start$/, async () => {
    await browser.sleep(3000);
    await newQuote.start.click();
    await browser.sleep(2000);
});

/*
// I Click On Continue to Quote

When(/^I Click On Continue to Quote$/, async () => {
    await browser.sleep(2000);
    await newQuote.continuetoQuote.click();
    await browser.sleep(2000);

});

When(/^I Select Gender "(.*?)"$/, async (gender) => {
    await browser.sleep(3000);
    await newQuote.gender.click();
    await browser.sleep(2000);
    const genderXpath = "//li[@role=\'option\' and text()=\'" + gender + "\']";
    const genderXpathOptions  = element(by.xpath(genderXpath));
    await browser.sleep(2000);
    await genderXpathOptions.click();
});

When(/^I Enter DateOfBirthd "(.*?)"$/, async (dateOfBirthd) => {
    await browser.sleep(2000);
    await newQuote.DateOfBirthd.sendKeys(dateOfBirthd);
});

When(/^I Select MaritalStatus "(.*?)"$/, async (maritalstatus) => {
    await browser.sleep(3000);
    await newQuote.MaritalStatus.click();
    await browser.sleep(2000);
    const MaritalXpath = "//li[@role=\'option\' and text()=\'" + maritalstatus + "\']";
    const MaritalXpathOptions  = element(by.xpath(MaritalXpath));
    await browser.sleep(2000);
    await MaritalXpathOptions.click();

});
When(/^I Select ModelYear "(.*?)"$/, async (modelyear) => {
    await browser.sleep(1000);
   // browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    // browser.executeScript("arguments[0].scrollIntoView()", newQuote.ModelYear.getWebElement());
    // browser.executeScript("window.scrollTo(94,188)");
    browser.executeScript("window.scrollTo(0,597)");
    await browser.sleep(2000);
    await newQuote.ModelYear.click();
    await browser.sleep(3000);
    const ModelyearXpath = "//li[@role='option' and text()='" + modelyear + "']";
    const ModelyearXpathOptions  = element(by.xpath(ModelyearXpath));
    await browser.sleep(2000);
    await ModelyearXpathOptions.click();
   // await newQuote.ModelYear.sendKeys(modelyear);
});
When(/^I Select Make "(.*?)"$/, async (make) => {
    await browser.sleep(3000);
    await newQuote.Make.click();
    await browser.sleep(2000);
    const MakeXpath = "//li[@role=\'option\' and text()=\'" + make + "\']";
    const MakeXpathOptions  = element(by.xpath(MakeXpath));
    await browser.sleep(2000);
    await MakeXpathOptions.click();
});
When(/^I Select Model "(.*?)"$/, async (model) => {
    await browser.sleep(3000);
    await newQuote.model.click();
    await browser.sleep(2000);
    const ModelXpath = "//li[@role=\'option\' and text()=\'" + model + "\']";
    const ModelXpathOptions  = element(by.xpath(ModelXpath));
    await browser.sleep(2000);
    await ModelXpathOptions.click();
});
When(/^I Select Description "(.*?)"$/, async (description) => {
    await browser.sleep(3000);
    await newQuote.description.click();
    await browser.sleep(5000);
    const descriptionXpath = "//li[@role=\'option\' and text()=\'" + description + "\']";
    const descriptionOptions  = element(by.xpath(descriptionXpath));
    await browser.sleep(2000);
    await descriptionOptions.click();
});

When(/^I Click On CompleteanApplication$/, async () => {
    await browser.sleep(6000);
   // browser.actions().sendKeys(protractor.Key.PAGE_DOWN).perform();
    browser.executeScript("window.scrollTo(0,10000)");
    // browser.executeScript("arguments[0].scrollIntoView()", newQuote.completeanApplication.getWebElement());
    await browser.sleep(2000);
    await newQuote.completeanApplication.click();
    await browser.sleep(4000);
});

When(/^I Click On Next$/, async () => {
    await browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextca.click();
    await browser.sleep(3000);
});

When(/^I Click On Nextapplicant$/, async () => {
    await browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextapplicant.click();
    await browser.sleep(3000);
});
When(/^I Click On Nextpolterm$/, async () => {
    await browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextpolterm.click();
    await browser.sleep(3000);
});
When(/^I Click On Nextdriver$/, async () => {
    await browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextdriver.click();
    await browser.sleep(4000);
});

When(/^I Enter vinNumber "(.*?)"$/, async (vinnumber) => {
    await browser.sleep(3000);
    // scroll up required ;
    await newQuote.vinNumber.sendKeys(vinnumber);
    await browser.sleep(2000);
});
/*When(/^I Click On Lookupvin$/, async () => {
    await newQuote.vinLookup.click();
    await browser.sleep(4000);
    browser.actions().sendKeys(protractor.Key.TAB).perform();
    await browser.sleep(1000);
});  */   /*
When(/^I Enter milesdriven "(.*?)"$/, async (miles) => {
    browser.executeScript("window.scrollTo(0,10000)");
    await browser.sleep(2000);
    await newQuote.milesdriven.sendKeys(miles);
});
When(/^I Select vehicleownlease "(.*?)"$/, async (veholease) => {
    await browser.sleep(2000);
    // browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.vehicleownlease.click();
    await browser.sleep(3000);
    const veholeaseXpath = "//li[@role=\'option\' and text()=\'" + veholease + "\']";
    const veholeaseXpathOptions  = element(by.xpath(veholeaseXpath));
    await browser.sleep(2000);
    await veholeaseXpathOptions.click();
});
When(/^I Click On Nextvehicle$/, async () => {
    await browser.sleep(3000);
   // browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextvehicle.click();
    await browser.sleep(3000);
});
When(/^I Click On Nextdriverhistory$/, async () => {
    await browser.sleep(3000);
   // browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextdriverhistory.click();
    await browser.sleep(4000);
});
When(/^I Click On NextAddinterest$/, async () => {
    browser.executeScript("window.scrollTo(0,10000)");
    await browser.sleep(2000);
    await newQuote.nextAddinterest.click();
    await browser.sleep(3000);
    });
When(/^I Click On NextUnderwriter$/, async () => {
       // await browser.sleep(3000);
        browser.executeScript("window.scrollTo(0,10000)");
        await newQuote.nextUnderwriter.click();
        await browser.sleep(3000);
        });
When(/^I Click On Nextinsuracnehistory$/, async () => {
           // await browser.sleep(3000);
            browser.executeScript("window.scrollTo(0,10000)");
            await newQuote.nextinsuracnehistory.click();
            await browser.sleep(3000);
            });
When(/^I Click On Nextclaimhistory$/, async () => {
               // await browser.sleep(3000);
                browser.executeScript("window.scrollTo(0,10000)");
                await newQuote.nextclaimhistory.click();
                await browser.sleep(3000);
                });
When(/^I Click On NextPricingcoverage$/, async () => {
   // await browser.sleep(3000);
    browser.executeScript("window.scrollTo(0,10000)");
    await newQuote.nextPricingcoverage.click();
    await browser.sleep(2000);
    });
When(/^I Select CollectionMethod "(.*?)"$/, async (collectionmethod) => {
       // await browser.sleep(2000);
        // browser.executeScript("window.scrollTo(1000,0)");
      //  browser.executeScript("arguments[0].scrollIntoView()", newQuote.collectionMethod.getWebElement());
        await newQuote.collectionMethod.click();
      //  await browser.sleep(1000);
        const collectionmethodXpath = "//li[@role=\'option\' and text()=\'" + collectionmethod + "\']";
        const collectionmethodOptions  = element(by.xpath(collectionmethodXpath));
        // await browser.sleep(2000);
        await collectionmethodOptions.click();
    });
When(/^I Select BillingKeysBillClass "(.*?)"$/, async (billingclass) => {
        await browser.sleep(2000);
       // browser.executeScript("window.scrollTo(0,0)");
        await newQuote.billingkeysbillClass.click();
        await browser.sleep(5000);
        const billingclassXpath = "//li[@role=\'option\' and text()=\'" + billingclass + "\']";
        const billingclassXpathOptions  = element(by.xpath(billingclassXpath));
        await browser.sleep(2000);
        await billingclassXpathOptions.click();
        await browser.sleep(3000);
    });
When(/^I Click On Bindissue$/, async () => {
           // await browser.sleep(3000);
            browser.executeScript("window.scrollTo(0,10000)");
            await browser.sleep(3000);
            await newQuote.bindissue.click();
            await browser.sleep(5000);
            });

When(/^I should retrive Policy number$/, async () => {
    browser.executeScript("window.scrollTo(0,0)");
    await browser.sleep(3000);
    const policydetail1 = await newQuote.policynumber.getText();
    console.log(policydetail1);
    await browser.takeScreenshot();
    await browser.sleep(2000);
  //  var policydetail = "//*[@id='policyDetailSection']/table/tbody/tr[1]/td[4]";

}); */
