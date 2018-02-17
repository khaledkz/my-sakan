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
    let query = req.body;


     let newQuery ={

       country:query.country,
       rentOrSale:query.rentOrSale,
      description:{
        address:{
          city:query.city,
          postCode:query.postCode,
          street:query.street,
          flatNumber:query.flatNumber,
        },
        title:query.title,
        lettingInformation:{
          price:query.price,
          dataAvailable:query.dataAvailable,
          furnishing:query.furnishing,
          lettingType:query.lettingType,
          reducedOnWebsite:query.reducedOnWebsite,
          deposit:query.deposit
        },
        fullDescription:query.fullDescription
      }
    };

    const cb=()=>{
        res.redirect('/')
    }

    flatDB.createFlat(newQuery,cb)
})
 module.exports = router;
