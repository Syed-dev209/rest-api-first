const express = require('express');
const router = express.Router(); 


router.get('/',(req,resp,nxt)=>{
     resp.status(200).json({
        message:"This is student get request"
     })
})


router.post('/',(req,resp,nxt)=>{
   console.log(req.body);
   resp.status(200).json({
      message:"Succesful"
   });
})


module.exports = router;
