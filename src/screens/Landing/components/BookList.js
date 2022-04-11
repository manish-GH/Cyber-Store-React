import React from "react";
import { BookCard } from "./BookCard";

export const BookList = ({ bookList }) => {
	return (
		<div className="main-content-list">
			<div className="card-set">
				{bookList.slice(0, 3).map((bookData) => (
					<BookCard bookData={bookData} key={bookData.id} />
				))}
			</div>
			<div className="card-set">
				{bookList.slice(3).map((bookData) => (
					<BookCard bookData={bookData} key={bookData.id} />
				))}
			</div>
		</div>
	);
};
