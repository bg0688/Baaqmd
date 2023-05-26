/* import { test, expect } from '@playwright/test';

const username = 'cylogy';
const password = 'dev@1234';

test('test with basic authentication', async ({ browser }) => {
    const context = await browser.newContext({
        httpCredentials: { username, password },
    });

    const page = await context.newPage();

    // Set timeout
    page.setDefaultTimeout(600000);

    // Navigate to the sitemap URL
    await page.goto('https://redesign-sa-baaqmd-preview.cylogy.com/sitemap');

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
        await newPage.goto(`https://redesign-sa-baaqmd-preview.cylogy.com${url}`);

        // Verify that the page has content
        await expect(newPage).toBeTruthy();

        // Check if the CSS selector exists on the page
        //const selector = "[src='/~/media/dotgov/images/logos/logo-with-tagline.png?h=54&w=343&la=en&hash=7D45CEF8C8222A67E15B7D02570ED539']";
        //const element = await newPage.$(selector);
        //await expect(element).toBeTruthy(`The CSS selector ${selector} is not found on the page`);

        // Close the page
        await newPage.close();
    }

    // Close the main page
    await page.close();
});

 */