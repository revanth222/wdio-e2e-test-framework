Feature: Demo Feature

    @demo
    Scenario Outline: This is a demo feature
        Given I am on Google page
        When I search for <SearchItem>
        Then Click on the first link
        Then URL should match with <ExpectedURL>

        Examples:
            | TestID     | SearchItem | ExpectedURL           |
            | Demo_Tc001 | wdio       | https://webdriver.io/ |


    @demo
    Scenario Outline: This is a demo feature for selectors
        Given i am on webpage
        When i enter <username> and <password>
        Then i See the header <heading>
        Examples:
            | username | password | heading |
            | revanth  | Rev@123  | Login   |