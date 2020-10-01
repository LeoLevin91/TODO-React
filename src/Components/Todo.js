import React from "react";
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';


const Todo = ({todoText}) => {

    return(
        <div className={"todo"}>
            <li className={"todo-item"}>{todoText}</li>
            <button className={"check"}>
                <AddCircleOutlineIcon
                    style={{"color":"white"}}
                />
            </button>
            <button className={"trash"}>
                <DeleteForeverIcon
                    style={{"color":"white"}}
                />
            </button>
        </div>
    );
}

export default Todo;