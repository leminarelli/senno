let express         = require('express');
let router          = express.Router();

let async           = require('async');

let title = 'Login';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('page_login', { message: req.flash('loginMessage'),
        signupMessage: req.flash('signupMessage'),
        title: title
    });
});

router.post('/', function(req, res, next) {
    return res.redirect('/index');
});

module.exports = router;
