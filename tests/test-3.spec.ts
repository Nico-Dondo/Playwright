import { test, Browser, Page, expect } from '@playwright/test';

test('Navegación a la Sandbox de The Free Range Testers', async ({ page }) => {
   
    await page.goto('http://localhost:3000/sandbox-automation-testing');
    expect(page.url()).toBe('http://localhost:3000/sandbox-automation-testing');
     page.getByRole('heading', { name: 'Botón con ID dinámico y' });
     page.getByPlaceholder('Ingresá texto')
});
