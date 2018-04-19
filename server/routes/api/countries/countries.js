const express = require('express');
const router = express.Router();
const CountryClinet = require('../../../db-client/country/country');

var request = require('request');

router.get('/all',(req,res,next)=>{ 

    cb=(countries)=>{
        res.json(countries);
    }
    CountryClinet.findCounrty({},cb);
});

router.post('/contact',(req,res,next)=>{
    console.log("response")
    console.log(req.body.data)

    if(req.body.data=== undefined || req.body.data === '' || req.body.data === null) {
        return res.json({"responseCode" : 1,"responseDesc" : "Please select captcha"});
      }
      // Put your secret key here.
       const secretKey = "6LeaUVMUAAAAADpiGmyiEedYdpaxX22lGHxNO2Zc";

      // req.connection.remoteAddress will provide IP address of connected user.
      var verificationUrl = "https://www.google.com/recaptcha/api/siteverify?secret=" + secretKey + "&response=" + req.body.data + "&remoteip=" + req.connection.remoteAddress;
      // Hitting GET request to the URL, Google will respond with success or error scenario.
      request(verificationUrl,function(error,response,body) {
        body = JSON.parse(body);
        console.log(body)
        // Success will be true or false depending upon captcha validation.
        // if(body.success !== undefined && !body.success) {
        //   return res.json({"responseCode" : 1,"responseDesc" : "Failed captcha verification"});
        // }
        // res.json({"responseCode" : 0,"responseDesc" : "Sucess"});
      });
      
});

module.exports=router;