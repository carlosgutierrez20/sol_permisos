const { Router } = require('express');
const router = Router();

const {
    guardarPermiso,
    pintarForm
} = require('../Controllers/google.controller');

router.get('/', pintarForm);
router.post('/form', guardarPermiso);

module.exports = router;