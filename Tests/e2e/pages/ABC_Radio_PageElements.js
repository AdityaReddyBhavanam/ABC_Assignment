/**
 * Page Elements for ABC News
 */
var ABC_Radio_PageElements = {

    url: 'http://www.abc.net.au/radionational/',

    radio_banner: "a[href='/radionational/']",

    tab_programs: "a[class='sf-with-ul']",

    list_program: "ul[id='rn-programindex'] > li:nth-child(6)",

    program_page: "div[class='br-masthead__title'] > a",

    //Program guide Elements
    button_right_arrow: "div[id='right-arrow']",

    button_last_program: ".//li[@class='guide']/preceding-sibling::li[1]/a",

    page_last_program: "h2[class='rn-program-banner'] > a",

    textarea_search: "input[id='search-simple-input-query']",

    icon_search: "input[id='search-simple-input-submit']",

    page_search: "div[class='section'] > h2",

    header_search: "div[class='ct-search-header'] > p:nth-child(1)",

    search_results: "div[class='article-index section'] > ul > li:nth-child(1)",

    button_fshare: "button[id='u_0_2']",

    link_facebook: "h2[id='homelink']",

    button_download_audio: "div[class='ct-meta-details'] > ul> li:nth-child(2) > a[class='ico ico-download']",

    button_listen_now: "a[class='ico ico-audio modrewrite']",

    button_play_audio: "div[class='rp__controls__playback']",

    //Just in Page Elements
    title_just_in: "div[class='header subheader']>h1",

    title_content: "ul[class='article-index'] > li:nth-child(1) > h3 > a",

    content_author: "ul[class='article-index'] > li:nth-child(1) > div[class='byline']",

    content_timestamp: "ul[class='article-index'] > li:nth-child(1) > p[class='published']",

    content_text: "ul[class='article-index'] > li:nth-child(1) > p:nth-child(3)",

    // Video Page Elements
    video_page: "span[id='jwplayer-video-0_view']",

    video_display: "div[id='jwplayer-video-0_display']",

    // Image Gallery Page Elements
    image_slideshow_page: "div[class='slideshowpro-gallery']",

    image_gallery: "ul[class='lSPager lSGallery']",

    image_first_picture_small: "ul[class='lSPager lSGallery'] >li:nth-child(1) > a > img",

    image_second_picture_small: "ul[class='lSPager lSGallery'] >li:nth-child(2) > a > img",

    image_slideshow_picture: "div[class='lSSlideWrapper usingCss'] > ul > .lslide.loaded.active > img",

};

module.exports = ABC_Radio_PageElements;
