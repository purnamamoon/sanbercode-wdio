Feature: Category Menu Test

    Background: Login
        Given I open the Kasir Aja website
        When I login with valid credentials
        Then I should be on the dashboard page

    Scenario: Successfully add category
        Given I go to category page
        When I add new category
        Then I can see the category in category page
        
    Scenario: Successfully delete category
        Given I go to category page
        When I delete category
        Then Category is removed from the category page