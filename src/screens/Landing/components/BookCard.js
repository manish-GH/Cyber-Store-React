import React from "react";

export const BookCard = ({ bookData }) => {
	const { book, image } = bookData;

	return (
		<div className="card card-vertical landing-page-card">
			<img className="card-img" src={image} alt={book} />
		</div>
	);
};
