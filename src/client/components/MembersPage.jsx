import React from "react";
import Table from "./Table";
import { MEMBERS_DATA } from "../data/data";
import "../stylesheets/tables.css";

const MembersPage = () => {
	return (
		<div className="members-page">
			<h1 className="title">MEMBERS TABLE</h1>
			<Table
				data={MEMBERS_DATA.members}
				headerKeys={["first_name", "last_name", "team.name"]}
			/>
		</div>
	);
};
export default MembersPage;
