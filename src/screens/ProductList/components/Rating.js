import React from "react";

export const Rating = ({ rating }) => {
	return (
		<div className="rating-container">
			<div className="rating">
				<span className="rating-star rating-star-1 rating-inactive">
					{rating === 5 ? (
						<i className="fas fa-star"></i>
					) : (
						<i className="far fa-star"></i>
					)}
				</span>
				<span className="rating-star rating-star-2 rating-inactive">
					{rating >= 4 ? (
						<i className="fas fa-star"></i>
					) : (
						<i className="far fa-star"></i>
					)}
				</span>
				<span className="rating-star rating-star-3 rating-inactive">
					{rating >= 3 ? (
						<i className="fas fa-star"></i>
					) : (
						<i className="far fa-star"></i>
					)}
				</span>
				<span className="rating-star rating-star-4 rating-inactive">
					{rating >= 2 ? (
						<i className="fas fa-star"></i>
					) : (
						<i className="far fa-star"></i>
					)}
				</span>
				<span className="rating-star rating-star-5 rating-inactive">
					{rating >= 1 ? (
						<i className="fas fa-star"></i>
					) : (
						<i className="far fa-star"></i>
					)}
				</span>
			</div>
		</div>
	);
};
