const router = require('express').Router();

const deviceController = require('../controllers/device');
const { isAuthenticated } = require('../middlewares/auth');

router.post(
  '/:code/activation',
  isAuthenticated,
  deviceController.activateDevice
);

module.exports = router;
