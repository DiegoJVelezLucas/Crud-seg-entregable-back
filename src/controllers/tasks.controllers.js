const Task = require("../models/task.model");

const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.findAll({});
    res.json(tasks);
  } catch (error){
    res.status(400).json(error);
  }
};

const getTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByPk(id);
    res.json(task);
  } catch (error) {
    res.status(400).json(error);
  }
};
const createTask = async (req, res) => {
  try {
    const newTask = req.body;
    await Task.create(newTask);
    res.status(201).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const task = await Task.update(
      { title, description, completed },
      {
        where: { id },
      }
    );
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};

const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.destroy({
      where: { id },
    });
    res.status(204).send();
  } catch (error) {
    res.status(400).json(error);
  }
};
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updateTaskById,
  deleteTaskById,
};
