//to run tests using config use command "npx playwright test --config=playwright.config.ts"
//to run tests using specic browser use command "$ npx playwright test --config=playwright.config.ts --project=projectname"
import { PlaywrightTestConfig } from "@playwright/test"

const config: PlaywrightTestConfig = {
    timeout : 15000000,
    retries : 0,
    use: {

        headless: true,
        viewport: { width: 1280, height: 720},
        actionTimeout: 15000,
        ignoreHTTPSErrors: true,
        video: "retain-on-failure",
        screenshot: "only-on-failure",
    },
    projects: [
        {
            name: "Chromium",
            use: {browserName: "chromium"},
        }

    ]


}
export default config