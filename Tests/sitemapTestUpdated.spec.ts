/*
import { test, expect } from '@playwright/test';

const username = 'cylogy';
const password = 'dev@1234';

test('test with basic authentication', async ({ page }) => {
    // Set basic authentication credentials
    await page.context().setHTTPCredentials({ username, password });

    // Navigate to the sitemap URL
    await page.goto('https://redesign-sa-baaqmd-preview.cylogy.com/sitemap');

    // Wait for the sitemap to load
    await page.waitForSelector('.sitemap');

    // Get all the links on the page
    const links = await page.$$('.sitemap a');

    // Display all the URLs
    for (const link of links) {
        const url = await link.getAttribute('href');
        console.log(url);
    }
});

 */