import React from "react";
import { useData } from "../../../context/DataContext";
import { ProductCard } from "./ProductCard";

export const Products = () => {
	const { userInfo } = useData();
	// const productList = userInfo.productData;
	return (
		<div className="main-products">
			{userInfo.toDisplayProductData?.map((data) => (
				<ProductCard productData={data} key={data.id} />
			))}
		</div>
	);
};
