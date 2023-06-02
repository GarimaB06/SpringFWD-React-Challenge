import React from "react";
import "../stylesheets/drawer.css";

const Drawer = ({ children, drawerOpen }) => {
	return <div className={`drawer ${drawerOpen ? "open" : ""}`}>{children}</div>;
};
export default Drawer;
