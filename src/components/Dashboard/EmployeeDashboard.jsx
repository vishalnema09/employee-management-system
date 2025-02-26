import React from 'react'
import Header from '../Other/Header'
import TasksNotification from '../Other/TasksNotification'
import Tasks from '../TaskList/Tasks'

const EmployeeDashboard = (props) => {
  return (
    <div>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TasksNotification data={props.data}/>
        <Tasks data={props.data}/>
    </div>
  )
}

export default EmployeeDashboard