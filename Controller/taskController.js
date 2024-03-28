const mongoose = require("mongoose");
const Task = require("../Model/taskModel");

const getTasks = async (req, res) => {
    try {
        const getAll = await Task.find();
        //getAll contains all the data from the database wanna to formate according to the requirement that is why we are using map function
        const formatGetData = await getAll.map((task) => {
            return {
                id: task._id,
                title: task.title,
                description: task.description,
                status: task.status,
                createdAt: task.createdAt.toLocaleDateString(),
                createdTime: task.createdAt.toLocaleTimeString(),
                lastupdatedAt: task.updatedAt.toLocaleDateString(),
                lastupdatedTime: task.updatedAt.toLocaleTimeString()
            }

        })
        res.status(200).json(formatGetData);
    } catch (error) {
        res.status(404).json({ msg: "Data not found" })
    }
}

const createTask = async (req, res) => {
    const data = req.body;
    try {

        const findTask = await Task.findOne({ title: data.title });
        if (findTask) {
            return res.status(400).json({ msg: "Task already exists" });
        }
        else {
            //to print date with proper created and updated date time
            const newTask = await Task.create(data);
            const createdAt = newTask.createdAt.toLocaleDateString();
            const createdTime = newTask.createdAt.toLocaleTimeString();
            console.log(createdAt);
            console.log(createdTime);
            return res.status(200).json({id:newTask._id, title: newTask.title, description: newTask.description, status: newTask.status, createdAt: createdAt, createdTime: createdTime });
        }
    } catch (error) {
        return res.status(400).json({ msg: "Task not created" })
    }
}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const findTask = await Task.findById(id);
        if (!findTask) {
            return res.status(404).json({ msg: "Task not found" });
        } else {
            const data = req.body;
            //to print updated task with proper date and time
            const updateTask = await Task.findByIdAndUpdate(id, data, { new: true });
            const updatedAt = updateTask.updatedAt.toLocaleDateString();
            const updatedtime = updateTask.updatedAt.toLocaleTimeString();
            return res.status(200).json({ title: updateTask.title, description: updateTask.description, status: updateTask.status, lastupdatedAt: updatedAt, lastupdatedtime: updatedtime });
        }

    } catch (error) {
        res.status(400).json({ msg: "Task not updated" })
    }
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const findData = await Task.findById(id);
        if (!findData) {
            return res.status(404).json({ msg: "Task not found" });
        } else {
            const deleteTask = await Task.findByIdAndDelete(id);
            return res.status(200).json("deleted successfully");
        }
    }
    catch (error) {
        res.status(400).json({ msg: "Task not deleted" })
    }
}
module.exports = { getTasks, createTask, updateTask, deleteTask };