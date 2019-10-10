"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class quotepagee {
    constructor() {
        //f_pD345277B90F047FD91CC38335D9692ED3D_1_1
        this.productDropDown = protractor_1.element(protractor_1.by.xpath('//input[@fieldref=\'PartyClearanceInput.ProductType\']'));
    }
}
exports.quotepagee = quotepagee;
