import "./styles.css";

// export default function App() {
//   return (
//     <div className="App">
//       <h1>Hello CodeSandbox</h1>
//       <h2>Start editing to see some magic happen!</h2>
//     </div>
//   );
// }
// TodoList.js

import React, { useState } from 'react';
import './styles.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [editIndex, setEditIndex] = useState(null);
  const [editedTask, setEditedTask] = useState('');

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  const startEdit = (index) => {
    setEditIndex(index);
    setEditedTask(tasks[index]);
  };

  const saveEdit = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = editedTask;
    setTasks(updatedTasks);
    setEditIndex(null);
  };

  return (
    <div className="todo-container">
      <h2>To-Do List</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {index === editIndex ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className="save-btn" onClick={() => saveEdit(index)}>
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{task}</span>
                <div>
                  <button className="edit-btn" onClick={() => startEdit(index)}>
                    Edit
                  </button>
                  <button className="remove-btn" onClick={() => removeTask(index)}>
                    Remove
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <div>
        <input
          type="text"
          placeholder="Add a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="add-btn" onClick={addTask}>
          Add Task
        </button>
      </div>
    </div>
  );
};

export default TodoList;


