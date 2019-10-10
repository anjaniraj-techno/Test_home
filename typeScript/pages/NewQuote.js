"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class NewQuotepage {
    constructor() {
        this.productDropDown = protractor_1.element(protractor_1.by.xpath('//input[@fieldref=\'PartyClearanceInput.PartyType\']'));
    }
}
exports.NewQuotepage = NewQuotepage;
