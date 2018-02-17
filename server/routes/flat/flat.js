var express = require('express');
var router = express.Router();
const flatDB=require('../../db-client/flat/flatDB');
 router.get('/add', function(req, res, next) {
    res.render('flat-add')
})

router.get('/edit', function(req, res, next) {
    res.render('flat-edit-list')
})

router.post('/add',(req, res, next)=>{
  
    const cb=()=>{
        res.redirect('/')
    }

    flatDB.createFlat(req.body,cb)
})
 module.exports = router;
