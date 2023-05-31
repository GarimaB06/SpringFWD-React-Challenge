import React from "react";
import {Link} from 'react-router-dom'
import '../stylesheets/homepage.css'
const Navbar = () => {
    return(
        <div className="nav-bar">
                <img className="logo" alt="SprintFWD-logo" src="https://www.sprintfwd.com/images/sprintfwd.svg"/>
                <div className="nav-bar">
                    <Link className='btn-link' to='/members-page'>Members Page</Link>
                    <Link className='btn-link' to='/teams-page'>Teams Page</Link>
                    <Link className='btn-link' to='/to-do-list'>To Do List</Link>
                </div>
        </div>
    )
}
export default Navbar