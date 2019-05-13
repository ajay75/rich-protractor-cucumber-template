import { Given, When, Then } from "cucumber";
import { ContactPage } from "../pages/app/contact";


const chai = require("chai").use(require("chai-as-promised"));
const expect = chai.expect;
const contactPage: ContactPage = new ContactPage();


Given(/^User entered contact page$/, async function () {
    await contactPage.naviagetToContactPage();
});

When(/^User fills ([^"]+), (.+) and (.+)$/, async function (name: string, email: string, msg: string) {
    await contactPage.fillFormAndPushSubmit(name, email, msg);
});

Then(/^The succesfull message is displayed.$/, async function () {
    const EXPECTED_RESULT = "Your message has been sent.";
    const ACTUAL_RESULT = await contactPage.findHeadlineText();
    expect(ACTUAL_RESULT).to.equal(EXPECTED_RESULT);
});