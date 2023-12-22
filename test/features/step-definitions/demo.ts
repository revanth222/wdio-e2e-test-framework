import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^I am on Google page$/, async function(){
    // console.log("Before test")
    await browser.url("https://www.google.com/");
    let cookies = await $(`button=Accept all`)
    await cookies.click()
    await browser.pause(1000)
    // console.log("after test")
})

When (/^I search for (.*)$/, async function (searchItem){
    console.log(`>> searchItem: ${searchItem}`);
   let searchBox = await $(`[name=q]`);
   await searchBox.setValue(searchItem);
   await browser.keys("Enter")
   await browser.maximizeWindow()
})

Then (/^Click on the first link$/, async function (){
   let firstLink = await $(`h3`)
   await firstLink.click()
})

Then(/^URL should match with (.*)$/, async function(expectedUrl){
    console.log(`>> expectedUrl: ${expectedUrl}`)
    let Url = await browser.getUrl();
    chai.expect(Url).to.equal(expectedUrl) // Chai -> expect the url retrieved from browser and make an equal stmt from feature file (Passeing from the function)
})