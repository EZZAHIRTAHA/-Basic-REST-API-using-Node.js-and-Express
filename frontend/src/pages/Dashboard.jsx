import React from 'react'
import { useSelector } from 'react-redux'
import axios from axios
const Dashboard = () => {

  const user = useSelector(state=>state)
  return (
    <div>
      {user && <h1>Hello {user.name}</h1>}
    </div>
  )
}

export default Dashboard
