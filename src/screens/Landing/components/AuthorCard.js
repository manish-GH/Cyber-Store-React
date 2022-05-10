import React from "react";

export const AuthorCard = ({ authorData }) => {
	const { author, image } = authorData;
	return (
		<div className="card card-vertical landing-page-card">
			<div>
				<div className="image-container">
					<img className="image image-round" src={image} alt={author} />
				</div>
				<h3 className="card-heading">{author}</h3>
			</div>
		</div>
	);
};
