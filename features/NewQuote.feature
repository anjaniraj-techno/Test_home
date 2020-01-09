Feature: To Create New Quote

@CucumberScenario
Scenario: User Create New Quote
Given I Am On Duck Creek Login Page
When I Enter Username "test"  
And I Enter Password "raj!"
And I Click On Login Button
And I Click On New Quote Link
And I Select PartyType "Person"
And I Select SearchType "Name and Address"
And I Enter First Name "chiya"
And I Enter Last Name "bhati"
And I Select Location State "AZ"
And I Select Location Zipcode "56007"
And I Click On Run Clearance Button
And I Click On New Quote Button
And I Select Product "P"
And I Click On Start
And I Enter Firstname "kiya"
And I Enter Lastname "Parkeuir"
And I Enter dateOfBirth "07/07/1993"
And I Enter Address1 "pdc5"
And I Enter Address2 "pdc3"
And I Enter City "London"
And I Enter ZipCode "56002"
And I Click On GetInfromation 
And I Click On Continue to Quote 
And I Enter Zipcodeq "56002"
And I Enter Primaryphone "7896541235"
And I Enter Emailaddress  "test@hk.com"
And I Enter Dwelling Limit  "100000"
And I Enter Year Limit "2015 "
And I Click On Complete an Application  
And I Click On Nextapplicant  
And I Click On Nextpolterm  
And I Click On Nextdwellinginfo   
And I Enter Replacement Cost of Dwelling "7000" 
And I Click On Nextdwellingcoverage 
And I Click On Nextadditionalcoverage 
And I Click On Nextwatercraft
And I Click On Nextspp
And I Click On NextAddinterest
And I Click On NextUnderwriter  
And I Click On Nextinsuracnehistory
And I Click On Nextclaimhistory
And I Click On NextPricingcoverage   
And I Click On NextPricing   
And I Select CollectionMethod "Paper"  
And I Select BillingKeysBillClass "Full Pay (Paper Invoices - No Service Charge)"
And I Click On Bindissue     
Then I should retrive Policy number   




















