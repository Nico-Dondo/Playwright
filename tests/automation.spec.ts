import { test, Browser, Page, expect } from '@playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;

    test.describe('Acciones en el  Automation Sandbox', () => {
        test('Click en Botn ID Dinamico', async ({ page }) => {
            await test.step('Dado que avego al sandbox de Free Range Testers', async () => {
                await page.goto('http://localhost:3000/sandbox-automation-testing')
            })



        })

    })
})();