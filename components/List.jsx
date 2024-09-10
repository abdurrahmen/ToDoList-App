"use client";
import { useState } from "react";

export default function List() {
  const [items, setItems] = useState([]);
  const [doneItems, setDoneItems] = useState([]);

  const handleAddItem = () => {
    const newItem = document.getElementById("input-feild").value;

    document.getElementById("input-feild").value = "";

    if (newItem !== "") setItems((prevItems) => [...prevItems, newItem]);
  };

  const handleRemoveItem = (index) => {
    setItems((prevItems) => prevItems.filter((_, i) => i !== index));
  };

  const handleDoneState = (index) => {
    const newDoneItem = items[index];
    setDoneItems((prevDoneItems) => [...prevDoneItems, newDoneItem]);

    handleRemoveItem(index);
  };

  const handleRemoveDoneItems = (index) => {
    setDoneItems((prevDoneItems) =>
      prevDoneItems.filter((_, i) => i !== index)
    );
  };

  const handleRestoreItem = (index) => {
    const newItem = doneItems[index];
    setItems((prevItems) => [...prevItems, newItem]);

    handleRemoveDoneItems(index);
  };

  return (
      <div className="border-2 fixed p-2 rounded-lg backdrop-blur-md z-10">
        <div className="">
          <input
            id="input-feild"
            type="text"
            required
            placeholder="type a shit..."
          />
          <button className="" type="submit" onClick={handleAddItem}>
            Add task
          </button>
        </div>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <div className="">
                <p className="">{item}</p>

                <div className="">
                  <button className="" onClick={() => handleDoneState(index)}>
                    <span className="">task_alt</span>
                  </button>
                  <button className="" onClick={() => handleRemoveItem(index)}>
                    <span className="">delete</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>

        <ul>
          {doneItems.map((doneitem, index) => (
            <li key={index}>
              <div className="">
                <p className="">{doneitem}</p>
                <div className="">
                  <button className="" onClick={() => handleRestoreItem(index)}>
                    <span id="" className="material-symbols-rounded">
                      restore
                    </span>
                  </button>

                  <button
                    className=""
                    onClick={() => handleRemoveDoneItems(index)}
                  >
                    <span className="">delete</span>
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
  );
}
