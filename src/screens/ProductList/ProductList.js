import React, { useEffect } from "react";
import { Products, Sidebar } from "./components";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { fetchUserInfo, fetchProductData } from "../../services";
import { useData } from "../../context/DataContext";
import "./ProductList.css";

const Product = () => {
	const auth = getAuth();
	const { userInfo, setUserInfo } = useData();

	//UseEffect is for page reload - WORK IN PROGRESS
	useEffect(() => {
		if (!userInfo.id) {
			(() => {
				try {
					auth.onAuthStateChanged(async (user) => {
						if (user) {
							const userData = await fetchUserInfo(user.uid);
							setUserInfo(userData);
						} else {
							const productData = await fetchProductData({});
							setUserInfo({ productData });
						}
					});
				} catch (err) {
					console.log("ERROR: ", err);
					//REPLACE THIS WITH 404 PAGE
				}
			})();
		}
	}, []);

	return (
		<div className="main-grid-sidebar-products">
			<Sidebar />
			<Products />
		</div>
	);
};

export default Product;
