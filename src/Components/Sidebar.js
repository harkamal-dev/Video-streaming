import React from "react";
import { useSelector } from "react-redux";

const Sidebar = () => {
	const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

	if (!isMenuOpen) return null;

	return (
		<div className="w-60 shadow-lg p-4 h-screen">
			<h1 className="font-semibold">Subsciptions</h1>
			<ul>
				<li>Music</li>
				<li>Sports</li>
				<li>Live</li>
				<li>Education</li>
				<li>Gaming</li>
			</ul>
		</div>
	);
};

export default Sidebar;
