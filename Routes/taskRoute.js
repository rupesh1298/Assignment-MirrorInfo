const express=require('express');
const { getTasks, createTask, updateTask, deleteTask } = require('../Controller/taskController');
const router=express.Router();

router.get("/",getTasks);
router.post("/create",createTask);
router.put("/update/:id",updateTask);
router.delete("/delete/:id",deleteTask);

module.exports=router;