import React from "react";
import Table from "./Table";
import { TEAMS } from "../data/data";
import "../stylesheets/homepage.css";

const TeamsPage = () => {
	// const renderTeamDatum = () => {
	// 	return "💩";
	// };
	// const renderFunctions = {
	// 	member_count: renderTeamDatum,
	// };
	return (
		<div className="teams-page">
			<h1 className="title">TEAMS TABLE</h1>
			<Table
				// renderFunctions={renderFunctions}
				key="teamsTable"
				data={TEAMS.teams}
				headerKeys={["name", "member_count"]}
			/>
		</div>
	);
};
export default TeamsPage;
