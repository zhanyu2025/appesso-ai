const router = require('express').Router();

const roleController = require('../controllers/role');
const { isAuthenticated, validateRequest } = require('../middlewares/auth');

router.get('/', roleController.getAllRoles);
router.put(
  '/:id/device',
  isAuthenticated,
  validateRequest,
  roleController.updateConnectedDevice
);

module.exports = router;
