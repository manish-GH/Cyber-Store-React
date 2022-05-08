import React, { createContext, useContext, useReducer } from "react";
import {
	GET_DATA_WITHOUT_AUTH,
	GET_DATA_WITH_AUTH,
	CLEAR_FILTERS,
	CATEGORY_FILTER,
	RATING_FILTER,
	SORT_FILTER,
	PRICE_FILTER,
} from "../constants/types";

const DataContext = createContext();

const defaultState = {
	id: "",
	username: "",
	email: "",
	cart: [],
	wishlist: [],
	orders: [],
	address: [],
	productData: [],
	toDisplayProductData: [],
	category: [],
	rating: 0,
	sort: "default",
	minPrice: 0,
	maxPrice: 2000,
};

const dataReducer = (state, action) => {
	switch (action.type) {
		case GET_DATA_WITHOUT_AUTH:
			return {
				...state,
				productData: action.payload,
				toDisplayProductData: action.payload,
			};
		case GET_DATA_WITH_AUTH:
			return {
				...state,
				...action.payload,
			};
		case CLEAR_FILTERS:
			return {
				...state,
				category: [],
				rating: 0,
				sort: "default",
				minPrice: 0,
				maxPrice: 2000,
				toDisplayProductData: state.productData,
			};
		case CATEGORY_FILTER:
			return {
				...state,
				category: [
					...(state.category.includes(action.payload)
						? state.category.filter((item) => item !== action.payload)
						: [...state.category, action.payload]),
				],
				toDisplayProductData: state.productData
					.filter(
						(item) =>
							item.discountPrice <= state.maxPrice &&
							item.discountPrice >= state.minPrice &&
							item.ratting >= state.rating &&
							(state.category?.includes(action.payload) &&
							state.category.length === 1
								? ["Fiction", "Non-fiction"]
								: state.category?.includes(action.payload)
								? state.category?.filter((item) => item !== action.payload)
								: [...state.category, action.payload]
							)?.includes(item.genre)
					)
					.sort((a, b) =>
						state.sort === "low-to-high"
							? a.discountPrice - b.discountPrice
							: state.sort === "high-to-low"
							? b.discountPrice - a.discountPrice
							: 0
					),
			};

		case RATING_FILTER:
			return {
				...state,
				rating: action.payload,
				toDisplayProductData: state.productData
					.filter(
						(item) =>
							item.discountPrice <= state.maxPrice &&
							item.discountPrice >= state.minPrice &&
							item.ratting >= action.payload &&
							(state.category.length === 0
								? ["Fiction", "Non-fiction"]
								: state.category
							)?.includes(item.genre)
					)
					.sort((a, b) =>
						state.sort === "low-to-high"
							? a.discountPrice - b.discountPrice
							: state.sort === "high-to-low"
							? b.discountPrice - a.discountPrice
							: 0
					),
			};
		case SORT_FILTER:
			return {
				...state,
				sort: action.payload,
				toDisplayProductData: [
					...state.productData.filter(
						(item) =>
							item.discountPrice <= state.maxPrice &&
							item.discountPrice >= state.minPrice &&
							item.ratting >= state.rating &&
							(state.category.length === 0
								? ["Fiction", "Non-fiction"]
								: state.category
							)?.includes(item.genre)
					),
				].sort((a, b) =>
					action.payload === "low-to-high"
						? a.discountPrice - b.discountPrice
						: action.payload === "high-to-low"
						? b.discountPrice - a.discountPrice
						: 0
				),
			};

		case PRICE_FILTER:
			return {
				...state,
				minPrice: action.payload.minPrice,
				maxPrice: action.payload.maxPrice,
				toDisplayProductData: state.productData
					.filter(
						(item) =>
							item.discountPrice <= action.payload.maxPrice &&
							item.discountPrice >= action.payload.minPrice &&
							item.ratting >= state.rating &&
							(state.category.length === 0
								? ["Fiction", "Non-fiction"]
								: state.category
							)?.includes(item.genre)
					)
					.sort((a, b) =>
						state.sort === "low-to-high"
							? a.discountPrice - b.discountPrice
							: state.sort === "high-to-low"
							? b.discountPrice - a.discountPrice
							: 0
					),
			};

		default:
			return defaultState;
	}
};

const DataProvider = ({ children }) => {
	const [dataState, dataDispatch] = useReducer(dataReducer, defaultState);
	const value = {
		dataState,
		dataDispatch,
	};
	return <DataContext.Provider value={value}>{children}</DataContext.Provider>;
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
