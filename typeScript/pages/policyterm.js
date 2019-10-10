"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class PolicytermPageObject {
    constructor() {
        this.policytermnext = protractor_1.element(protractor_1.by.xpath("//span[@class='g-btn-text' and text()='Next']"));
    }
}
exports.PolicytermPageObject = PolicytermPageObject;
