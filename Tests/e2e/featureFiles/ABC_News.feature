Feature: ABCNews
  As an News Reader,
  I want to open ABC News and verify the page is loading correctly and all the news content are opening correctly along with Images, Videos

# ABC Home Page Scenarios

  # Covers section (a) -> 1,2
  Scenario: Verify ABC Home page loads up successfully
    Given User opens the ABC News website
    When  ABC News Home page loads up
    Then  Verify page loads successfully
    And   Verify News Banner loads successfully

  # Covers section (a) -> 3,4
  Scenario: Verify Just In page shows up successfully
    Given ABC News Home page is open
    When  User Clicks on Just In link
    Then  Verify Just In page loads up successfully
    And   Verify content per article loads correctly with Title, Author, TimeStamp, Text

# Video & Iamge Gallery Scenarios

  # Covers section (a) -> 5
  Scenario: Verify video loads and appears succesfully
    Given User navigates to the video url http://www.abc.net.au/news/2017-02-09/weatherill-promises-to-intervene-dramatically/8254908
    When  User waits till the video page loads
    Then  User should verify that the video loads and appears successfully

  # Covers section (a) -> 6
  Scenario: Verify Image Gallery successfully loads and images appear correctly
    Given User navigates to the Image Gallery url http://www.abc.net.au/news/2017-02-10/abc-open-pic-of-the-week/8256256
    When  User waits till the Image Gallery page loads
    Then  User should verify that the Images load and appear successfully

