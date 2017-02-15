/**
 * Page Elements for ABC News
 */
var ABC_News_PageElements = {

    url: 'http://www.abc.net.au/news/',

    news_banner: "a[href='/news/'] .noprint",

    link_just_in: "li[id='n-justin'] > a",

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

module.exports = ABC_News_PageElements;
