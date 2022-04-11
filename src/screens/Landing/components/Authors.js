import React from "react";
import { AUTHORS } from "../../../data/landingPageData";
import { AuthorCard } from "./AuthorCard";

export const Authors = () => {
	return (
		<>
			<h1 className="main-header-author text-center">Featured authors</h1>
			<div className="author-container">
				<div className="card-set card-author">
					{AUTHORS.map((authorData) => (
						<AuthorCard authorData={authorData} />
					))}
				</div>
			</div>
		</>
	);
};
