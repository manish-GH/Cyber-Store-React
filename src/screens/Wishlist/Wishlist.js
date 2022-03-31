import React from "react";
import "./Wishlist.css";

const Wishlist = () => {
	return (
		<div className="main-container">
			<h2 className="text-center">My Wishlist</h2>
			<div className="wishlist-container">
				<div className="card card-vertical">
					<div>
						<img
							className="card-img"
							src={require("../../assets/books/fountainhead.jpg")}
							alt="random"
						/>
						<h3 className="card-heading">
							The Fountainhead
							<span>
								<button className="btn btn-icon">
									<i className="far fa-heart"></i>
								</button>
							</span>
						</h3>
					</div>
					<div className="card-text">
						<p>by Ayn Rand</p>
						<p>₹237.00</p>
					</div>
					<div className="card-btns">
						<button className="btn btn-secondary">Move to cart</button>
					</div>
				</div>
				<div className="card card-vertical">
					<div>
						<img
							className="card-img"
							src={require("../../assets/books/fountainhead.jpg")}
							alt="random"
						/>
						<h3 className="card-heading">
							The Fountainhead
							<span>
								<button className="btn btn-icon">
									<i className="far fa-heart"></i>
								</button>
							</span>
						</h3>
					</div>
					<div className="card-text">
						<p>by Ayn Rand</p>
						<p>₹237.00</p>
					</div>
					<div className="card-btns">
						<button className="btn btn-secondary">Move to cart</button>
					</div>
				</div>
				<div className="card card-vertical">
					<div>
						<img
							className="card-img"
							src={require("../../assets/books/fountainhead.jpg")}
							alt="random"
						/>
						<h3 className="card-heading">
							The Fountainhead
							<span>
								<button className="btn btn-icon">
									<i className="far fa-heart"></i>
								</button>
							</span>
						</h3>
					</div>
					<div className="card-text">
						<p>by Ayn Rand</p>
						<p>₹237.00</p>
					</div>
					<div className="card-btns">
						<button className="btn btn-secondary">Move to cart</button>
					</div>
				</div>
				<div className="card card-vertical">
					<div>
						<img
							className="card-img"
							src={require("../../assets/books/fountainhead.jpg")}
							alt="random"
						/>
						<h3 className="card-heading">
							The Fountainhead
							<span>
								<button className="btn btn-icon">
									<i className="far fa-heart"></i>
								</button>
							</span>
						</h3>
					</div>
					<div className="card-text">
						<p>by Ayn Rand</p>
						<p>₹237.00</p>
					</div>
					<div className="card-btns">
						<button className="btn btn-secondary">Move to cart</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Wishlist;
