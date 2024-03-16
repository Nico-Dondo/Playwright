import { test, expect } from '@playwright/test';

const REPO = 'Playwright';
const USER = 'Nico-Dondo';

test('Se puede crear una Issue en el repositorio de GitHub', async ({ request }) => {
    const newIssue = await request.post(`/repos/${USER}/${REPO}/issues`, {
        data: {
            title: '[Bug] reporte 1',
            body: 'Descripcion del bug'
        }
    });
    expect(newIssue.status()).toBe(201);

    const issues = await request.get(`/repos/${USER}/${REPO}/issues`);
    expect(issues.ok()).toBeTruthy();
    expect(await issues.json()).toContainEqual(expect.objectContaining({
        title: '[Bug] reporte 1',
        body: 'Descripcion del bug',
    }));
});

test('Puedo crear una request de feature', async ({ request }) => {
    const newIssue = await request.post (`/repos/${USER}/${REPO}/issues`,{
        data:{
            title: '[Feature] request 1',
            body: 'Descripcion del feature'
        }
    });
    
});

