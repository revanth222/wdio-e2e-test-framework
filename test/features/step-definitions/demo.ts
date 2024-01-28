import { Given, Then, When } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^I am on Google page$/, async function () {
  // console.log("Before test")
  await browser.url("https://www.google.com/");
  let cookies = await $(`button=Accept all`);
  await cookies.click();
  await browser.pause(1000);
  // console.log("after test")
});

When(/^I search for (.*)$/, async function (searchItem) {
  console.log(`>> searchItem: ${searchItem}`);
  let searchBox = await $(`[name=q]`);
  //    let searchBox1= await $(`textarea[title="Search"]`);
  // let searchBox = await $(`//div[@class="truncate"]`);
  // let searchBox = await $(`//div[@id="inputWrapper"]`);
  await searchBox.setValue(searchItem);
  await browser.keys("Enter");
  await browser.maximizeWindow();
});

Then(/^Click on the first link$/, async function () {
  let firstLink = await $(`h3`);
  await firstLink.click();
});

Then(/^URL should match with (.*)$/, async function (expectedUrl) {
  console.log(`>> expectedUrl: ${expectedUrl}`);
  let Url = await browser.getUrl();
  chai.expect(Url).to.equal(expectedUrl); // Chai -> expect the url retrieved from browser and make an equal stmt from feature file (Passeing from the function)
});

Given(/^i am on webpage$/, async function () {
  await browser.url(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await browser.pause(2000);
});

When(/^i enter (.*) and (.*)$/, async function (userName, password) {
  console.log(`username: ${userName}`);
  // let uName= await $(`[name=username]`)  // //input[@ name ='username'](For username) // Using Text
  // let uName= await $(`input[name=username]`) // This is using CSS selector with tagname
  let uName = await $(`input[name*=rna]`); // This is using CSS selector with tagname as contains (username = rna)
  // let uName= await $(`input[name^=user]`) // This is using CSS selector with tagname as starts with
  // let uName= await $(`input[name$=name]`) // This is using CSS selector with tagname as ends with
  await uName.setValue(userName);
  await browser.pause(2000);
  // let pwd= await $(`//input[@type='password']`)  // this is using standard Xpath
  let pwd = await $(`//input[@type='password']`);
  await pwd.setValue(password);
  console.log(`>>>> password: ${password}`);
  await browser.pause(2000);
});

Then(/^i See the header (.*)$/, async function (heading) {
  console.log(`heading: ${heading}`);
  let header = await $("<h5>"); // Using Tagname
  let ui = await header.getText();
  chai.expect(ui).to.equal(heading);
});
