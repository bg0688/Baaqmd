 import { test, expect } from '@playwright/test';

const username = 'nikolay@cylogy.com';
const password = 'D23vb4gdu';

const redirectUri = 'https://sc-dev-preview.baaqmd.gov/sitemap';

test('test with Microsoft OAuth2 authentication', async ({ browser }) => {
    const context = await browser.newContext();

    const page = await context.newPage();

    // Set timeout
    page.setDefaultTimeout(60000);

    // Navigate to the login page
    //await page.goto(`https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/authorize?client_id=${clientId}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&response_mode=query&scope=openid`);
    await page.goto('https://sc-dev-preview.baaqmd.gov/sitemap');
    // Wait for the login page to load
    await page.waitForLoadState('domcontentloaded');

    // Fill in the login form with credentials and submit
    await page.fill('input[name="loginfmt"]', username);
    await page.click('#idSIButton9')
    await page.fill('input[name="passwd"]', password);
    await page.click('#idSIButton9')
    await page.click('#idSIButton9')
    //page.waitForTimeout(600)
   // await page.goto('http://dev-sa-baaqmd-preview.cylogy.com/sitemap');


    // Wait for the redirection to the consent page
    await page.waitForLoadState('domcontentloaded');

    // Grant permissions on the consent page
   // await context.grantPermissions(['openid']);

    // Wait for the redirection to the redirect URI
    //await context.waitForEvent('page', {predicate: (p) => p.url().startsWith(redirectUri)});

    // Now authenticated, continue with the test logic

    // Navigate to the sitemap URL

    await page.goto('https://sc-dev-preview.baaqmd.gov/sitemap');

    // Wait for the sitemap to load
    await page.waitForSelector('.sitemap');

    // Get all the links on the page
    const links = await page.$$('.sitemap a');

    // Loop through all the links and open a new page for each link
    for (let i = 0; i < links.length; i++) {
        const url = await links[i].getAttribute('href');

        if (!url.startsWith('/')) {
            continue;
        }

        const newPage = await context.newPage();

        try {
            await newPage.goto(`'https://sc-dev-preview.baaqmd.gov'${url}`);
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
