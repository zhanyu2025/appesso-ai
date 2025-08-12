const router = require('express').Router();

const roleController = require('../controllers/role');

router.get('/', roleController.getAllRoles);

module.exports = router;
