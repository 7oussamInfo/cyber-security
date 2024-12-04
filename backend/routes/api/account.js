const { Router } = require("express");
const Todo = require("../../model/account.js");

const router = Router();

router.get("/", async (req, res) => {
  try {
    const accounts = await Todo.find();
    if (!accounts) throw new Error("No account found");
    res.status(200).json(accounts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);
  try {
    const todo = await newTodo.save();
    if (!todo) throw new Error("Something went wrong");
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
