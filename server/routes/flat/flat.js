var express = require('express');
var router = express.Router();

 router.get('/add', function(req, res, next) {
    res.render('flat-add')
})

router.get('/edit', function(req, res, next) {
    res.render('flat-edit-list')
})

router.post('/add',(req, res, next)=>{
    console.log(req.body)
    res.redirect('/')
})
 module.exports = router;
