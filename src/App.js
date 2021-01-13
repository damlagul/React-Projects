import './App.css';
import React, {useState} from 'react';
import Form from './components/form';
import ToDoList from './components/ToDoList'

function App() {
	const [inputText, setInputText] = useState("");
	const [todos, setToDos] = useState([]);
	
	return (
    <div className="App">
      <header>
        <h1>ToDo List</h1>
		<p>{inputText}</p>
      </header>
      < Form inputText={inputText} todos = {todos} setToDos = {setToDos} setInputText = {setInputText}/>
      < ToDoList todos={todos} setToDos={setToDos}/>
    </div>
  	);
}

export default App;
