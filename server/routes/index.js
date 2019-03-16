const express = require("express");
const router = express.Router();
//const NewsAPI = require("newsapi");
//const newsapi = new NewsAPI(process.env.apiKey);

const axios = require("axios");

const getHackerNewsNewArticles = searchTerm => {
  return axios
    .get(`https://hacker-news.firebaseio.com/v0/newstories.json`)
    .then(res => {
      const urlArr = [];

      res.data.slice(0, 100).forEach(hnID => {
        urlArr.push(`https://hacker-news.firebaseio.com/v0/item/${hnID}.json`);
      });

      let searchTerms = [""];
      if (searchTerm) searchTerms = [searchTerm];

      // this is being done programmatically now
      // const searchTerms = [
      //   "java",
      //   "object",
      //   "js",
      //   "python",
      //   "ruby",
      //   "sql",
      //   "kotlin",
      //   "programming"
      // ];

      const requests = urlArr.map(url => {
        return axios.get(url).then(response => {
          let containsTerm = undefined;
          for (let i = 0; i < searchTerms.length; i++) {
            containsTerm = response.data.title
              .toLowerCase()
              .includes(searchTerms[i]);
            if (containsTerm) break;
          }

          if (
            response.data.type === "story" &&
            response.data.url !== undefined &&
            containsTerm
          ) {
            const article = {
              title: response.data.title,
              url: response.data.url,
              date: response.data.time
            };
            console.log(article);
            return article;
          } else {
            return null;
          }
        });
      });

      return Promise.all(requests);
    });
};

//Using NewsAPI - largely works! Needs npm install newsapi --save (see https://newsapi.org/docs/client-libraries/node-js) - at the moment can't select the data from it
// newsapi.v2.everything({
//   q: ['javascript', 'ruby', 'kotlin', 'python', 'programming', 'ruby on rails', 'sql', 'PHP'],
//   from: '2019-03-01',
//   to: '2019-12-12',
//   language: 'en',
//   sortBy: 'relevancy',
//   page: 2
// }).then(response => {

//   let i = undefined;
//   response.articles.forEach(NAPIin => {
//     i = (NAPIin - 1)
//   });

//   const news = {
//     title: response.articles[i].title,
//     url: response.articles[i].url,
//   }
//   console.log(news);
// });

/* GET home page */
router.get("/api/stories", (req, res, next) => {
  getHackerNewsNewArticles().then(articles => {
    console.log("test", articles);
    res.json(articles.filter(a => a !== null));
  });
});

router.get("/api/stories/:searchTerm", (req, res, next) => {
  getHackerNewsNewArticles(req.params.searchTerm).then(articles => {
    console.log("test", articles);
    res.json(articles.filter(a => a !== null));
  });
});

module.exports = router;
