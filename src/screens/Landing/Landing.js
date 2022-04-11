import React from "react";
import { Banner, Authors, Categories } from "./components";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="main-container">
			<Banner />
			<Categories />
			<Authors />
		</div>
	);
};

export default Landing;
