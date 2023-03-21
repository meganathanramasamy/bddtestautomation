Feature: Search feature 1

  Scenario: User can search for a product 1
    Given I am on the homepage
    When I search for "shoes"
    Then I should see search results
