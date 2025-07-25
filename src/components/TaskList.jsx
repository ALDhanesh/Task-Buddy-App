import React from 'react'

export default function TaskList({ tasks, deleteTask , updateTask}) {

  const toggleTask = (index)=> {
    const updatedTask = {...tasks[index], completed: !tasks[index].completed}
    updateTask(index, updatedTask);
  }

  return (
    <ul className='task-list'>
      {tasks.map((task, index) => (
        <li key={index} className= {task.completed ? 'completed': ''}>
          <div id='btn'> 
            <span>{task.text}</span>
            <small>({task.priority}, {task.category})</small>
          </div>

          <div>
            <button onClick={()=> toggleTask(index)}>{task.completed ? 'undo' : 'completed'}</button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  )
}
