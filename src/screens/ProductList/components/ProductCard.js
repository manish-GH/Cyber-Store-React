import React from "react";
import { Rating } from "./Rating";

export const ProductCard = ({ productData }) => {
	const {
		author,
		image,
		name,
		actualPrice,
		discountPrice,
		inCart,
		inWishlist,
		tag,
		ratting,
	} = productData;
	return (
		<div className="card card-vertical card-product">
			<div>
				<div className="card-img-container">
					<img className="card-img book-img" src={image} alt={name} />
				</div>
				<div className="card-wishlist-btn">
					<button className="btn btn-icon">
						{inWishlist ? (
							<i className="fas fa-heart"></i>
						) : (
							<i className="far fa-heart"></i>
						)}
					</button>
				</div>
				<h3 className="card-heading">{name}</h3>
			</div>
			<div className="card-text">
				<p>{author}</p>
				<p>
					₹{discountPrice} <strike>{actualPrice}</strike>{" "}
					<span className="card-discount">
						({Math.floor(((actualPrice - discountPrice) / actualPrice) * 100)})%
					</span>
				</p>
			</div>
			<Rating rating={ratting} />

			<div className="card-btns">
				{inCart ? (
					<button className="btn btn-primary">Go to cart</button>
				) : (
					<button className="btn btn-secondary">Add to cart</button>
				)}
			</div>
			{tag ? <div className="card-badge">{tag}</div> : null}
		</div>
	);
};
