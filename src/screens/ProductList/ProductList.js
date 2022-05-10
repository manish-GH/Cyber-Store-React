import React, { useEffect } from "react";
import { Products, Sidebar } from "./components";
import { getAuth } from "firebase/auth";
import { fetchUserInfo, fetchProductData } from "../../services";
import { useData } from "../../context/DataContext";
import "./ProductList.css";
import {
	GET_DATA_WITH_AUTH,
	GET_DATA_WITHOUT_AUTH,
} from "../../constants/types";

const Product = () => {
	const auth = getAuth();
	const { dataState, dataDispatch } = useData();

	//UseEffect is for page reload
	useEffect(() => {
		if (!dataState.id) {
			(() => {
				try {
					auth.onAuthStateChanged(async (user) => {
						if (user) {
							const userData = await fetchUserInfo(user.uid);
							dataDispatch({ type: GET_DATA_WITH_AUTH, payload: userData });
						} else {
							const productData = await fetchProductData({});
							dataDispatch({
								type: GET_DATA_WITHOUT_AUTH,
								payload: productData,
							});
						}
					});
				} catch (err) {
					console.log("ERROR: ", err);
					//REPLACE THIS WITH 404 PAGE
				}
			})();
		}
		// eslint-disable-next-line
	}, []);

	return (
		<div className="main-grid-sidebar-products">
			<Sidebar />
			<Products />
		</div>
	);
};

export default Product;
