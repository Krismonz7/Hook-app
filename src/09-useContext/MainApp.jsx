import React from 'react'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from './AboutPage'
import { UserProvider } from './context/UserProvider'
import { HomePage } from './HomePage'
import { LoginPage } from './LoginPage'
import { NavBar } from './NavBar'


export const MainApp = () => {
  return (
    <UserProvider>
    <h1>MainApp</h1> 

    <NavBar/>

    <Routes>

      <Route path='/Home' element={<HomePage/>}/>
      <Route path='/Login' element={<LoginPage/>}/>
      <Route path='/About' element={<AboutPage/>}/>
      <Route path='/*' element={<Navigate to={'/About'}/>}/>
      

    </Routes>
    </UserProvider>
  )
}
