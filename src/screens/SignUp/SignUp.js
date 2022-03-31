import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	return (
		<div className="main-container">
			<div className="form-container">
				<form className="form">
					<div className="form-field">
						<h1>SignUp</h1>
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="input"
							placeholder="Enter Email..."
						/>
					</div>
					<div className="form-field">
						<label htmlFor="password" className="form-label">
							Password
						</label>
						<input
							type="password"
							id="password"
							className="input"
							placeholder="Enter Password..."
						/>
					</div>
					<div className="form-extra-features">
						<div className="form-extra-input">
							<input type="checkbox" id="terms" name="terms" value="terms" />
							<label htmlFor="terms"> I accept all Terms & Conditions</label>
						</div>
					</div>
					<button className="btn btn-primary">Create new account</button>
					<p className="form-link text-center">
						Already have an account?
						<span>
							<Link to="/login" class="btn btn-link">
								{" "}
								Login
							</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
