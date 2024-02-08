import { test, Browser, Page, expect } from '@playwright/test';

(async () => {

    let browser: Browser;
    let page: Page;
    let textoAEscribir = 'Estoy aprendiendo Playwright'

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
                await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir); // textoAEscribir esta hecho como una variable mas arriba//
            })

        })
        test('Puedo seleccionar checkboxes', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar el checkbox Pasta', async () => {
                await page.getByLabel('Pasta 🍝').check();
                await page.getByLabel('Pasta 🍝').uncheck();
            })

        })

        test('Puedo seleccionar Radio button', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar ujn deporte del drop', async () => {
                await page.getByLabel('No').check(); // recirdar que no se puede poner uncheck, porque solamente admite uno u otro(s)
            })

        })

        test('Puedo seleccionar un item del dropdown', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar un dia de la semana', async () => {
                await page.getByLabel('Dropdown').selectOption('Fútbol'); //se utiliza el metodo selectOption y entre ('') lo que se quiera buscar siempre y cuando tenga un select en el inspeccionador
            })
        })

        test('Puedo seleccionar un dia del drop dias de la semana', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar un dia de la semana', async () => {
                await page.getByRole('button', { name: 'Día de la semana' }).click(); //Cuando no es un select, se tiene que seleccionar primero el padre y despues buscar el hijo como en este caso
                await page.getByRole('link', { name: 'Martes' }).click();
            })

        })

        test('Puedo subir archivos a Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Agrego archivos para ser subidos', async () => { // codigo a modo de ejemplo para mostrar como se haria, sandbox todavia no cuenta con esta funcion
                await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
                await page.getByLabel('Upload file').setInputFiles([]);

            })

        })

        test('Puedo hacer un Drag and Drop de elementos en Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('');
            })
            await test.step('Selecciono un día de la semana del dropdown', async () => { // codigo a modo de ejemplo para mostrar como se haria, sandbox todavia no cuenta con esta funcion
                await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));

            })

        })

    })

})();