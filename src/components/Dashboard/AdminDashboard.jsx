import React, { useEffect, useState } from 'react'
import Header from '../Other/Header'
import CreateTask from '../Other/CreateTask'
import AllTask from '../Other/AllTask'

const AdminDashboard = (props) => {
  return (
    <div>
      <Header changeUser={props.changeUser} data={props.data}/>
      <CreateTask />
      <AllTask />
    </div>
  )
}

export default AdminDashboard