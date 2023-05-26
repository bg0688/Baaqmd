/*
import { test } from '@playwright/test';

const username = 'cylogy';
const password = 'dev@1234';

 test ( "first test", async ( { page, context}) => {


    // Set up basic authentication credentials
    await page.goto('https://redesign-sa-baaqmd-preview.cylogy.com/')
    await context.setHTTPCredentials({ username, password });


    await context.newPage();
    await page.goto('https://redesign-sa-baaqmd-preview.cylogy.com/sitemap');

    // Wait for the sitemap links to load
    await page.waitForSelector('.sitemap a');

    // Get the sitemap links
    const siteMapLinks = await page.$$eval('.sitemap a', links =>
        links.map(link => link.getAttribute('href'))
    );

    console.log(siteMapLinks);


});
*/
