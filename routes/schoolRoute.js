const express = require('express')
const { postSchool, getSchoolsList } = require('../controllers/schoolController.js')

const router = express.Router()

router.post('/addschool',postSchool)
router.get('/listSchools',getSchoolsList)

module.exports = router;