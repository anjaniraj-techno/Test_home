"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class DwellingInfoPageObject {
    constructor() {
        this.dwellinginfo = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    }
}
exports.DwellingInfoPageObject = DwellingInfoPageObject;
