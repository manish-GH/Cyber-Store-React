import React from "react";
import { useData } from "../../../context/DataContext";
import { ProductCard } from "./ProductCard";

export const Products = () => {
	const { dataState } = useData();
	return (
		<div className="main-products">
			{dataState.toDisplayProductData?.map((data) => (
				<ProductCard productData={data} key={data.id} />
			))}
		</div>
	);
};
