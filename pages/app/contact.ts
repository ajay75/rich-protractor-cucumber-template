import { $, $$, ElementFinder, by, element, ElementArrayFinder } from "protractor";
import { Actions } from "../../support/actions";
import { CustomWait } from "../../support/wait";
import { testConfig } from "../../config/test-config";


export class ContactPage {
    private MEDIUM_TIMEOUT: number = 10000;
    private messageFromContactPage: string = testConfig.messageFromContactPage;
    private nameInput: ElementFinder;
    private emailInput: ElementFinder;
    private messageInput: ElementFinder;
    private sendBtn: ElementFinder;
    private menuItems: ElementArrayFinder;
    private expectedHeadline: ElementFinder;

    constructor() {
        this.nameInput = $('#name');
        this.emailInput = $('#email');
        this.messageInput = $('#content');
        this.sendBtn = $('fieldset > button');
        this.menuItems = $$('div .nav > li');
        this.expectedHeadline = $('.message h3');
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
        await Actions.click(this.menuItems.get(idx));
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
        await CustomWait.waitForTextInElement(this.expectedHeadline, this.messageFromContactPage, this.MEDIUM_TIMEOUT)
        return this.expectedHeadline.getText();
    };


}
