/**
 * Step Definitions for ABC News
 */
var abcNewsPageElements = require('../../pages/ABC_News_PageElements');
var settings = require('../../common/settings');
var getAppUrl = require('../../support/env').getAppABCNewsUrl();
var assert = require('assert');
var getPageTimeout = settings.config.STEPTIMEOUT;
var expectedResultDictionary = {};

module.exports = function () {

    this.Given(/^User opens the ABC News website$/, function (callback) {
      this.url(getAppUrl)
      callback();
    });

    this.When(/^ABC News Home page loads up$/, function (callback) {
      this.waitForElementVisible(abcNewsPageElements.news_banner, getPageTimeout)
      callback();
    });

    this.Then(/^Verify page loads successfully$/, function(callback){
      this.url(function(result) {
        assert.equal(result.value, getAppUrl, 'Url is the same');
      });
      callback();
    });

    this.Then(/^Verify News Banner loads successfully$/, function(callback){
      this.assert.attributeContains(abcNewsPageElements.news_banner, 'src', settings.constants.NEWS_BANNER_LOGO)
      callback();
    });

    this.Given(/^ABC News Home page is open$/, function (callback) {
        this
            .url(getAppUrl)
            .waitForElementVisible(abcNewsPageElements.news_banner, getPageTimeout)
            .url(function(result) {
              assert.equal(result.value, getAppUrl, 'Url is not the same');
        });
        callback();
    });

    this.When(/^User Clicks on Just In link$/, function (callback) {
      this
          .waitForElementVisible(abcNewsPageElements.link_just_in, getPageTimeout)
          .getText(abcNewsPageElements.link_just_in, function(result) {
              expectedResultDictionary.titleJustIn = result.value;
          })
          .click(abcNewsPageElements.link_just_in)
        callback();
    });

    this.Then(/^Verify Just In page loads up successfully$/, function(callback){
        this
            .waitForElementVisible(abcNewsPageElements.title_just_in, getPageTimeout)
            .getText(abcNewsPageElements.title_just_in, function(result) {
                assert.equal(result.value,expectedResultDictionary.titleJustIn)
            })
        callback();
    });

    this.Then(/^Verify content per article loads correctly with Title, Author, TimeStamp, Text$/, function(callback){
        this.waitForElementVisible(abcNewsPageElements.title_content, getPageTimeout)
        this.waitForElementVisible(abcNewsPageElements.content_timestamp, getPageTimeout)
        this.waitForElementVisible(abcNewsPageElements.content_text, getPageTimeout)
        callback();
    });

    this.Given(/^User navigates to the video url (.*)$/, function (arg1, callback) {
        this
            .url(arg1)
            .waitForElementVisible(abcNewsPageElements.news_banner, getPageTimeout)
            .url(function(result) {
                assert.equal(result.value, arg1, 'Video URL is not the same');
            });
        callback();
    });

    this.When(/^User waits till the video page loads$/, function (callback) {
        this.waitForElementVisible(abcNewsPageElements.video_page, getPageTimeout)
        callback();
    });

    this.Then(/^User should verify that the video loads and appears successfully$/, function(callback){
        this.waitForElementVisible(abcNewsPageElements.video_display, getPageTimeout)
        this.assert.visible(abcNewsPageElements.video_display)
        callback();
    });

    this.Given(/^User navigates to the Image Gallery url (.*)$/, function (arg1, callback) {
        this
            .url(arg1)
            .waitForElementVisible(abcNewsPageElements.news_banner, getPageTimeout)
            .url(function(result) {
                assert.equal(result.value, arg1, 'Image gallery URL is not the same');
            });
        callback();
    });

    this.When(/^User waits till the Image Gallery page loads$/, function (callback) {
        this.waitForElementVisible(abcNewsPageElements.image_slideshow_page, getPageTimeout)
        callback();
    });

    this.Then(/^User should verify that the Images load and appear successfully$/, function(callback){
        this
            .waitForElementVisible(abcNewsPageElements.image_gallery, getPageTimeout)
            .assert.visible(abcNewsPageElements.image_gallery)
            .getAttribute(abcNewsPageElements.image_first_picture_small, "src",  function(imageNameInSmallPicture1) {
                this.getAttribute(abcNewsPageElements.image_slideshow_picture, "src", function(imageNameInSlidePicture1) {
                    assert.equal(imageNameInSlidePicture1.value.split("-")[0], imageNameInSmallPicture1.value.split("-")[0])
                })
            })
            .click(abcNewsPageElements.image_second_picture_small, function (result) {
                this.getAttribute(abcNewsPageElements.image_second_picture_small, "src",  function(imageNameInSmallPicture2) {
                    this.getAttribute(abcNewsPageElements.image_slideshow_picture, "src", function(imageNameInSlidePicture2) {
                        assert.equal(imageNameInSlidePicture2.value.split("-")[0], imageNameInSmallPicture2.value.split("-")[0])
                    });
                });
            })
        callback();
    });


};
