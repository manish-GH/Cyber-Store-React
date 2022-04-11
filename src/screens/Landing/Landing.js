import React from "react";
import { Banner, AuthorList, Categories } from "./components";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="main-container">
			<Banner />
			<h1 className="main-header text-center">Discover Your Next Book</h1>
			<Categories />
			<h1 className="main-header-author text-center">Featured authors</h1>
			<AuthorList />
		</div>
	);
};

export default Landing;
