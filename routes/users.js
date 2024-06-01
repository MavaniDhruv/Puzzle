var express = require('express');
var router = express.Router();

var user = require('../controller/userController')

router.post('/',user.login)
router.post('/register',user.register)
router.get('/category',user.category)
router.get('/category/:id',user.categoryId)
router.get('/puzzle/:id',user.puzzleId)
router.post('/win/:id',user.winId)

module.exports = router;
