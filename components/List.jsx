'use client'
import { useState } from "react";
import '@styles/List.css'

export default function List() {

    const [items, setItems] = useState([]);
    const [doneItems, setDoneItems] = useState([]);

    const handleAddItem = () => {
        
        const newItem = document.getElementById("input-feild").value;

        document.getElementById("input-feild").value = "";

        if (newItem !== "") 
            setItems(prevItems => [...prevItems, newItem])

    }

    const handleRemoveItem = (index) => {
        setItems(prevItems => prevItems.filter((_, i) => i !== index)) ;
    }
    
    const handleDoneState = (index) => {
        
        const newDoneItem = items[index];
        setDoneItems(prevDoneItems => [...prevDoneItems, newDoneItem])
        
        handleRemoveItem(index);
    }
    
    const handleRemoveDoneItems = (index) => {

        setDoneItems(prevDoneItems => prevDoneItems.filter((_, i) => i !== index)) ;
    }

    const handleRestoreItem = (index) => {

        const newItem = doneItems[index];
        setItems(prevItems => [...prevItems, newItem]);

        handleRemoveDoneItems(index);
    }

    const handleModeState = () => {
        const bodyClassName = document.body.classList;
        const modeIcon = document.getElementById("mode-icon");

        if(bodyClassName == "dark") { 
            document.body.classList.replace("dark", "light");
            modeIcon.textContent = "dark_mode";
        }
        else {
            document.body.classList.replace("light", "dark");
            modeIcon.textContent = "light_mode";
        }
        
    }

    

    return(
        <div className="todolist-container">
            <header>
                <h1>To do List</h1>
                <button className="mode-btn" onClick={handleModeState}>
                    <span id="mode-icon" className="material-symbols-rounded">light_mode</span>
                </button>
            </header>

            <div className="input-label">
                <input type="text" id="input-feild" required  placeholder="type a shit..."/>
                <button className="add-btn" type="submit" onClick={handleAddItem}>Add task</button>
            </div>

            

            <ul id="not-finished">
                {items.map((item, index) => 
                    <li key={index}>
                        <div className="task-container">
                            <p className="task-title">{item}</p>
                            
                            <div className="btns-container">
                                <button className="done-btn" onClick={() => handleDoneState(index)}>
                                    <span id="task-icon" className="material-symbols-rounded">task_alt</span>
                                </button>
                                <button className="remove-btn" onClick={() => handleRemoveItem(index)}>
                                    <span id="delete-icon" className="material-symbols-rounded">delete</span>
                                </button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            <hr />

            <ul id="finished">
                {doneItems.map((doneitem, index) => 
                    <li key={index}>
                        <div className="task-container">
                            <p className="task-title">{doneitem}</p>
                            <div className="btns-container">
                                <button className="restore-btn" onClick={() => handleRestoreItem(index)}>
                                    <span id="delete-icon" className="material-symbols-rounded">restore</span>
                                </button>

                                <button className="remove-btn" onClick={() => handleRemoveDoneItems(index)}>
                                    <span id="delete-icon" className="material-symbols-rounded">delete</span>
                                </button>
                            </div>
                        </div>
                    </li>
                )}
            </ul>

            

        </div>
    );
}