import React from "react";
import "./Cart.css";

const Cart = () => {
	return (
		<div className="main-container">
			<div className="main-grid-container">
				<h3 className="text-center">My Cart</h3>
				<div className="main-grid-items-bill">
					<div></div>
					<section className="main-items">
						<div className="card card-horizontal">
							<div>
								<img
									className="card-img"
									src={require("../../assets/books/fountainhead.jpg")}
									alt="random"
								/>
							</div>
							<div className="card-horizontal-data">
								<h3 className="card-heading">The Fountainhead</h3>
								<div className="card-text">
									<p>by Ayn Rand</p>
									<p>₹237.00</p>
									<div className="item-quantity">
										<p>Quantity:</p>
										<button className="btn btn-icon">
											<i className="fas fa-minus"></i>
										</button>
										<p>1</p>
										<button className="btn btn-icon">
											<i className="fas fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="card-btns">
									<button className="btn btn-secondary">
										Remove from cart
									</button>
									<button className="btn btn-secondary">
										Move to Wishlist
									</button>
								</div>
							</div>
						</div>
						<div className="card card-horizontal">
							<div>
								<img
									className="card-img"
									src={require("../../assets/books/fountainhead.jpg")}
									alt="random"
								/>
							</div>
							<div className="card-horizontal-data">
								<h3 className="card-heading">The Fountainhead</h3>
								<div className="card-text">
									<p>by Ayn Rand</p>
									<p>₹237.00</p>
									<div className="item-quantity">
										<p>Quantity:</p>
										<button className="btn btn-icon">
											<i className="fas fa-minus"></i>
										</button>
										<p>1</p>
										<button className="btn btn-icon">
											<i className="fas fa-plus"></i>
										</button>
									</div>
								</div>
								<div className="card-btns">
									<button className="btn btn-secondary">
										Remove from cart
									</button>
									<button className="btn btn-secondary">
										Move to wishlist
									</button>
								</div>
							</div>
						</div>
					</section>
					<section className="main-bill">
						<div className="bill-container card">
							<h3 className="bill-header">Price Details</h3>
							<hr className="bill-hr-line" />
							<div className="bill-list">
								<div className="bill-list-detail">Price</div>
								<div className="bill-list-price">₹1499</div>
							</div>
							<div className="bill-list">
								<div className="bill-list-detail">Discount</div>
								<div className="bill-list-price">-₹499</div>
							</div>
							<div className="bill-list">
								<div className="bill-list-detail">Delivery Charges</div>
								<div className="bill-list-price">₹99</div>
							</div>
							<hr className="bill-hr-line" />
							<div className="bill-list bill-total">
								<div className="bill-list-detail">TOTAL AMOUNT</div>
								<div className="bill-list-price">₹1099</div>
							</div>
							<hr className="bill-hr-line" />
							<button className="btn btn-primary">Place Order</button>
						</div>
					</section>
					<div></div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
