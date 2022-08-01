import React from 'react'
import { Link, NavLink } from 'react-router-dom'



export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-3">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/*">Use Context</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
            
            <NavLink 
            className={({isActive})=>{ return ` nav-link  ${ isActive ? ' active ' : null}`
            }}
            to={'/Home'}>
             Home 
            </NavLink>
        </li>
        <li>
          <NavLink 
          className={({isActive})=>{ return ` nav-link  ${isActive ? ' active ' : null}`
        }}
           to={'/Login'}>Login</NavLink> 
        </li>
        <li>
          <NavLink 
          className={({isActive})=>{ return ` nav-link  ${isActive ? ' active ' : null}`
        }}
           to={'/About'}>About</NavLink> 
        </li>
      </ul>
    </div>
  </div> 
</nav>
  )
}
