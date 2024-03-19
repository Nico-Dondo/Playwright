import { test, expect } from '@playwright/test'

// Con este codigo interceptamos la llamada a la API y le ponemos un valor que queremos que traiga, en este caso frutilla
test('Hace un mock de una fruta que no vienenen la API', async ({ page }) => {
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [{ name: 'Frutilla', id: 27 }];
        await route.fulfill({ json })
    })

    //vamos a la pagina
    await page.goto('https://demo.playwright.dev/api-mocking')

    //Validamos que trae frutilla del primer paso
    await expect(page.getByText('Frutilla')).toBeVisible()

})

test('Obtengo la respuesta real y le agrego algo no tan real', async ({ page }) => {
    // Obtenemos la respuesta y le agregamos un extra
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'Lionel Messi', id: 200 });
        // Obtenemos la respuesta real mientras que le agregamos un extra
        // al objeto JSON que va a estar siendo representado.
        await route.fulfill({ response, json });
    });

    // Vamos a la página
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Validamos que vino la respuesta real con el extra que le sumamos antes
    await expect(page.getByText('Lionel Messi', { exact: true })).toBeVisible();
})