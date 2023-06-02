import React from "react";
import { useParams } from "react-router";

const TeamMembers = () => {
	const { teamId } = useParams();
	console.log(teamId);
	return <div>Team Members</div>;
};

export default TeamMembers;
