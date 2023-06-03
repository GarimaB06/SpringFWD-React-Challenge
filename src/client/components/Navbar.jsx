import React from "react";
import { Link } from "react-router-dom";
import "../stylesheets/homepage.css";
import Drawer from "./Drawer";
import STRINGS from "../data/strings";

const Navbar = ({ drawerOpen, setDrawerOpen }) => {
	return (
		<div className="nav-bar">
			<Link to="/">
				<img
					className="logo"
					alt="SprintFWD-logo"
					src="https://www.sprintfwd.com/images/sprintfwd.svg"
				/>
			</Link>
			<div>
				<Link className="btn-link" to="/">
					{STRINGS.membersPage}
				</Link>
				<Link className="btn-link" to="/teams-page">
					{STRINGS.teamsPage}
				</Link>
				<Link className="btn-link" to="/to-do-list">
					{STRINGS.toDoList}
				</Link>
			</div>
			<button
				className={`hamburger-icon ${drawerOpen ? "open" : ""}`}
				onClick={() => setDrawerOpen(!drawerOpen)}
			>
				<div className="hamburger-1"></div>
				<div className="hamburger-2"></div>
			</button>
			<Drawer drawerOpen={drawerOpen}>
				<Link
					className="drawer-link"
					to="/"
					onClick={() => setDrawerOpen(false)}
				>
					{STRINGS.membersPage.toUpperCase()}
				</Link>
				<Link
					className="drawer-link"
					to="/teams-page"
					onClick={() => setDrawerOpen(false)}
				>
					{STRINGS.teamsPage.toUpperCase()}
				</Link>
				<Link
					className="drawer-link"
					to="/to-do-list"
					onClick={() => setDrawerOpen(false)}
				>
					{STRINGS.toDoList.toUpperCase()}
				</Link>
			</Drawer>
		</div>
	);
};
export default Navbar;
