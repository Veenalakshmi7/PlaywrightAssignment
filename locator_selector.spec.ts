import {chromium,test} from "@playwright/test";
test (`learn CSS locators and selector`, async ()=>
{
const browser = await chromium.launch({headless:false})
const context = await browser.newContext()
const page = await context.newPage()

await page.goto('http://leaftaps.com/opentaps/control/main')

await page.locator(`#username`).fill(`Demosalesmanager`);
await page.locator(`#password`).fill(`crmsfa`);
await page.locator(`.decorativeSubmit`).click();

await page.locator (`#button > a`).click()
await page.waitForTimeout(3000)
await page.locator(`#ext-gen582`).waitFor({state:'visible'})
await page.locator(`#ext-gen582`).click()
//await page.locator(`#ext-gen591`).waitFor({state:'visible'})
//await page.locator(`#ext-gen591`).click()

await page.locator(`#createLeadForm_companyName`).waitFor({state:'visible'})
await page.locator(`#createLeadForm_companyName`).fill(`TestLeaf`)
await page.locator(`#createLeadForm_firstName`).fill(`Veenalakshmi`)
await page.locator(`#createLeadForm_lastName`).fill(`R`)



}    
)