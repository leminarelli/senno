let express          = require('express');
let router           = express.Router();

let title            = 'page_home.title';

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('template_', { _view: "index", 
        title: title,
        second_navbar: null,
        user: req.user,
        ...req._header
    });
});

module.exports = router;
