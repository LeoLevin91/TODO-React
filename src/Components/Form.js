import React, {useEffect, useState} from "react";

const Form = ({setStatus, inputText, todos, setTodos, setInputText}) => {

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {
                text: inputText,
                complited: false,
                id: todos.length
            }
        ]);
        setInputText("");
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input"/>
            <button onClick={submitTodoHandler} className="todo-button" type="submit">
                Set
            </button>
            <div className="select">
                <select onChange={statusHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>

        </form>
    )


}

export default Form;