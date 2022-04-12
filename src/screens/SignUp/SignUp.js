import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignUpValidation } from "./SignUpValidation";
import { userSignUp } from "../../services";
import { useAuth } from "../../context/AuthContext";

const SignUp = () => {
	const navigate = useNavigate();
	const { setUserInfo } = useAuth();
	const [formData, setFormData] = useState({
		username: "",
		email: "",
		password: "",
		passwordCheck: "",
		termsAndConditions: false,
	});
	const [error, setError] = useState("");

	const handleFormFill = (data) => {
		if (error) setError("");
		setFormData(data);
	};

	const handleSignUp = async (event) => {
		event.preventDefault();
		try {
			if (
				SignUpValidation(
					{
						username: formData.username,
						email: formData.email,
						password: formData.password,
						passwordCheck: formData.passwordCheck,
						termsAndConditions: formData.termsAndConditions,
					},
					setError
				)
			) {
				const userData = await userSignUp({
					username: formData.username,
					email: formData.email,
					password: formData.password,
				});
				if (userData) {
					setFormData({
						username: "",
						email: "",
						password: "",
						passwordCheck: "",
						termsAndConditions: false,
					});
					setUserInfo(userData);
					navigate("/productList");
				} else {
					setError("Error occurred. Please try again");
				}
			}
		} catch (err) {
			console.log("ERROR: ", err);
		}
	};

	return (
		<div className="main-container">
			<div className="form-container">
				<form className="form">
					<h1>SignUp</h1>
					{error ? <div className="form-error-msg">{error}</div> : null}
					<div className="form-field">
						<label htmlFor="username" className="form-label">
							Username
						</label>
						<input
							type="text"
							id="username"
							className="input"
							placeholder="Enter Username..."
							value={formData.username}
							onChange={(event) =>
								handleFormFill({ ...formData, username: event.target.value })
							}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="email" className="form-label">
							Email
						</label>
						<input
							type="email"
							id="email"
							className="input"
							placeholder="Enter Email..."
							value={formData.email}
							onChange={(event) =>
								handleFormFill({ ...formData, email: event.target.value })
							}
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
							value={formData.password}
							onChange={(event) =>
								handleFormFill({ ...formData, password: event.target.value })
							}
						/>
					</div>
					<div className="form-field">
						<label htmlFor="confirm-password" className="form-label">
							Confirm Password
						</label>
						<input
							type="password"
							id="confirm-password"
							className="input"
							placeholder="Enter Password Again..."
							value={formData.passwordCheck}
							onChange={(event) =>
								handleFormFill({
									...formData,
									passwordCheck: event.target.value,
								})
							}
						/>
					</div>
					<div className="form-extra-features">
						<div className="form-extra-input">
							<input
								type="checkbox"
								id="terms"
								name="terms"
								value="terms"
								checked={formData.termsAndConditions}
								onChange={() =>
									handleFormFill({
										...formData,
										termsAndConditions: !formData.termsAndConditions,
									})
								}
							/>
							<label htmlFor="terms" className="form-label">
								{" "}
								I accept all Terms & Conditions
							</label>
						</div>
					</div>
					<button
						onClick={(event) => handleSignUp(event)}
						className="btn btn-primary"
					>
						Create new account
					</button>
					<p className="form-link text-center">
						Already have an account?{" "}
						<span>
							<Link to="/login" className="btn btn-link">
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
