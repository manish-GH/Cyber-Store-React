import React from "react";

export const Sidebar = () => {
	return (
		<div className="main-sidebar">
			<section className="sidebar-section-filter">
				<h3 className="sidebar-header">Filters</h3>
				<button className="btn btn-clear">Clear</button>
			</section>
			{/* <!-- ADD SLIDER LATER --> */}
			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Category</legend>
						<div className="sidebar-input-component">
							<input
								type="checkbox"
								id="fiction"
								name="fiction"
								value="fiction"
							/>
							<label htmlFor="fiction"> Fiction</label>
						</div>
						<div className="sidebar-input-component">
							<input
								type="checkbox"
								id="non-fiction"
								name="non-fiction"
								value="non-fiction"
							/>
							<label htmlFor="non-fiction"> Non Fiction</label>
						</div>
					</fieldset>
				</form>
			</section>
			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Rating</legend>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="4-star-plus"
								name="rating"
								value="4-star-plus"
							/>
							<label htmlFor="4-star-plus"> 4 Stars & above</label>
						</div>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="3-star-plus"
								name="rating"
								value="3-star-plus"
							/>
							<label htmlFor="3-star-plus"> 3 Stars & above</label>
						</div>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="2-star-plus"
								name="rating"
								value="2-star-plus"
							/>
							<label htmlFor="2-star-plus"> 2 Stars & above</label>
						</div>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="1-star-plus"
								name="rating"
								value="1-star-plus"
							/>
							<label htmlFor="1-star-plus"> 1 Star & above</label>
						</div>
					</fieldset>
				</form>
			</section>
			<section className="sidebar-section">
				<form className="sidebar-input-form">
					<fieldset className="sidebar-fieldset">
						<legend className="sidebar-header"> Sort By</legend>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="low-to-high"
								name="sort-price"
								value="low-to-high"
							/>
							<label htmlFor="low-to-high"> Price - Low to High</label>
						</div>
						<div className="sidebar-input-component">
							<input
								type="radio"
								id="high-to-low"
								name="sort-price"
								value="high-to-low"
							/>
							<label htmlFor="high-to-low"> Price - High to Low</label>
						</div>
					</fieldset>
				</form>
			</section>
		</div>
	);
};
