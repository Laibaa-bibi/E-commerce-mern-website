import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'

const PrivateComponents = () => {
    const verify=localStorage.getItem('user');
  return verify? <Outlet/> : <Navigate to="/Signup"/>
}

export default PrivateComponents
