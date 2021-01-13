import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({todos, setToDos, filteredTodos }) => {

	return (
		<div className="todo-container">
			<ul className="todo-list">
				{filteredTodos.map(todo => (
					<ToDo todos={todos} setToDos={setToDos} todo={todo} key={todo.id} text={todo.text} />
				))
				}
			</ul>
	  	</div>
	);
}

export default ToDoList;