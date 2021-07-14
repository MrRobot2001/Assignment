const router = require('express').Router()
const studentCtrl = require('./studentController')

router.post('/',studentCtrl.studentSave)

module.exports = router