import { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");
  const [dragIndex, setDragIndex] = useState(null);

  const addTask = () => {
    if (!input.trim()) return;

    const newTask = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    setInput("");
  };

  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  const handleDragStart = (index) => {
    setDragIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (dropIndex) => {
    if (dragIndex === null) return;

    const updatedTasks = [...tasks];
    const draggedItem = updatedTasks[dragIndex];

    updatedTasks.splice(dragIndex, 1);
    updatedTasks.splice(dropIndex, 0, draggedItem);

    setTasks(updatedTasks);
    setDragIndex(null);
  };

  return (
    <div className="container">
      <h2>Sortable To-Do List</h2>

      <div className="input-section">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              e.preventDefault(); 
              addTask();
            }
          }}
          placeholder="Enter a Task"
        />
        <button className="add-btn" onClick={addTask}>
          Add
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={task.id}
            className={`task-item ${task.completed ? "completed" : ""}`}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={handleDragOver}
            onDrop={() => handleDrop(index)}
          >
            <span
              onClick={() => toggleTask(task.id)}
              className="task-text"
            >
              {task.text}
            </span>

            <button
              onClick={() => deleteTask(task.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
