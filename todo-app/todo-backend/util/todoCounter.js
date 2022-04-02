const redis = require("../redis")

const addedTodos = "added_todos";

const getTodos = async () => {
	const todoCount = await redis.getAsync(addedTodos) ?? 0
	return +todoCount
};

const addTodo = async () => {
	const todosCount = await getTodos();
	redis.setAsync(addedTodos, todosCount + 1)
}

module.exports = {
	getTodos,
	addTodo,
}