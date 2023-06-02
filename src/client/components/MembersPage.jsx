import React from "react";
import Table from "./Table";
import { MEMBERS_DATA, TEAMS } from "../data/data";
import "../stylesheets/tables.css";
import { Link, useParams } from "react-router-dom";

const MembersPage = () => {
	const { teamId } = useParams();
	const generatePageTitleString = () => {
		if (teamId) {
			const teamObj = TEAMS.teams.find((team) => team.id == teamId);
			const { name } = teamObj;
			return `${name.toUpperCase()} TEAM`;
		}
		return "MEMBERS TABLE";
	};
	const generateFilteredData = () => {
		if (teamId) {
			const filteredTeamMembersData = MEMBERS_DATA.members.filter(
				(member) => member.team.id == teamId
			);
			return filteredTeamMembersData;
		}
		return MEMBERS_DATA.members;
	};
	const renderTeamDatum = ({ team }) => {
		const { id, name } = team;
		return <Link to={`/teams-page/${id}`}>{name}</Link>;
	};
	const renderFunctions = {
		"team.name": renderTeamDatum,
	};
	const returnHeaderKeys = () => {
		const headerKeys = ["first_name", "last_name", "team.name"];
		if (teamId) {
			headerKeys.pop();
		}
		return headerKeys;
	};
	const headersMap = {
		first_name: "FIRST NAME",
		last_name: "LAST NAME",
		"team.name": "TEAM NAME",
	};

	return (
		<div className="members-page">
			<h1 className="title">{generatePageTitleString()}</h1>
			<Table
				headersMap={headersMap}
				renderFunctions={renderFunctions}
				data={generateFilteredData()}
				headerKeys={returnHeaderKeys()}
			/>
		</div>
	);
};
export default MembersPage;
