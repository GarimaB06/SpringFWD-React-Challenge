import React from "react";
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
        <>
            <div>Routed to  Navbar</div>
            <Link to='/members-page'>Members Page</Link>
            <Link to='/teams-page'>Teams Page</Link>
            <Link to='/to-do-list'>To Do List</Link>
        </>
    )
}
export default Navbar