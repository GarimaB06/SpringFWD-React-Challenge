import React from "react";
import Table from "./Table";
import { TEAMS } from "../data/data";
import "../stylesheets/homepage.css";
import STRINGS from "../data/strings";

const HEADERS_MAP = {
	name: "TEAM NAME",
	member_count: "MEMBER COUNT",
};

const TeamsPage = () => {
	return (
		<div className="teams page">
			<h1 className="title">{STRINGS.teamsTable.toUpperCase()}</h1>
			<Table
				headersMap={HEADERS_MAP}
				key="teamsTable"
				data={TEAMS.teams}
				headerKeys={["name", "member_count"]}
			/>
		</div>
	);
};
export default TeamsPage;
