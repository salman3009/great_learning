const TaskSchema = require('../models/taskModal');

async function createTask(data) {
    try {

        const task = new TaskSchema({
            title: data.title,
            description: data.description,
            details:data.details
        })

        let result = await task.save();
        return result;

    } catch (err) {
        return err;
    }
}


async function listTask() {
    try {

        let result = await TaskSchema.find();
        return result;

    } catch (err) {
        return err;
    }
}

async function findByIdTask(id) {
    try {

        let result = await TaskSchema.findById(id);
        return result;

    } catch (err) {
        return err;
    }
}

module.exports = {
    createTask,
    listTask,
    findByIdTask
}