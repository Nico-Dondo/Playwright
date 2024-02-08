import { test, Browser, Page, expect } from '@playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;

    test.describe('Acciones en el  Automation Sandbox', () => {
        test('Click en Botn ID Dinamico', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })

            await test.step('Puedo hacer click en el boton ID dinamico', async () => {
                await page.getByRole('button', { name: 'Hacé click para generar un ID' }).click();

            })


        })
        test('lleno un campo de texto en Automation Sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo ingresar un texto en el campo un aburrido texto', async () => {
                await page.getByPlaceholder('Ingresá texto').fill('Estoy aprendiendo Playwright')
            })

        })

    })

})();