import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegacion en www.freerangetesters.com', () => {
        test('Los Links principales redirigen correctamente', async ({ page }) => {
            await test.step('Estando yo en la web principal de www.freerangetesters.com', async () => {
                await page.goto('https://www.freerangetesters.com');
                await expect(page).toHaveTitle('Free Range Testers');
            });
            await test.step('Cuando hago click en cursos', async () => {
                page.locator('#page_header').getByRole('link', { name: 'Cursos', exact: true }).click();
                await page.waitForURL('**/cursos');
            })
            await test.step('Soy redirigido a la subpagina "cursos"', async () => {
                await expect(page).toHaveTitle('Cursos');

            })
        });
    });
})();