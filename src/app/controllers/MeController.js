const Course = require('../models/Course');
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /stored/courses
    storedCourses(req, res) {
        res.render('me/stored_courses');
    }
}

module.exports = new MeController();
