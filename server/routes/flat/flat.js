var express = require('express');
var router = express.Router();
const flatDB=require('../../db-client/flat/flatDB');
const countryClient=require('../../db-client/country/country');

 router.get('/add', function(req, res, next) {

      cb=(countries)=>{
            console.log(countries[0].order)
            res.render('flat-add',{
                countries
            })
        }
    
        countryClient.findCounrty({},cb)
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

router.get('/edit/to-rent',(req,res,next)=>{
    res.render('flat-search-options',{page:'to-rent'})
});

router.get('/edit/for-sale',(req,res,next)=>{
  res.render('flat-search-options',{page:'for-sale'})
});

router.get('/edit/for-sale/country',(req,res,next)=>{
      res.render('search-country');

})

router.get('/edit/for-sale/company',(req,res,next)=>{
      res.render('search-company');
})

router.get('/edit/for-sale/city',(req,res,next)=>{
      res.render('search-city');
})

router.get('/edit/for-sale/flatrefnumber',(req,res,next)=>{
      res.render('search-flatrefnumber');
})


router.get('/edit/to-rent/country',(req,res,next)=>{
      res.render('search-country');
})

router.get('/edit/to-rent/company',(req,res,next)=>{
      res.render('search-company');
})

router.get('/edit/to-rent/city',(req,res,next)=>{
      res.render('search-city');
})

router.get('/edit/to-rent/flatrefnumber',(req,res,next)=>{
      res.render('search-flatrefnumber');
})


 module.exports = router;
