const express = require("express");
const router = express.Router();
const User = require("../models/users");

// create a Task
router.post("/tasks", async(req, res) => {
    try{
        const task = await User.create(req.body);
        res.status(200).json({
            status : "Success",
            task : task
        })
    }catch(e){
        res.status(400).json({
            status : "Failure",
            message : e.message
        })
    }
})

// get/read data
router.get("/tasks", async(req, res) => {
    try{
        const getTask = await User.find();
       
        res.status(200).json(getTask);
    }catch(e){
        res.status(400).json({
            status : "Failed",
            message : e.message
        })
    }
})

// get a single tasks
router.get("/task/:id", async(req, res) => {
    try{
        const singleUser = await User.findOne({_id : req.params.id});
        console.log(singleUser);

        if(!singleUser){
            return res.status(404).json({
                status : "Failed",
                message : "Given taske is not present"
            })
        }
        res.status(200).json({
            status : "success",
            singleUser : singleUser
        })
    }catch(e){
        res.status(400).json({
            status : "Failure",
            message : e.message
        })
    }
})

// update the task
router.put("/task/:id", async(req, res) => {
    try{
        const updateUser = await User.findByIdAndUpdate({_id : req.params.id}, req.body, {runValidators : true, new : true});
        if(!updateUser){
            return res.status(404).json({
                status : "Failure",
                message : "Cannot able to update the given id"
            })
        }
        res.status(200).json({
            status : "Success",
            updateUser : updateUser
        })
    }catch(e){
        res.status(400).json({
            status : "Failure",
            message : e.message
        })
    }
})

// delete a task
router.delete("/task/:id", async(req, res) => {
    try{
        const deleteUser = await User.findOneAndDelete({_id : req.params.id});
        if(!deleteUser){
            return res.status(404).json({
                status : "Failure",
                message : "Cannot able to delete the given id"
            })
        }
        res.status(200).json({
            status : "Success",
            deleteUser : deleteUser
        })
    }catch(e){
        res.status(400).json({
            status : "Failure",
            message : e.message
        })
    }
})

module.exports = router;