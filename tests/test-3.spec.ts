import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('chrome-error://chromewebdata/');
  await page.goto('https://www.freerangetesters.com/');
  await page.getByTestId('header-container').getByRole('link', { name: 'Cursos', exact: true }).click();
});