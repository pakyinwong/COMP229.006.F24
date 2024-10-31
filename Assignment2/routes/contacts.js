var express = require('express');
var router = express.Router();

let contactsController = require('../controllers/contacts');

router.get('/', contactsController.list);
router.post('/', contactsController.create);
router.get('/:contactID', contactsController.contactGet, contactsController.contactByID);
router.put('/:contactID', contactsController.update);
router.delete('/:contactID', contactsController.remove);

module.exports = router;