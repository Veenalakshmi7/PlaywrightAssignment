import {chromium,webkit,test} from "@playwright/test";
test (`launch browser`, async ()=>
{
const browser1 = await chromium.launch({headless:false,channel:"msedge"})
const browser1Context = await browser1.newContext()
const page1 = await browser1Context.newPage()
await page1.goto (`https://www.redbus.in`)
const title1 = await page1.title()
const url1 = page1.url()
console.log (`${title1} \n ${url1}`)

const browser2 = await webkit.launch({headless:false,channel:"webkit"})
const browser2Context = await browser2.newContext()
const page2 = await browser2Context.newPage()
await page2.goto (`https://www.flipkart.com`)
const title2 = await page2.title()
const url2 = page2.url()
console.log (`${title2} \n ${url2}`)
})