var express = require('express');
var router = express.Router();
const multer = require('multer');

var admin = require('../controller/adminController')

const storageEngine = multer.diskStorage({
    destination: "public/images",
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    },
});

const upload = multer({
    storage: storageEngine,
});

router.post('/', admin.login)
router.post('/category', upload.single('image'), admin.addCategory)
router.post('/puzzle',upload.single('image'),admin.addPuzzle)
router.get('/allUser',admin.allUser)

module.exports = router;