import React, {useEffect, useState} from "react";

const Form = ({setStatus, inputText, todos, setTodos, setInputText}) => {

    const [inputClass, setInputClass] = useState("todo-input");

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    }

    const validateInputValue = (boo) => {
        if(boo) {
            setInputClass(`todo-input`);
        } else {
            setInputClass(`todo-input inputError`);
        }
    }

    const checkInputValue = () => {
        if (inputText === ""){
            validateInputValue(false);
            return false;
        } else {
            validateInputValue(true)
            return true;
        }
    }

    const submitTodoHandler = (e) => {
        e.preventDefault();
        let checkErrorValue = checkInputValue();
        if(checkErrorValue){
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
    }

    const statusHandler = (e) => {
        setStatus(e.target.value);
    }


    return (
        <form>
            <input value={inputText} onChange={inputTextHandler} type="text" className={inputClass}/>
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