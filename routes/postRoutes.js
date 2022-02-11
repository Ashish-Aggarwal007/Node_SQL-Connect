const express = require('express');
const postController = require('../controllers/postController.js');
const router = express.Router();

// @route GET && POST - /posts/
router
  .route("/")
  .get(postController.getAllPosts)
  .post(postController.createPost);

router.route("/:id").get(postController.getPostbyId);

module.exports = router;

