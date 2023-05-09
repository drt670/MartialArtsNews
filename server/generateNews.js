const axios = require("axios");
const cheerio = require("cheerio");
const NodeCache = require("node-cache");
const rssCache = new NodeCache();

exports.generateMmaNews = async function() {
    // An array of URLs for websites that provide RSS feeds
    const urls = [
        "https://mmafighting.com/rss/current",
        "https://bloodyelbow.com/rss/current",
        "https://www.lowkickmma.com/feed/",
        "https://mmajunkie.usatoday.com/feed/",
        "https://www.mmarising.com/feed/",
        "https://www.bjpenn.com/feed/",
        "https://www.mmamania.com/rss/current",
    ];

    // An empty array to store the news items
    let newsItems = [];

    // Create an array of promises that fetch the RSS feeds
    const rssPromises = urls.map(async (url) => {
        let response;
        const cachedResponse = rssCache.get(url);
        if (cachedResponse) {
            response = { data: cachedResponse };
        } else {
            response = await axios.get(url, { timeout: 5000 });
            rssCache.set(url, response.data);
        }
        const $ = cheerio.load(response.data, { xmlMode: true });
        $("item").each((i, item) => {
            // Extract the required fields from the RSS item
            const postUrl = $(item).find("link").text();
            const title = $(item).find("title").text();
            const author = $(item).find("dc\\:creator").text();
            const thumbnail =
                $(item).find("media\\:content, content").attr("url") ||
                $(item).find("enclosure").attr("url") ||
                $(item).find("image").attr("url") ||
                $(item).find("og:image").attr("content") ||
                $(item).find("twitter:image").attr("content"); // Default thumbnail

            const date = $(item).find("pubDate").text();

            // Add the news item to the array
            newsItems.push({ postUrl, title, thumbnail, date, author });
        });
    });

    // Wait for all the RSS feeds to be fetched and then return the news items
    await Promise.allSettled(rssPromises);

    return newsItems;
}

exports.generateBoxingNews = async function() {
    // An array of URLs for websites that provide RSS feeds
    const urls = [
        "https://boxingnews24.com/feed",
        "https://boxingnewsonline.net/feed",
        "https://feeds.feedburner.com/boxing247/tuVW",
        "https://ringtv.com/feed",
        "https://boxinginsider.com/feed",
        "https://boxingscene.com/rss/feed.php",
        "https://badlefthook.com/rss/current",
    ];

    // An empty array to store the news items
    let newsItems = [];

    // Create an array of promises that fetch the RSS feeds
    const rssPromises = urls.map(async (url) => {
        let response;
        const cachedResponse = rssCache.get(url);
        if (cachedResponse) {
            response = { data: cachedResponse };
        } else {
            response = await axios.get(url, { timeout: 5000 });
            rssCache.set(url, response.data);
        }
        const $ = cheerio.load(response.data, { xmlMode: true });
        $("item").each((i, item) => {
            // Extract the required fields from the RSS item
            const postUrl = $(item).find("link").text();
            const title = $(item).find("title").text();
            const author = $(item).find("dc\\:creator").text();
            const thumbnail =
                $(item).find("media\\:content, content").attr("url") ||
                $(item).find("enclosure").attr("url") ||
                $(item).find("image").attr("url") ||
                $(item).find("og:image").attr("content") ||
                $(item).find("twitter:image").attr("content"); // Default thumbnail

            const date = $(item).find("pubDate").text();

            // Add the news item to the array
            newsItems.push({ postUrl, title, thumbnail, date, author });
        });
    });

    // Wait for all the RSS feeds to be fetched and then return the news items
    await Promise.allSettled(rssPromises);

    return newsItems;
}

exports.generateMuayThaiNews = async function() {
    // An array of URLs for websites that provide RSS feeds
    const urls = [
        "https://8limbsus.com/feed",
        "https://www.tigermuaythai.com/news-blog/feed",
        "https://www.muay-thai-guy.com/blog.rss",
        "https://fijimuaythai.com/feed/",
        "http://wmcmuaythai.org/feed/",
        "https://muaythaibrisbane.com/feed/",
        "https://www.eightpointsmuaythai.com/blog?format=RSS",
    ];

    // An empty array to store the news items
    let newsItems = [];

    // Create an array of promises that fetch the RSS feeds
    const rssPromises = urls.map(async (url) => {
        let response;
        const cachedResponse = rssCache.get(url);
        if (cachedResponse) {
            response = { data: cachedResponse };
        } else {
            response = await axios.get(url, { timeout: 5000 });
            rssCache.set(url, response.data);
        }
        const $ = cheerio.load(response.data, { xmlMode: true });
        $("item").each((i, item) => {
            // Extract the required fields from the RSS item
            const postUrl = $(item).find("link").text();
            const title = $(item).find("title").text();
            const author = $(item).find("dc\\:creator").text();
            // const thumbnail =
            //     $(item).find("media\\:content, content").attr("url") ||
            //     $(item).find("enclosure").attr("url") ||
            //     $(item).find("image").attr("url") ||
            //     $(item).find("og:image").attr("content") ||
            //     $(item).find("content\\:encoded").find("figure > img").attr("src") ||
            //     $(item).find("twitter:image").attr("content");
            //
            // const result = $.load($("content\\:encoded").first().text())("img").first().attr("src");
            // console.log(result);
            const date = $(item).find("pubDate").text();

            // Add the news item to the array
            newsItems.push({ postUrl, title, date, author });
        });
    });

    // Wait for all the RSS feeds to be fetched and then return the news items
    await Promise.allSettled(rssPromises);

    return newsItems;
}

exports.generateBJJNews = async function() {
    // An array of URLs for websites that provide RSS feeds
    const urls = [
        "https://jiujitsutimes.com/feed/",
        "https://bjjfanatics.com/blogs/news.atom",
        "https://www.attacktheback.com/feed/",
        "https://www.bjj-spot.com/feed/",
        "https://grapplinginsider.com/feed/",
    ];

    // An empty array to store the news items
    let newsItems = [];

    // Create an array of promises that fetch the RSS feeds
    const rssPromises = urls.map(async (url) => {
        let response;
        const cachedResponse = rssCache.get(url);
        if (cachedResponse) {
            response = { data: cachedResponse };
        } else {
            response = await axios.get(url, { timeout: 5000 });
            rssCache.set(url, response.data);
        }
        const $ = cheerio.load(response.data, { xmlMode: true });
        $("item").each((i, item) => {
            // Extract the required fields from the RSS item
            const postUrl = $(item).find("link").text();
            const title = $(item).find("title").text();
            const author = $(item).find("dc\\:creator").text();
            const thumbnail =
                $(item).find("media\\:content, content").attr("url") ||
                $(item).find("enclosure").attr("url") ||
                $(item).find("image").attr("url") ||
                $(item).find("og:image").attr("content") ||
                $(item).find("twitter:image").attr("content"); // Default thumbnail

            const date = $(item).find("pubDate").text();

            // Add the news item to the array
            newsItems.push({ postUrl, title, thumbnail, date, author });
        });
    });

    // Wait for all the RSS feeds to be fetched and then return the news items
    await Promise.allSettled(rssPromises);

    return newsItems;
}

