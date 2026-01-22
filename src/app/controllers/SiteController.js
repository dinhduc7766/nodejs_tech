const Course = require('../models/Course');

class SiteController {
    // [Get] / => home
    index(req, res) {
        Course.find({})
            .then(courses => {
                res.json(courses);
            })
            .catch(err => {
                res.status(400).json({ err: 'Error!' });
            });
        // res.render('home');
    }
    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
