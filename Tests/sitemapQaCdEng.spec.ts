/*
import { test, expect } from '@playwright/test';



test('test of QA CD Eng', async ({ browser }) => {
    const context = await browser.newContext();

    const page = await context.newPage();

    // Set timeout
    page.setDefaultTimeout(60000);

    // Navigate to the login page
    await page.goto('https://qa-cd-baaqmd.cylogy.com/');
    //Navigate to sitemap
    await page.goto('https://qa-cd-baaqmd.cylogy.com/sitemap');

    // Wait for the login page to load
   // await page.waitForLoadState('domcontentloaded');


    //page.waitForTimeout(600)
    // await page.goto('http://dev-sa-baaqmd-preview.cylogy.com/sitemap');


    // Wait for the redirection to the consent page
   // await page.waitForLoadState('domcontentloaded');



    // Wait for the sitemap to load
    await page.waitForSelector('.sitemap');

    // Get all the links on the page
    const links = await page.$$('.sitemap a');

    // Loop through all the links and open a new page for each link
    for (let i = 0; i < links.length; i++) {
        const url = await links[i].getAttribute('href');

        // Skip any non-page URLs
        if (!url.startsWith('/')) {
            continue;
        }

        const newPage = await context.newPage();

        // Navigate to the URL
        await newPage.goto(`https://qa-cd-baaqmd.cylogy.com${url}`);

        // Verify that the page has content
        await expect(newPage).toBeTruthy();

// Check if the CSS selector exists on the page


        const selector = 'h1:has-text("404 Page Not Found")';
        const element = await newPage.$(selector);
        await expect(element).toBeFalsy();

// Close the page
        await newPage.close();
    }
});
*/