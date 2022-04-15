import { Todo } from "./List"
import { render, screen } from '@testing-library/react'

describe("list component", () => {
	const testTodo = {
		text: "test1",
		done: false,
	}

	const onClickComplete = jest.fn();
	const onClickDelete = jest.fn();

	test("renders content", () => {
		render(<Todo todo={testTodo} onClickComplete={onClickComplete} onClickDelete={onClickDelete} />)

		const element = screen.getByText(testTodo.text)
		expect(element).toBeDefined();
	})
})