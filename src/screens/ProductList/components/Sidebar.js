import React, { useState } from "react";
import { Slider } from "../../../components";
import { useData } from "../../../context/DataContext";
import {
	CLEAR_FILTERS,
	CATEGORY_FILTER,
	RATING_FILTER,
	SORT_FILTER,
} from "../../../constants/types";

export const Sidebar = () => {
	const { dataDispatch } = useData();
	const [categories, setCategories] = useState({
		fiction: false,
		nonFiction: false,
	});
	const [ratings, setRatings] = useState({
		fourStar: false,
		threeStar: false,
		twoStar: false,
		oneStar: false,
	});
	const [sort, setSort] = useState({
		lowToHigh: false,
		highToLow: false,
	});
	const [price, setPrice] = useState({
		minVal: 0,
		maxVal: 2000,
	});

	const categoriesData = [
		{
			id: 1,
			name: "fiction",
			displayName: "Fiction",
			value: categories.fiction,
			onChange: () => {
				dataDispatch({ type: CATEGORY_FILTER, payload: "Fiction" });
				setCategories({ ...categories, fiction: !categories.fiction });
			},
		},
		{
			id: 2,
			name: "nonFiction",
			displayName: "Non-Fiction",
			value: categories.nonFiction,
			onChange: () => {
				dataDispatch({ type: CATEGORY_FILTER, payload: "Non-fiction" });
				setCategories({
					...categories,
					nonFiction: !categories.nonFiction,
				});
			},
		},
	];

	const ratingsData = [
		{
			id: 1,
			name: "4-star-plus",
			displayName: "4 Stars & above",
			value: ratings.fourStar,
			onChange: () => {
				dataDispatch({ type: RATING_FILTER, payload: 4 });
				setRatings({
					fourStar: true,
					threeStar: false,
					twoStar: false,
					oneStar: false,
				});
			},
		},
		{
			id: 2,
			name: "3-star-plus",
			displayName: "3 Stars & above",
			value: ratings.threeStar,
			onChange: () => {
				dataDispatch({ type: RATING_FILTER, payload: 3 });
				setRatings({
					fourStar: false,
					threeStar: true,
					twoStar: false,
					oneStar: false,
				});
			},
		},
		{
			id: 3,
			name: "2-star-plus",
			displayName: "2 Stars & above",
			value: ratings.twoStar,
			onChange: () => {
				dataDispatch({ type: RATING_FILTER, payload: 2 });
				setRatings({
					fourStar: false,
					threeStar: false,
					twoStar: true,
					oneStar: false,
				});
			},
		},
		{
			id: 4,
			name: "1-star-plus",
			displayName: "1 Star & above",
			value: ratings.oneStar,
			onChange: () => {
				dataDispatch({ type: RATING_FILTER, payload: 1 });
				setRatings({
					fourStar: false,
					threeStar: false,
					twoStar: false,
					oneStar: true,
				});
			},
		},
	];

	const sortData = [
		{
			id: 1,
			name: "low-to-high",
			displayName: "Price - Low to High",
			value: sort.lowToHigh,
			onChange: () => {
				dataDispatch({ type: SORT_FILTER, payload: "low-to-high" });
				setSort({
					lowToHigh: true,
					highToLow: false,
				});
			},
		},
		{
			id: 2,
			name: "high-to-low",
			displayName: "Price - High to Low",
			value: sort.highToLow,
			onChange: () => {
				dataDispatch({ type: SORT_FILTER, payload: "high-to-low" });
				setSort({
					lowToHigh: false,
					highToLow: true,
				});
			},
		},
	];

	const handleClear = () => {
		setCategories({
			fiction: false,
			nonFiction: false,
		});
		setRatings({
			fourStar: false,
			threeStar: false,
			twoStar: false,
			oneStar: false,
		});
		setSort({
			lowToHigh: false,
			highToLow: false,
		});
		setPrice({
			minVal: 0,
			maxVal: 2000,
		});
		dataDispatch({ type: CLEAR_FILTERS });
	};

	return (
		<div className="main-sidebar">
			<section className="sidebar-section-filter">
				<h3 className="sidebar-header">Filters</h3>
				<button className="btn btn-clear" onClick={handleClear}>
					Clear
				</button>
			</section>

			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Category</legend>
						{categoriesData.map((item) => (
							<div className="sidebar-input-component" key={item.id}>
								<input
									type="checkbox"
									id={item.name}
									name={item.name}
									checked={item.value}
									onChange={item.onChange}
								/>
								<label htmlFor={item.name}> {item.displayName}</label>
							</div>
						))}
					</fieldset>
				</form>
			</section>
			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Rating</legend>
						{ratingsData.map((item) => (
							<div className="sidebar-input-component" key={item.id}>
								<input
									type="radio"
									id={item.name}
									name="rating"
									checked={item.value}
									onChange={item.onChange}
								/>
								<label htmlFor={item.name}> {item.displayName}</label>
							</div>
						))}
					</fieldset>
				</form>
			</section>
			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Sort By</legend>
						{sortData.map((item) => (
							<div className="sidebar-input-component" key={item.id}>
								<input
									type="radio"
									id={item.name}
									name="sort-price"
									checked={item.value}
									onChange={item.onChange}
								/>
								<label htmlFor={item.name}> {item.displayName}</label>
							</div>
						))}
					</fieldset>
				</form>
				<Slider min={0} max={2000} price={price} setPrice={setPrice} />
			</section>
		</div>
	);
};
