import { test, Browser, Page, expect } from '@playwright/test';

(async () => {
  let browser: Browser;
  let page: Page;

  test.describe('Navegacion en www.freerangetesters.com', () => {

    const secciones = [
      { nombre: 'Cursos', url: '/cursos', tituloEsperado: 'Cursos' },
      { nombre: 'Udemy', url: '/udemy', tituloEsperado: 'Udemy' },
      { nombre: 'Recursos', url: '/recursos', tituloEsperado: 'Recursos' },
    ];

    for (const seccion of secciones) {
      test(`Validar redireccion a la seccion "${seccion.nombre}"`, async ({ page }) => {
        await test.step('Estando yo en la web principal www.freerangetesters.com', async () => {
          await page.goto('https://www.freerangetesters.com');
          await expect(page).toHaveTitle('Free Range Testers');
        });

        await test.step(`Cuando hago click en "${seccion.nombre}"`, async () => {
          const linkLocator = page.locator('#page_header').getByRole('link', { name: seccion.nombre, exact: true });
          await linkLocator.click();
          await page.waitForURL(`**${seccion.url}`);
        });
      });
    }
  });
})();
