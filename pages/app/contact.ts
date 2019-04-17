import { $, $$, ElementFinder, by, element, ElementArrayFinder } from "protractor";
import { Actions } from "../../support/actions";


export class ContactPage {
    private nameInput: ElementFinder;
    private emailInput: ElementFinder;
    private messageInput: ElementFinder;
    private sendBtn: ElementFinder;
    private menuItems: ElementArrayFinder;
    private expectedHeadline: string;

    constructor() {
        this.nameInput = $('#name');
        this.emailInput = $('#email');
        this.messageInput = $('#content');
        this.sendBtn = $('fieldset > button');
        this.menuItems = $$('div .nav > li');
        this.expectedHeadline = "Your message has been sent.";
    };

    async naviagetToContactPage() {
        await this.clickMenuItemAt(4);
    }

    async fillFormAndPushSubmit(name: string, email: string, msg: string) {
        await this.enterName(name);
        await this.enterEmail(email);
        await this.enterMessage(msg);
        await this.pushBtn();
    };

    async clickMenuItemAt(idx) {
        await this.menuItems.get(idx).click();
    };

    async enterName(phrase: string) {
        await Actions.sendKeys(this.nameInput, phrase);
    };

    async enterEmail(phrase: string) {
        await Actions.sendKeys(this.emailInput, phrase);
    };

    async enterMessage(phrase: string) {
        await Actions.sendKeys(this.messageInput, phrase);
    };

    async pushBtn() {
        await Actions.click(this.sendBtn);
    };

    async findHeadlineText() {
        return element(by.xpath("//h3[contains(text(),'" + this.expectedHeadline + "')]")).getText();
    };

    async expectedHeadlineText() {
        return this.expectedHeadline;
    };
}
