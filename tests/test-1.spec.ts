import { test, Browser, Page } from '@playwright/test';

(async () => {
    let browser: Browser;
    let page: Page;

    test.describe('Navegacion en www.freerangetesters.com', () => {
        test('Los Links principales redirigen correctamente', async ({ page }) => {
            await test.step('Estando yo en la web principal de www.freerangetesters.com', async () => {
                await page.goto('https://www.freerangetesters.com');
            });
        });
    });
})();
