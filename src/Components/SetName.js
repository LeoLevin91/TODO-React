import React, {useEffect, useState} from "react";

const SetName = () => {
    const [name, setName] = useState("Ярик");

    useEffect(() => {
        let nameUser = prompt("Введите свое имя", "Somebody");

        setName(nameUser);

        // deps: name или null
    }, [null]);

    return(
        <h1>{name}`s ToDo list</h1>
    )
}

export default SetName;