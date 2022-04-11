import React from "react";
import { AUTHORS } from "../../../data/landingPageData";
import { AuthorCard } from "./AuthorCard";

export const AuthorList = () => {
	return (
		<div className="author-container">
			<div className="card-set card-author">
				{AUTHORS.map((authorData) => (
					<AuthorCard authorData={authorData} />
				))}
			</div>
		</div>
	);
};
