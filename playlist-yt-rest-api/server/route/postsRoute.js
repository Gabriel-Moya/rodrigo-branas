const express = require('express');
const router = express.Router();
const postService = require('../service/postsService');

router.get('/posts', async function (req, res, next) {
  try {
    const posts = await postService.getPosts();
    res.json(posts);
  } catch (err) {
    next(err);
  }
});

router.post('/posts', async function (req, res, next) {
  const post = req.body;
  try {
    const newPost = await postService.savePost(post);
    res.status(201).json(newPost);
  } catch (err) {
    next(err);
  }
});

router.put('/posts/:id', async function (req, res, next) {
  const post = req.body;
  try {
    await postService.updatePost(req.params.id, post);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

router.delete('/posts/:id', async function (req, res, next) {
  try {
    await postService.deletePost(req.params.id);
    res.status(204).end();
  } catch (err) {
    next(err);
  }
});

module.exports = router;
