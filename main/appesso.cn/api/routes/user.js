const router = require('express').Router();

const { checkSchema } = require('express-validator');
const userController = require('../controllers/user');
const { isAuthenticated, validateRequest } = require('../middlewares/auth');
const { profileSchema, validateUsername } = require('../services/validators');

router.get('/user/:username', userController.getUserByUsername);
router.get('/me/devices', isAuthenticated, userController.getMyDevices);
router.put(
  '/me/profile/',
  isAuthenticated,
  checkSchema(profileSchema),
  validateRequest,
  userController.updateProfile
);
router.patch(
  '/me/username',
  isAuthenticated,
  checkSchema(validateUsername),
  validateRequest,
  userController.updateUsername
);

router.patch('/me/dob', isAuthenticated, userController.updateDateOfBirth);
router.get('/me', isAuthenticated, userController.getAuthUserInfo);

module.exports = router;
