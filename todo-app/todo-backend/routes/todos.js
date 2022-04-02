const express = require('express');
const todoCounter = require("../util/todoCounter");
const { Todo } = require('../mongo')
const router = express.Router();

/* GET todos listing. */
router.get('/', async (_, res) => {
  const todos = await Todo.find({})
  res.send(todos);
});

/* POST todo to listing. */
router.post('/', async (req, res) => {
  const todo = await Todo.create({
    text: req.body.text,
    done: false
  })
  await todoCounter.addTodo()
  res.send(todo);
});

const singleRouter = express.Router();

const findByIdMiddleware = async (req, res, next) => {
  const { id } = req.params
  req.todo = await Todo.findById(id)
  if (!req.todo) return res.sendStatus(404)

  next()
}

/* DELETE todo. */
singleRouter.delete('/', async (req, res) => {
  await req.todo.delete()  
  res.sendStatus(200);
});

/* GET todo. */
singleRouter.get('/', async (req, res) => {
	res.json(req.todo)
});

/* PUT todo. */
singleRouter.put('/', async (req, res) => {
	const { _id } = req.todo
	const options = {
		returnDocument: "after",
		useFindAndModify: false
	}
	const updatedTodo = await Todo.findByIdAndUpdate(_id, req.body, options)
	res.json(updatedTodo)
});

router.use('/:id', findByIdMiddleware, singleRouter)


module.exports = router;
