const express = require('express');
const router = express.Router();
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(process.env.apiKey);

const axios = require('axios');

const getHackerNewsNewArticles = () => {

  axios.get(`https://hacker-news.firebaseio.com/v0/newstories.json`).then((res) => {

    const urlArr = []

    res.data.slice(0, 400).forEach(hnID => {
      urlArr.push(`https://hacker-news.firebaseio.com/v0/item/${hnID}.json`)
    });

    const searchTerms = ["java", "object", "js", "python", "ruby", "sql", "kotlin", "programming"]

    urlArr.forEach((url) => {
      axios.get(url).then((response) => {

        let containsTerm = undefined;
        for (let i = 0; i < searchTerms.length; i++) {
          containsTerm = response.data.title.toLowerCase().includes(searchTerms[i])
          if (containsTerm) break;
        };

        if (response.data.type === "story"
          && response.data.url !== undefined
          && containsTerm
        ) {
          const article = {
            title: response.data.title,
            url: response.data.url,
            date: response.data.time
          }
          console.log("item details response.data", article)
        }
      })
    })
  })
}

//Using NewsAPI - largely works!
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
router.get('/', (req, res, next) => {
  getHackerNewsNewArticles()
  res.send()
});

module.exports = router;
