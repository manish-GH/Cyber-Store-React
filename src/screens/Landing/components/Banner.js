import React from "react";
import { Link } from "react-router-dom";

export const Banner = () => {
	return (
		<div className="landing-page-banner-container">
			<img
				className="landing-page-banner-img"
				src={require("../../../assets/landing-page/banner.jpeg")}
				alt="books on a sofa"
			/>
			<div className="landing-page-text">
				<p>A SOFA,</p>
				<p>A GOOD</p>
				<p>BOOK</p>
				<p>AND YOU.</p>
				<Link to="/productList" className="btn landing-page-text-cta">
					SHOP NOW <i className="fas fa-arrow-right"></i>
				</Link>
			</div>
		</div>
	);
};
