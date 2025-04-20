const Parser = require('rss-parser');
const parser = new Parser();

const fetch = async () => {
  const feed = await parser.parseURL('https://news.google.com/rss/search?q=unlisted+stocks+india');
  const items = Array.from(xml.getElementsByTagName('item'));
  console.log('Latest News:');
  feed.items.slice(0, 1).forEach(item => {
    const media = item.getElementsByTagName('media:content')[0];
    const obj = {
        title: item.title|| '',
        link: item.link || '',
        pubDate: item.pubDate || '',
        description: item.description || '',
        image:media?.getAttribute('url') || '',
      };
      console.log('Parsed item:', obj);
  })
};

fetch();