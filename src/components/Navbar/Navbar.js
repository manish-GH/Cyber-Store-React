import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className="nav-bar">
			<div className="nav-bar-main">
				<p className="nav-bar-logo">Cyber Store</p>
			</div>
			<div className="nav-bar-search">
				<input type="text" className="input" placeholder="Search..." />
			</div>
			<div className="nav-bar-links">
				<Link to="/cart" className="nav-bar-link">
					<i className="fas fa-shopping-cart"></i>
				</Link>
				<Link to="/wishlist" className="nav-bar-link">
					<i className="far fa-heart"></i>
				</Link>
				<Link to="/login" className="nav-bar-link">
					<button className="btn btn-secondary">Logout</button>
				</Link>
			</div>
		</nav>
	);
};

export default Navbar;
