import React from "react";
import { useData } from "../../../context/DataContext";
import { ProductCard } from "./ProductCard";

export const Products = () => {
	const { userInfo } = useData();
	// const productList = userInfo.productData;
	return (
		<div className="main-products">
			{userInfo.productData?.map((productData) => (
				<ProductCard productData={productData} key={productData.id} />
			))}
		</div>
	);
};
