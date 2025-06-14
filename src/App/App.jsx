import { useState } from 'react'
import Header from '../Header/Header.jsx'
import ToDoList from '../ToDoList/ToDoList.jsx'
import Input from '../Input/Input.jsx'
import style from './App.module.css'

function App() {
  const [tasks, setTasks] = useState([]);

  function addTask(task){
    setTasks([...tasks, {
      taskName: task, 
      status: false
    }]);
  }

  function updateTask(index, newValue){
    const updatedTasks = [...tasks];

    updatedTasks[index] = newValue;
    setTasks(updatedTasks);
  }


  function deleteTask(newArr){
    setTasks([...newArr]);
  }
  
  
  return (
      <div className={style.parent}>
        <Header/>
        <Input addTask={addTask} tasks={tasks}/>
        <ToDoList arr={tasks} deleteTask={deleteTask} updateTask={updateTask}/>         
      </div>
  );
}

export default App
