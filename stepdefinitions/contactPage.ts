import { Given, When, Then } from "cucumber";
import { ContactPage } from "../pages/app/contact";

const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const contactPage: ContactPage = new ContactPage();


Given(/^User entered contact page$/, async function () {
    await contactPage.naviagetToContactPage();
});

When(/^User fill ([^"]+), (.+) and (.+)$/, async function (name: string, email: string, msg: string) {
    await contactPage.fillFormAndPushSubmit(name, email, msg);
});

Then(/^User see message$/, async function () {
    expect(await contactPage.findHeadlineText()).to.equal(await contactPage.expectedHeadlineText());
});