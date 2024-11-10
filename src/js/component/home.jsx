import React, { useState } from "react";

const Home = () => {
    const [item, setItem] = useState(""); 
    const [tasks, setTask] = useState([ 
        "Brush my teeth",
        "Prepare breakfast",
        "Study React basics",
        "Read a chapter of a book",
        "6 items remaining"
    ]);

 //agregar una tarea a la lista
    const addTask = (e) => {
        if (e.key === "Enter" && item.trim() !== "") {
            setTask([...tasks, item]); 
            setItem(""); 
        }
    };

   // eliminar una tarea ala lissta
    const deleteTask = (index) => {
        const newTasks = tasks.filter((task, i) => i !== index); 
        setTask(newTasks); 
	} 
    return (
        <div className="container">
            <h1>Things to Do</h1>  
            <div>
                <ul>
                    <li>
                        <input
                            type="text" 
                            placeholder="Add a task" 
                            value={item}
                            onChange={(e) => setItem(e.target.value)} 
                            onKeyDown={addTask} 
                        />
                    </li>
                    {tasks.map((task, index) => (
                        <li key={index}>
                            {task} 
                            <i className="fas fa-times" onClick={() => deleteTask(index)}></i> {}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Home;