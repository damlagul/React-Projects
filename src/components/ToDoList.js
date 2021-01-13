import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setToDos}) => {

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{todos.map(todo => (
					<ToDo todos={todos} setToDos={setToDos} todo={todo} key={todo.id} text={todo.text} />
				))
				}
			</ul>
	  	</div>
	);
}

export default ToDoList;