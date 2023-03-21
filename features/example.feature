Feature: Search feature

  Scenario: User can search for a product
    Given I am on the homepage
    When I search for "shoes"
    Then I should see search results
