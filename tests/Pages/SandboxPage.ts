import { type Locator, type Page } from '@playwright/test'


export class SandBoxPage {
    readonly page: Page;
    readonly pastaCheckBox: Locator


    constructor(page: Page) {
        this.page = page;
        this.pastaCheckBox = page.getByLabel('Pasta 🍝') // solamente se cambia el locator en caso que se cambie algo de la pagina
    }
    async checkPasta(){
        await this.pastaCheckBox.check()
    }
}
