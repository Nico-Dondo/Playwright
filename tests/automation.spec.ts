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
                await expect(page.getByText('OMG, aparezco después de 3')).toBeVisible(); // assertion para validar el texto despues de 3 segundos

            })


        })
        test('lleno un campo de texto en Automation @Sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo ingresar un texto en el campo un aburrido texto', async () => {
                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edicion').toBeEditable() //en este caso se chequea que el campo sea editable
                await page.getByPlaceholder('Ingresá texto').fill(textoAEscribir);// textoAEscribir esta hecho como una variable mas arriba//
                await expect(page.getByPlaceholder('Ingresá texto'), 'El campo de texto no admite edicion').toHaveValue(textoAEscribir) //a veces es necesario utilizar el tohaveValue para chequear un campo con texto
            })

        })
        test('Puedo seleccionar y deseleccionar un checkbox en el Sandbox', async ({ page }) => {
            await test.step('Dado que navego al sandbox de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar el checkbox Pasta', async () => {
                await page.getByLabel('Pasta 🍝').check();
                await expect(page.getByLabel('Pasta 🍝')).toBeChecked();
                //assertion expect (), dentro del parentesis se coloca el locator
            })
            await test.step('Puedo deseleccionar el checkbob Pasta', async () => {
                await page.getByLabel('Pasta 🍝').uncheck();
                await expect(page.getByLabel('Pasta 🍝')).not.toBeChecked();
            })


        })
        test('Puedo seleccinar Radio Butons', async ({ page }) => {
            await test.step('Dado que navego al SandBox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Puedo seleccionar Radio Button para No', async () => {
                await page.getByLabel('No').check();
                await expect(page.getByLabel('No'), 'El radio button noo se selecciono').toBeChecked()
            })

        })
        test('Los items del dropdown son los eperados', async ({ page }) => {
            await test.step('Dado que navego al SandBox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Valido que la lista del dropdown contiene los deportes esperados', async () => {
                const deportes = ['Fútbol', 'Tennis', 'Basketball']

                for (let opcion of deportes) {
                    const elemento = await page.$('select#formBasicLocator > option:is(:text("${opcion}"))')
                    if (elemento) {
                        console.log('Opcion presente en la lista')
                    }
                    else (
                        console.log('Opcion no presente en la lista')
                    )
                }

            })

        })
        test('Valido la columna nombres de la tabla estatica', async ({ page }) => {
            await test.step('Dado que  navego al Sandbox de Automation de Free Range testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')

            })
            await test.step('Validar los elementos para la columna Nombre de la tabla estatica', async () => {
                const valoresColumnaNombres = await page.$$eval('h2:has-text("Tabla estática") + table tbody tr td:nth-child(2)', elements => elements.map(element => element.textContent));
                const nombresEsperados = ['Messi', 'Ronaldo', 'Mbappe']
            })
        })
        test('Valido la segunda columna de la tabla dinamica', async ({ page }) => {
            await test.step('Dado que nabego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')

            })
            await test.step('Valido que los valores cambiaron  al hacer un reload en la web', async () => {
                //Creamos un array con todos los valores de la tabla
                const valoresTablaDinamica = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));
                console.log(valoresTablaDinamica)

                //Hacemos ua recarga de la pagina
                await page.reload();

                //Creamos un segundo Array para poder compara los datos
                const valoresReload = await page.$$eval('h2:has-text("Tabla dinámica") + table tbody tr td', elements => elements.map(element => element.textContent));

                //validamos que los valores no son los mismos
                expect(valoresTablaDinamica).not.toEqual(valoresReload)
                console.log(valoresReload)
            })

        })
        test('ejemplo de soft Assertions', async ({ page }) => {
            await test.step('Dado que navego bla bla bla', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/')
            })
            await test.step('Valido que los elementos del checkbox sean los correctos', async () => {
                // Este tipo de pruebas sirve para poder validar muchos datos y que si falla uno siga validando los demas. para eso se una el .soft en la asersion
                await expect.soft(page.getByText('Pizza')).toBeVisible();
                await expect.soft(page.getByText('Hamburguesa')).toBeVisible();
                await expect.soft(page.getByText('Pasta')).toBeVisible();
                await expect.soft(page.getByText('Helado')).toBeVisible();
                await expect.soft(page.getByText('Torta')).toBeVisible();

            })

        })
        test('Validando dentro de un popup', async ({ page }) => {
            await test.step('Dado que navego al sandbox', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })

            await test.step('Cuando hago click en el botón popup', async () => {
                await page.getByRole('button', { name: 'Mostrar popup' }).click();
            })

            await test.step('Puedo validar un elemento dentro del popup', async () => {
                await expect(page.getByText('¿Viste? ¡Apareció un Pop-up!')).toHaveText('¿Viste? ¡Apareció un Pop-up!');
                await page.getByRole('button', { name: 'Cerrar' }).click();

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
            test.fail(); //ejemplo del fail, es que si todavia no esta implementado con ese fail pasa aunque no se pueda probar
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step('Agrego archivos para ser subidos', async () => { // codigo a modo de ejemplo para mostrar como se haria, sandbox todavia no cuenta con esta funcion
                await page.getByLabel('Upload file').setInputFiles(['pathAlArchivo.pdf', 'Invoice1.pdf', 'Invoice2.pdf']);
                await page.getByLabel('Upload file').setInputFiles([]);

            })

        })

        test('Puedo hacer un Drag and Drop de elementos en Automation Sandbox - NO IMPLEMENTADO EN PROD', async ({ page }) => {
            test.fixme(); // lo saltea porque no lo puede probar, fixme es que lo arregle
            await test.step('Dado que navego al Sandbox de Automation de Free Range Testers', async () => {
                await page.goto('https://thefreerangetester.github.io/sandbox-automation-testing/');
            })
            await test.step('Selecciono un día de la semana del dropdown', async () => { // codigo a modo de ejemplo para mostrar como se haria, sandbox todavia no cuenta con esta funcion
                await page.getByTestId('DragFrom').dragTo(page.getByTestId('DragTo'));

            })

        }) 

    })

})();