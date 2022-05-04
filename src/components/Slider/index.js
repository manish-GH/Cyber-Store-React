import React, { useState, useEffect } from "react";
import "./styles.css";

const thumbSize = 15;

export const Slider = ({ min, max }) => {
	const [avg, setAvg] = useState((min + max) / 2);
	const [minVal, setMinVal] = useState(min);
	const [maxVal, setMaxVal] = useState(max);

	const width = 250;
	const minWidth =
		thumbSize + ((avg - min) / (max - min)) * (width - 2 * thumbSize);
	const minPercent = ((minVal - min) / (avg - min)) * 100;
	const maxPercent = ((maxVal - avg) / (max - avg)) * 100;
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

	useEffect(() => {
		setAvg((maxVal + minVal) / 2);
	}, [minVal, maxVal]);

	return (
		<div className="sliderContainer">
			<div className="rangeContainer">
				<label htmlFor="minInput">Min</label>
				<input
					value={minVal}
					onChange={(e) =>
						setMinVal(e.target.value < min ? min : e.target.value)
					}
					id="minInput"
				/>
				<label htmlFor="maxInput">Max</label>
				<input
					value={maxVal}
					onChange={(e) =>
						setMaxVal(e.target.value < max ? e.target.value : max)
					}
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
					value={minVal}
					onChange={(e) => setMinVal(Math.round(e.target.value))}
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
					value={maxVal}
					onChange={(e) => setMaxVal(Math.round(e.target.value))}
				/>
			</div>
		</div>
	);
};
