import { useState } from 'react'
import Header from '../Header/Header.jsx'
import ToDoList from '../ToDoList/ToDoList.jsx'
import Input from '../Input/Input.jsx'
import style from './App.module.css'

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedData = localStorage.getItem("tasks");
    
    return storedData ? JSON.parse(storedData) : [];
  });

  function addTask(task){
    const newTask = [...tasks, {
      taskName: task, 
      status: false
    }];

    setTasks(newTask);

    saveToLocalStorage(newTask);
  }

  function updateTask(index, newValueOBJ){
    const updatedTasks = [...tasks];

    updatedTasks[index] = newValueOBJ;
    setTasks(updatedTasks);

    saveToLocalStorage(updatedTasks);
  }


  function deleteTask(newArr){
    const tasksWithDeleted = [...newArr];
    setTasks(tasksWithDeleted);

    saveToLocalStorage(tasksWithDeleted);
  }

  function saveToLocalStorage(taskOBJ){
    localStorage.setItem("tasks", JSON.stringify(taskOBJ));
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
