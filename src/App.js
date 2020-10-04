import React, {useState, useEffect} from 'react';
import './App.css';
import SetName from "./Components/SetName";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

    const [inputText, setInputText] =  useState("");
    const [todos, setTodos] = useState([]);
    const [status, setStatus] = useState("all");
    const [filteredTodos, setFilteredTodos] = useState([]);

    const filtedHandler = () => {
        switch (status) {
            case "completed":
                console.log("Completed");
                setFilteredTodos(todos.filter(todo => todo.complited === true));
                break;
            case "uncompleted":
                console.log("Uncompleted");
                setFilteredTodos(todos.filter(todo => todo.complited === false));
                break;
            default:
                console.log("Default");
                setFilteredTodos(todos);
                break;
        }
    }

    useEffect(() => {
        filtedHandler();
    }, [todos,status]);


    return (
      <div className="App">
          <header>
            <h1>Leon`s Todo List</h1>
            {/*  <SetName/>*/}
          </header>


          <Form setStatus={setStatus} inputText={inputText} todos={filteredTodos} setTodos={setTodos} setInputText={setInputText}/>
          <TodoList setTodos={setTodos} todos={filteredTodos}/>
      </div>
    );
}

export default App;
