import React from 'react'

export default function ProgressTracker({tasks}) {
  let completedTasks = tasks.filter((task)=> task.completed == true).length;
  let totaltask = tasks.length;
  let percentage = totaltask == 0 ? 0 : (completedTasks/totaltask) * 100;
  return (
    <div>
        <p>{completedTasks} out of {totaltask} completed</p>
        <div className='progress-bar'>
          <div className='progress'
          style={{width:`${percentage}%`}}></div>
        </div>
    </div>
  )
}
