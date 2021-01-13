import './App.css';
import React, {useState, useEffect} from 'react';
import Form from './components/form';
import ToDoList from './components/ToDoList'

function App() {

	//States
	const [inputText, setInputText] = useState("");
	const [todos, setToDos] = useState([]);
	const [status, setStatus] = useState("all");
	const [filteredTodos, setFilteredTodos] = useState([]);
	//Functions & Events
	const filterHandler = () => {
		switch(status){
			case "completed":
				setFilteredTodos(todos.filter((todo) => todo.completed === true));
				break;
			case "uncompleted":
				setFilteredTodos(todos.filter((todo) => todo.completed === false));
				break;
			default:
				setFilteredTodos(todos);
				break;
		}
	};
	//Use Effect
	useEffect(() => {
		filterHandler();
	}, [todos, status]);

	return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
		<p>{inputText}</p>
      </header>
      < Form inputText={inputText} todos = {todos} setToDos = {setToDos} setInputText = {setInputText} setStatus={setStatus} />
      < ToDoList todos={todos} setToDos={setToDos} setStatus={setStatus} filteredTodos={filteredTodos}/>
    </div>
  	);
}

export default App;
