const express = require('express');
const router = express.Router();
const taskController = require('../controller/taskController');

router.post('/',async (req,res)=>{
    try{
      let data = await taskController.createTask(req.body);
      res.status(201).json({
        status:"success",
        data
      })
    }catch(err){
        res.status(404).json({
            status:"failed",
            message:err
        })
    }
})


router.get('/',async (req,res)=>{
  try{
    let data = await taskController.listTask();
    res.status(200).json({
      status:"success",
      data
    })
  }catch(err){
      res.status(404).json({
          status:"failed",
          message:err
      })
  }
})


router.get('/:id',async (req,res)=>{
  try{
    let data = await taskController.findByIdTask(req.params.id);
    if(!data){
      res.status(404).json({
        status:"failed",
        message:"task not found"
      })
    }else{
      res.status(200).json({
        status:"success",
        data
      })
    }
 
  }catch(err){
      res.status(404).json({
          status:"failed",
          message:err
      })
  }
})




module.exports = router;