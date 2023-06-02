import './App.css';
import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import MembersPage from './client/components/MembersPage';
import ToDoList from './client/components/ToDoList';
import TeamsPage from './client/components/TeamsPage';
import Navbar from './client/components/Navbar';
import './client/stylesheets/homepage.css'
import TeamMembers from './client/components/TeamsMembers';

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const [input, setInput] = useState("")
  const [list, setList] = useState([]) 
  
  return (
    <div className="App">
     <Router>
      <Navbar drawerOpen={drawerOpen} setDrawerOpen={setDrawerOpen}/>
      <Routes> 
        <Route exact
              path="/members-page" element={<MembersPage/>}/>
        <Route exact path='/to-do-list' element={<ToDoList input={input} setInput={setInput} list={list} setList={setList}/>}/>
        <Route exact path='/teams-page' element={<TeamsPage/>}/>
        <Route exact path='/teams-page/:teamId' element={<TeamMembers/>}/>
        <Route/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
