import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import MembersPage from './client/components/MembersPage';
import ToDoList from './client/components/ToDoList';
import TeamsPage from './client/components/TeamsPage';
import Navbar from './client/components/Navbar';
import './client/stylesheets/homepage.css'
import Drawer from './client/components/Drawer';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  return (
    <div className="App">
     <Router>
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
      <Drawer drawerOpen={drawerOpen}>
          <Link className='drawer-link' to='/members-page' onClick={() => setDrawerOpen(false)}>MEMBERS PAGE</Link>
          <Link className='drawer-link' to='/teams-page' onClick={() => setDrawerOpen(false)}>TEAMS PAGE</Link>
          <Link className='drawer-link' to='/to-do-list' onClick={() => setDrawerOpen(false)}>TO DO LIST</Link>
      </Drawer>
      <Routes> 
        <Route exact
              path="/members-page" element={<MembersPage/>}/>
        <Route exact path='/to-do-list' element={<ToDoList/>}/>
        <Route exact path='/teams-page' element={<TeamsPage/>}/>
        <Route/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
