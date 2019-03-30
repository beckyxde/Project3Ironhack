const express = require("express");
const router = express.Router();
const User = require('../models/user-model');
const Collection = require('../models/collection-model');
const passport = require("passport");

// http://localhost:5000/collections

router.get("/", (req, res, next) => {
  if (req.isAuthenticated()) {
    User.findById(req.user._id).populate('collections').then(user => {
      console.log("populated user", user)
      return res.json(user)
    }).catch(error => {
      return res.status(403).json({ message: 'Unauthorized' })
    })
  }
});




// adding user collections 
router.post("/add-collection", (req, res, next) => {
  if (req.isAuthenticated()) {

    // create collection
    const collection = new Collection({ title: "Favourites" }).save().then((collection) => {
      return res.json(collection)
    }).catch(error => {
      return res.status(403).json({ message: "Some error with collections" })
    });
    // take _id of collection
    collection_id = collection.findById(req.collection.id)

    // update user with $addtoset + _id of collection.

    User.findByIdAndUpdate(req.user._id, { $addToSet: { collections: [req.body.collection] } })
      .then(user => {
        return res.json(user)
      }).catch(error => {
        return res.status(403).json({ message: 'Unauthorized' })
      })
  }

  // User.findById()
  //   .then(.update(
  //     { _id: req.user._id },
  //     { $addToSet: { collections: req.body.eventId } }
  //   ).then(x => {
  //     console.log("xxxxxxxxxxxxx", x);
  //   });
})

router.get("/user/collections", (req, res, next) => {
  res.json([
    { name: "ruby", articles: [123, 234, 345] }
  ])
  // res.json(req.user.collections)
});

module.exports = router;
