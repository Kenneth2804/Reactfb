import React, {useState} from 'react';

const TodoList = () =>{

const [tasks, setTasks] = useState([]);
const [inputValue, setInputValue] = useState('');

const handleInputChange = (e) =>{

    setInputValue(e.target.value);
}
const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      setTasks([...tasks, inputValue.trim()]);
      setInputValue('');
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

return(

    <div>
    <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter a task..."
      />
  <button onClick={handleAddTask}>Add Task</button>

  <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
)
}
export default TodoList;