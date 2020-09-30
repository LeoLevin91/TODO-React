import React, {useState} from 'react';
import './App.css';
import SetName from "./Components/SetName";
import Form from "./Components/Form";
import TodoList from "./Components/TodoList";

function App() {

    const [inputText, setInputText] =  useState("");



    return (
      <div className="App">
          <header>
            {/*<h1>Leon`s Todo List</h1>*/}
              <SetName/>
          </header>

          {/*Отправляем функцию setInputText
            как props к Form, где изменяем значение inputText
          */}
          <Form setInputText={setInputText}/>
          <TodoList/>
      </div>
    );
}

export default App;
