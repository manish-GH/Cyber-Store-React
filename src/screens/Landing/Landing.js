import React from "react";
import { Link } from "react-router-dom";
import "./Landing.css";

const Landing = () => {
	return (
		<div className="main-container">
			<div className="landing-page-banner-container">
				<img
					className="landing-page-banner-img"
					src={require("../../assets/landing-page/banner.jpeg")}
					alt="books on a sofa"
				/>
				<div className="landing-page-text">
					<p>A SOFA,</p>
					<p>A GOOD</p>
					<p>BOOK</p>
					<p>AND YOU.</p>
					<Link to="/product" className="btn landing-page-text-cta">
						SHOP NOW <i className="fas fa-arrow-right"></i>
					</Link>
				</div>
			</div>
			<h1 className="main-header text-center">Discover Your Next Book</h1>
			<div className="main-content">
				<h2 className="main-content-header text-center">BESTSELLERS</h2>
				<div className="main-content-list">
					<div className="card-set">
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
					</div>
					<div className="card-set">
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
					</div>
				</div>
				<div className="main-content-dash-container">
					<div className="main-content-dash"></div>
				</div>
				<h2 className="main-content-header text-center">RECOMMENDED BOOKS</h2>
				<div className="main-content-list">
					<div className="card-set">
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
					</div>
					<div className="card-set">
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
						<div className="card card-vertical">
							<img
								className="card-img"
								src={require("../../assets/books/fountainhead.jpg")}
								alt="random book"
							/>
						</div>
					</div>
				</div>
				<div className="main-content-dash-container">
					<div className="main-content-dash"></div>
				</div>
				<h2 className="main-content-text text-center">THERE'S NO</h2>
				<h2 className="main-content-text text-center">SUCH THING AS TOO</h2>
				<h2 className="main-content-text text-center">MANY BOOKS</h2>
				<div className="text-center">
					<Link to="/product" className="btn btn-secondary">
						Start Reading
					</Link>
				</div>
			</div>
			<h1 className="main-header-author text-center">Featured authors</h1>
			<div className="author-container">
				<div className="card-set card-author">
					<div className="card card-vertical">
						<div>
							<div className="image-container">
								<img
									src={require("../../assets/authors/AynRand.jpg")}
									alt="random author"
									className="image image-round"
								/>
							</div>
							<h3 className="card-heading">Ayn Rand</h3>
						</div>
					</div>
					<div className="card card-vertical">
						<div>
							<div className="image-container">
								<img
									src={require("../../assets/authors/AynRand.jpg")}
									alt="random author"
									className="image image-round"
								/>
							</div>
							<h3 className="card-heading">Ayn Rand</h3>
						</div>
					</div>
					<div className="card card-vertical">
						<div>
							<div className="image-container">
								<img
									src={require("../../assets/authors/AynRand.jpg")}
									alt="random author"
									className="image image-round"
								/>
							</div>
							<h3 className="card-heading">Ayn Rand</h3>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Landing;
