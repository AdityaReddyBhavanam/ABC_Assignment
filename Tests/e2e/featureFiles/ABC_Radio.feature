Feature: ABCRadio
  As an Radio Listener,
  I want to open ABC Radio website and verify the page is loading correctly and all the program content are opening correctly along with Images, Videos

# ABC Home Page Scenarios

  # Covers section (b) -> 1
  Scenario: Verify navigation to a program from Programs sub-menu successfully
    Given User opens the ABC Radio website
    When  User navigates to Programs and selects a program
    Then  Verify selected program shows up successfully

  # Covers section (b) -> 2
  Scenario: Verify Navigate to the last item in the ‘Program guide’ banner and select the last program.
    Given ABC Radio Home page is open
    When  User navigates to the last item in program guide banner
    And   User selects the last program
    Then  Verify the program selected page shows up successfully

# Search
  # Covers section (b) -> 3
  Scenario: Verify can search for content in the search bar and that content is returned
    Given ABC Radio Home page is open
    When  User searches for a content in search bar
    Then  Verify that the searched content information is received

  # Covers section (b) -> 4
  Scenario: Verify you can click on Social media ‘Share’ icon and the correct pop-up appears
    Given User navigates to the ABC Radio url http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406
    When  User clicks on Share or Tweet
    Then  Verify that the respective popup appears

  # Covers section (b) -> 6,7
  Scenario: Verify that when clicked on ‘Listen now’ you are re-directed to the respective url
    Given User navigates to the ABC Radio url http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406
    When  User clicks on Listen Now
    Then  Verify that the redirection happens to repective listening page https://radio.abc.net.au/programitem/pg1aGbWlx6?play=true
    And   Verify that the audio player loads successfully when the url is loaded

#  # Covers section (b) -> 5
#  Scenario: Verify that when you click on ‘Download audio’ you are directed to the mp3 file
#    Given User navigates to the ABC Radio url http://www.abc.net.au/radionational/programs/bigideas/a-fortunate-universe/8076406
#    When  User clicks on Download Audio
#    Then  Verify that the redirection happens to a mp3 file page


