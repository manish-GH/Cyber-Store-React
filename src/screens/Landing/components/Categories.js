import React from "react";
import { BESTSELLERS, RECOMMENDED } from "../../../data/landingPageData";
import { BookList } from "./BookList";
import { Link } from "react-router-dom";

export const Categories = () => {
	return (
		<>
			<h1 className="main-header text-center">Discover Your Next Book</h1>
			<div className="main-content">
				<h2 className="main-content-header text-center">BESTSELLERS</h2>
				<BookList bookList={BESTSELLERS} />
				<div className="main-content-dash-container">
					<div className="main-content-dash"></div>
				</div>
				<h2 className="main-content-header text-center">RECOMMENDED BOOKS</h2>
				<BookList bookList={RECOMMENDED} />
				<div className="main-content-dash-container">
					<div className="main-content-dash"></div>
				</div>
				<h2 className="main-content-text text-center">THERE'S NO</h2>
				<h2 className="main-content-text text-center">SUCH THING AS TOO</h2>
				<h2 className="main-content-text text-center">MANY BOOKS</h2>
				<div className="text-center">
					<Link to="/productList" className="btn btn-secondary">
						Start Reading
					</Link>
				</div>
			</div>
		</>
	);
};
