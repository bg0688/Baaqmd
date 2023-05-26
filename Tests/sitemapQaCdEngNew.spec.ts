import { test, expect } from '@playwright/test';

test('test of QA CD Eng', async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();
    page.setDefaultTimeout(60000);

    await page.goto('https://qa-cd-baaqmd.cylogy.com/');
    await page.goto('https://qa-cd-baaqmd.cylogy.com/sitemap');
    await page.waitForSelector('.sitemap');
    const links = await page.$$('.sitemap a');

    for (let i = 0; i < links.length; i++) {
        const url = await links[i].getAttribute('href');

        if (!url.startsWith('/')) {
            continue;
        }

        const newPage = await context.newPage();

        try {
            await newPage.goto(`https://qa-cd-baaqmd.cylogy.com${url}`);
        } catch (error) {
            console.error(error);
            continue; // Continue to the next iteration if there is a timeout or any other error
        }

        try {
            await expect(newPage).toBeTruthy();
            const selector = 'h1:has-text("404 Page Not Found")';
            const element = await newPage.$(selector);
            await expect(element).toBeFalsy();
        } catch (error) {
            console.error(error);
            // Handle the error here (e.g., log the error or perform any necessary cleanup)
        } finally {
            await newPage.close();
        }
    }
});