const router = require('express').Router();

const chatController = require('../controllers/chat');
const { isAuthenticated } = require('../middlewares/auth');

router.get('/all', isAuthenticated, chatController.getAllChatsOfUser);

// router.post(
//   '/new',
//   isAuthenticated,
//   checkSchema(chatSchema),
//   validateRequest,
//   chatController.findOrCreateNewChat
// );

router.get('/:id', isAuthenticated, chatController.getChatById);

// router.post(
//   '/:id/message',
//   isAuthenticated,
//   checkSchema(messageSchema),
//   validateRequest,
//   chatController.addNewMessageToChat
// );

// router.patch(
//   '/:id/messages/read',
//   isAuthenticated,
//   chatController.markMessagesAsRead
// );

module.exports = router;
