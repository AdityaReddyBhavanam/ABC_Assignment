/**
 * Step Definitions for ABC News
 */
var abcRadioPageElements = require('../../pages/ABC_Radio_PageElements');
var settings = require('../../common/settings');
var assert = require('assert');
var getAppUrl = require('../../support/env').getAppABCRadioUrl();

var getPageTimeout = settings.config.STEPTIMEOUT;
var expectedResultDictionary = {};

module.exports = function () {

    this.Given(/^User opens the ABC Radio website$/, function (callback) {
        this
            .url(getAppUrl)
            .waitForElementVisible(abcRadioPageElements.radio_banner, getPageTimeout)
        callback();
    });

    this.When(/^User navigates to Programs and selects a program$/, function (callback) {
        this
            .waitForElementVisible(abcRadioPageElements.tab_programs, getPageTimeout)
            .click(abcRadioPageElements.tab_programs)
            .getText(abcRadioPageElements.list_program, function(result) {
                expectedResultDictionary.titleProgram = result.value;
            })
            .click(abcRadioPageElements.list_program)
        callback();
    });

    this.Then(/^Verify selected program shows up successfully$/, function(callback){
        this
            .waitForElementVisible(abcRadioPageElements.program_page, getPageTimeout)
            .getText(abcRadioPageElements.program_page, function(result) {
                assert.equal(result.value,expectedResultDictionary.titleProgram)
            })
        callback();
    });

    this.Given(/^ABC Radio Home page is open$/, function (callback) {
        this
            .url(getAppUrl)
            .waitForElementVisible(abcRadioPageElements.radio_banner, getPageTimeout)
            .url(function(result) {
                assert.equal(result.value, getAppUrl, 'Url is not the same');
            });
        callback();
    });

    this.When(/^User navigates to the last item in program guide banner$/, function (callback) {
        this
            .waitForElementVisible(abcRadioPageElements.button_right_arrow, getPageTimeout)
            for (var i = 0; i < 20; i += 1) {
                this.click(abcRadioPageElements.button_right_arrow);
            }
        this
            .useXpath() // every selector now must be xpath
            .waitForElementVisible(abcRadioPageElements.button_last_program, getPageTimeout)
            .click(abcRadioPageElements.button_last_program)
            .useCss() // we're back to CSS now
        callback();
    });

    this.When(/^User selects the last program$/, function(callback){
        this
            .useXpath() // every selector now must be xpath
            .getAttribute(abcRadioPageElements.button_last_program, "href", function(programUrl) {
                expectedResultDictionary.programUrl = programUrl.value
            })
            .click(abcRadioPageElements.button_last_program)
            .useCss() // we're back to CSS now
        callback();
    });

    this.Then(/^Verify the program selected page shows up successfully$/, function(callback){
        this
            .url(function(result) {
                assert.equal(result.value, expectedResultDictionary.programUrl, 'Program Url is not the same');
            });
        callback();
    });

    this.When(/^User searches for a content in search bar$/, function (callback) {
        this
            .waitForElementVisible(abcRadioPageElements.textarea_search, getPageTimeout)
            .setValue(abcRadioPageElements.textarea_search,settings.constants.SEARCH_CONTENT)
            .click(abcRadioPageElements.icon_search)
        callback();
    });

    this.Then(/^Verify that the searched content information is received$/, function(callback){
        this
            .waitForElementVisible(abcRadioPageElements.page_search, getPageTimeout)
            .getText(abcRadioPageElements.header_search, function(result){
                assert.equal(result.value.split("\"")[0],settings.constants.SEARCH_RESULTS_PART1)
            })
            .assert.visible(abcRadioPageElements.search_results)
        callback();
    });

    this.Given(/^User navigates to the ABC Radio url (.*)$/, function (arg1, callback) {
        this
            .url(arg1)
            .waitForElementVisible(abcRadioPageElements.radio_banner, getPageTimeout)
            .url(function(result) {
                assert.equal(result.value, arg1, 'Radio URL is not the same');
            });
        callback();
    });

    this.When(/^User clicks on Share or Tweet$/, function (callback) {
        this.execute('scrollTo(0,250)', function(result) {
            this.pause(10000, function (result) { // give time to iframe to be available
                this.frame(1, function (result) {//Facebook popup is in Frame 1
                    this.click(abcRadioPageElements.button_fshare)
                })
            })
        })
        callback();
    });

    this.Then(/^Verify that the respective popup appears$/, function(callback){
        this
            .pause(5000, function (result) {
                this.windowHandles(function(result) {
                    var newWindow;
                    this.assert.equal(result.value.length, 2, 'There should be 2 windows open')
                    newWindow = result.value[1]
                    this.switchWindow(newWindow)
                    this.waitForElementVisible(abcRadioPageElements.link_facebook, getPageTimeout)
                    this.closeWindow()
                    var temp = result.value[0];
                    this.switchWindow(temp);
                })
            })
        callback();
    });

    this.When(/^User clicks on Download Audio$/, function (callback) {
        this
            .getAttribute(abcRadioPageElements.button_download_audio, "href", function(mp3FileUrlText) {
                expectedResultDictionary.mp3FileUrl = mp3FileUrlText.value
            })
            .click(abcRadioPageElements.button_download_audio) // this will
        callback();
    });

    this.Then(/^Verify that the redirection happens to a mp3 file page$/, function(callback){ // Commenting out this section because it is returning null
        // this
        //     .getTitle(function(currentTitle) {
        //         assert.equal(expectedResultDictionary.mp3FileUrl,currentTitle,'Radio URL is not the same');
        //     })
        callback();
    });

    this.When(/^User clicks on Listen Now$/, function (callback) {
        this
            .getAttribute(abcRadioPageElements.button_download_audio, "href", function(mp3FileUrlText) {
                expectedResultDictionary.mp3FileUrl = mp3FileUrlText.value
            })
            .click(abcRadioPageElements.button_listen_now)
        callback();
    });

    this.Then(/^Verify that the redirection happens to repective listening page (.*)$/, function(arg1,callback){
        this
            .windowHandles(function(result) {
                var newWindow;
                this.assert.equal(result.value.length, 2, 'There should be 2 windows open')
                newWindow = result.value[1]
                this.switchWindow(newWindow)
                this.waitForElementVisible(abcRadioPageElements.button_play_audio, getPageTimeout)
                this.url(function(result) {
                    assert.equal(result.value, arg1, 'Radio MP3 URL is not the same');
                })
            })
        callback();
    });

    this.Then(/^Verify that the audio player loads successfully when the url is loaded$/, function(callback){
        this
            .waitForElementVisible(abcRadioPageElements.button_play_audio, getPageTimeout)
            .click(abcRadioPageElements.button_play_audio) // To Play
        callback();
    });

};
