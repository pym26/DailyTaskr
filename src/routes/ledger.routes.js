const express = require('express')
const router = express.Router()
const ledgerController =   require('../controller/ledger.controller');

router.get('/', ledgerController.findAll);

router.post('/', ledgerController.create);

router.get('/:id', ledgerController.findById);

router.put('/:id', ledgerController.update);

router.delete('/:id', ledgerController.delete);
module.exports = router
