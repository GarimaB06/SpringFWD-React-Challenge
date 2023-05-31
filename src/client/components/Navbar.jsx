import React from "react";
import {Link} from 'react-router-dom'
import '../stylesheets/homepage.css'
const Navbar = () => {
    return(
        <div className="nav-bar">
            {/* <div className="nav-bar">CHOOSE A TABLE</div> */}
            <Link className='btn-link' to='/members-page'>MEMBERS PAGE</Link>
            <Link className='btn-link' to='/teams-page'>TEAMS PAGE</Link>
            <Link className='btn-link' to='/to-do-list'>TO DO LIST</Link>
        </div>
    )
}
export default Navbar