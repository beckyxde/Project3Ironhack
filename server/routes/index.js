const express = require('express');
const router = express.Router();

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

/* GET home page */
router.get('/', (req, res, next) => {
  getHackerNewsNewArticles()
  res.send()
});

module.exports = router;
