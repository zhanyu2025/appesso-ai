const router = require('express').Router();

const userController = require('../controllers/user');
const { isAuthenticated } = require('../middlewares/auth');

// router.get('/user/:username', userController.getUserByUsername);
router.get('/me/devices', isAuthenticated, userController.getMyDevices);
// router.get('/:id/posts/liked', userController.getLikedPostsByUser);
// router.patch('/follow', isAuthenticated, userController.followUser);
// router.patch('/unfollow', isAuthenticated, userController.unFollowUser);
// router.get('/:id/followers', isAuthenticated, userController.getFollowersList);
// router.get('/:id/followees', isAuthenticated, userController.getFolloweesList);
// router.get('/:id/posts/replies', userController.getRepliesByUser);
// router.put(
//   '/me/profile/',
//   isAuthenticated,
//   checkSchema(profileSchema),
//   validateRequest,
//   userController.updateProfile
// );
// router.patch(
//   '/me/username',
//   isAuthenticated,
//   checkSchema(validateUsername),
//   validateRequest,
//   userController.updateUsername
// );

// router.patch(
//   '/me/dob',
//   isAuthenticated,
//   checkSchema(validateDateOfBirth),
//   validateRequest,
//   userController.updateDateOfBirth
// );
router.get('/me', isAuthenticated, userController.getAuthUserInfo);

module.exports = router;
