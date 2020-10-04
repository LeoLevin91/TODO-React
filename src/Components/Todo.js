import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Todo = ({setTodos, todos, todo, todoText}) => {

    const deleteHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }

    const  completeHandler = () => {
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item,
                    complited: !item.complited
                };
            }
            return item;
        }));
        console.log(todos)
    }

    return(
        <div className={"todo"}>
            <li className={`todo-item ${todo.complited ? "complited": ""}`}>{todoText}</li>
            <button className={"check"} onClick={completeHandler}>
                <AddCircleOutlineIcon
                    style={{"color":"white"}}
                />
            </button>
            <button className={"trash"} onClick={deleteHandler}>
                <DeleteForeverIcon
                    style={{"color":"white"}}
                />
            </button>
        </div>
    );
}

export default Todo;