const router = require('express').Router();

const chatController = require('../controllers/chat');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/all', isAuthenticated, chatController.getAllChatsOfUser);

router.get('/:id', isAuthenticated, chatController.getChatById);

module.exports = router;
