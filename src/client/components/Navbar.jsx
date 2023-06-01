import React from "react";
import {Link} from 'react-router-dom'
import '../stylesheets/homepage.css'
import Drawer from "./Drawer";
const Navbar = ({drawerOpen, setDrawerOpen}) => {
    return(
            <div className="nav-bar">
                <img className="logo" alt="SprintFWD-logo" src="https://www.sprintfwd.com/images/sprintfwd.svg"/>
                <div>
                    <Link className='btn-link' to='/members-page'>Members Page</Link>
                    <Link className='btn-link' to='/teams-page'>Teams Page</Link>
                    <Link className='btn-link' to='/to-do-list'>To Do List</Link>
                </div>
               <button className={`hamburger-icon ${drawerOpen ? 'open' : ''}`} onClick={() => setDrawerOpen(!drawerOpen)}>      
                    <div className="hamburger-1"></div>
                    <div className="hamburger-2"></div>
                </button>  
                <Drawer drawerOpen={drawerOpen}>
                    <Link className='drawer-link' to='/members-page' onClick={() => setDrawerOpen(false)}>MEMBERS PAGE</Link>
                    <Link className='drawer-link' to='/teams-page' onClick={() => setDrawerOpen(false)}>TEAMS PAGE</Link>
                    <Link className='drawer-link' to='/to-do-list' onClick={() => setDrawerOpen(false)}>TO DO LIST</Link>
                </Drawer>  
            </div>
    )
}
export default Navbar