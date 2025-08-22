const express = require('express');
const { checkSchema } = require('express-validator');

const authController = require('../controllers/auth');
const {
  generateAuthTokens,
  validateRequest,
  isAuthenticated,
} = require('../middlewares/auth');
const {
  mobileSchema,
  mobileLoginSchema, // New schema for mobile login
} = require('../services/validators');

const router = express.Router();

router.post(
  '/mobile/codes', // Changed route for mobile login
  checkSchema(mobileSchema), // Using new mobile login schema
  validateRequest,
  authController.sendMobileCode // Assuming this new controller method will be created
);

router.post(
  '/login/mobile', // Changed route for mobile login
  checkSchema(mobileLoginSchema), // Using new mobile login schema
  validateRequest,
  authController.loginMobile, // Assuming this new controller method will be created
  generateAuthTokens
);

router.post('/verify-token', authController.verifyAndGenerateAccessToken);
router.post('/logout', isAuthenticated, authController.logout);

module.exports = router;
