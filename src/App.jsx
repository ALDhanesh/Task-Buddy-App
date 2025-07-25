import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/ProgressTracker'

export default function App() {
  const [tasks, setTask] = useState([]);
  
  const addTask = (task)=> {
    setTask([...tasks, task]); // update the array new and ole array
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  })

   const deleteTask = (index) => {
        setTask(tasks.filter((_, i)=> i != index));
  }

  const updateTask = (index, updatedTask)=> {
    let newTasks = [...tasks];
    newTasks[index] = updatedTask;
    setTask(newTasks);
  }

  const clearTask = () => {
    setTask([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>TaskBuddy</h1>
        <p className='tagline'>Your Friendly Task Manager</p>
      </header>
      <TaskForm addTask={addTask}/>
      <TaskList tasks={tasks} deleteTask={deleteTask} updateTask={updateTask}/>
      <ProgressTracker tasks={tasks}/>

      {tasks.length > 0 && (
      <button className='clear-btn' onClick={clearTask}>Clear Tasks</button>
    )}
    </div>
  )
}
