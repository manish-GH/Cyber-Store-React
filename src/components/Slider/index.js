import React, { useState, useEffect } from "react";
import { useData } from "../../context/DataContext";
import { PRICE_FILTER } from "../../constants/types";
import "./styles.css";

const thumbSize = 15;

export const Slider = ({ min, max, price, setPrice }) => {
	const { dataDispatch } = useData();
	const [avg, setAvg] = useState((min + max) / 2);

	const width = 250;
	const minWidth =
		thumbSize + ((avg - min) / (max - min)) * (width - 2 * thumbSize);
	const minPercent = ((price.minVal - min) / (avg - min)) * 100;
	const maxPercent = ((price.maxVal - avg) / (max - avg)) * 100;
	const styles = {
		min: {
			width: minWidth,
			left: 0,
			"--minRangePercent": `${minPercent}%`,
		},
		max: {
			width: thumbSize + ((max - avg) / (max - min)) * (width - 2 * thumbSize),
			left: minWidth,
			"--maxRangePercent": `${maxPercent}%`,
		},
	};

	const handleChange = (updatedPrice, cb, type) => {
		cb(
			type === "min"
				? { ...price, minVal: updatedPrice }
				: { ...price, maxVal: updatedPrice }
		);
		dataDispatch({
			type: PRICE_FILTER,
			payload:
				type === "min"
					? {
							minPrice: updatedPrice,
							maxPrice: price.maxVal,
					  }
					: {
							minPrice: price.minVal,
							maxPrice: updatedPrice,
					  },
		});
	};

	useEffect(() => {
		setAvg((price.maxVal + price.minVal) / 2);
	}, [price.minVal, price.maxVal]);

	return (
		<div className="sliderContainer">
			<div className="rangeContainer">
				<label htmlFor="minInput">Min</label>
				<input
					disabled
					value={price.minVal}
					/* MIGHT REQUIRE THESE COMMENTED CODES LATER */
					// onChange={(e) =>
					// 	handleChange(
					// 		e.target.value < min ? min : e.target.value,
					// 		setMinVal,
					// 		"min"
					// 	)
					// }
					id="minInput"
				/>
				<label htmlFor="maxInput">Max</label>
				<input
					disabled
					value={price.maxVal}
					// onChange={(e) =>
					// 	handleChange(
					// 		e.target.value < max ? e.target.value : max,
					// 		setMaxVal,
					// 		"max"
					// 	)
					// }
					id="maxInput"
				/>
			</div>
			<div className="slider">
				<label htmlFor="min">Minimum price</label>
				<input
					id="min"
					className="min"
					style={styles.min}
					type="range"
					step="1"
					min={min}
					max={avg}
					value={price.minVal}
					onChange={(e) =>
						handleChange(Math.round(e.target.value), setPrice, "min")
					}
				/>
				<label htmlFor="max">Maximum price</label>
				<input
					id="max"
					className="max"
					style={styles.max}
					type="range"
					step="1"
					min={avg}
					max={max}
					value={price.maxVal}
					onChange={(e) =>
						handleChange(Math.round(e.target.value), setPrice, "max")
					}
				/>
			</div>
		</div>
	);
};
