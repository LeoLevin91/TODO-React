import React from "react";
import Todo from "./Todo"


const TodoList = ({setTodos, todos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo todo={todo} setTodos={setTodos} todos={todos} key={todo.id} todoText={todo.text}/>
                ))}
            </ul>
        </div>
    )

}

export default TodoList;