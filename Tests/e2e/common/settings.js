/**
 * This file is for setting configuration required in test step definitions
 * All constants used in step definitions are initialized here
 */
var settings = function () {
    this.constants = {
        'NEWS_BANNER_LOGO': 'news-logo-data.png',
        'SEARCH_CONTENT': 'Sample Program"',
        'SEARCH_RESULTS_PART1': 'Your search for '
    };
    this.config = {
        'STEPTIMEOUT': 60000
    }
};
module.exports = new settings();
