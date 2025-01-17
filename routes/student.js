const express = require('express')
const router = express.Router()
const student = require('../controllers/student')
const { checkToken } = require('../middlewares/auth')

router.get('/ping', student.ping) // 핑
router.post('/', student.createStudent)
router.post('/login', student.loginStudent)
router.get('/', checkToken, student.getStudentInfo)
router.put('/', checkToken, student.editStudentInfo)

module.exports = router