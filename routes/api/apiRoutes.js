const express = require('express');
const router = express.Router();

// Import your API controllers or middleware
const userController = require('../../controllers/userController');
// const postController = require('./controllers/postController');

// Define your API routes
router.get('/users', userController.getAllUsers);
router.get('/users/:id', userController.getUserById);
router.post('/users', userController.createUser);
router.put('/users/:id', userController.updateUser);
router.delete('/users/:id', userController.deleteUser);

// router.get('/posts', postController.getAllPosts);
// router.get('/posts/:id', postController.getPostById);
// router.post('/posts', postController.createPost);
// router.put('/posts/:id', postController.updatePost);
// router.delete('/posts/:id', postController.deletePost);

// Export the router
module.exports = router;