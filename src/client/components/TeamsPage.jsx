import React from "react";
import Table from "./Table";
import { TEAMS } from "../data/data";
import '../stylesheets/homepage.css'
const TeamsPage = () => {
    return(
        <div className="teams-page">
            <h1 className="title">
            TEAMS TABLE
            </h1>
            <Table 
            key="teamsTable"
            data={TEAMS.teams} 
            headerKeys={[ "name", "member_count"]}/>
        </div>
    )
}
export default TeamsPage


 
       