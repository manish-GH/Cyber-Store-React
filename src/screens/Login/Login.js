import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userLogin } from "../../services";
import { LoginValidation } from "./LoginValidation";
import "./Login.css";

const Login = () => {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
		showPassword: false,
	});
	const [error, setError] = useState("");

	const handleFormFill = (data) => {
		if (error) setError("");
		setFormData(data);
	};

	const handleLogin = async (event) => {
		event.preventDefault();
		try {
			if (
				LoginValidation(
					{ email: formData.email, password: formData.password },
					setError
				)
			) {
				const doesUserExist = await userLogin({
					email: formData.email,
					password: formData.password,
				});
				if (doesUserExist) {
					setFormData({
						email: "",
						password: "",
						showPassword: false,
					});
					navigate("/product");
				} else {
					setError("Enter valid credentials");
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
					<h1>Login</h1>
					{error ? <div className="form-error-msg">{error}</div> : null}
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
							type={formData.showPassword ? "text" : "password"}
							id="password"
							className="input"
							placeholder="Enter Password..."
							value={formData.password}
							onChange={(event) =>
								handleFormFill({ ...formData, password: event.target.value })
							}
						/>
						<span
							onClick={() =>
								handleFormFill({
									...formData,
									showPassword: !formData.showPassword,
								})
							}
						>
							{formData.showPassword ? (
								<i className="fas fa-eye-slash"></i>
							) : (
								<i className="fas fa-eye"></i>
							)}
						</span>
					</div>
					{/* TODO: Implement Remember Me later */}
					<div className="form-extra-features">
						<div className="form-extra-input">
							<input
								type="checkbox"
								id="remember-me"
								name="remember-me"
								value="remember-me"
							/>
							<label htmlFor="remember-me"> Remember me</label>
						</div>
						{/* TODO: Implement Forgot Password later */}
						<Link to="/login" className="btn btn-link">
							Forgot password?
						</Link>
					</div>
					<button
						onClick={(event) => handleLogin(event)}
						className="btn btn-primary"
					>
						Login
					</button>
					<p className="form-link text-center">
						Don't have an account?{" "}
						<span>
							<Link to="/signUp" className="btn btn-link">
								SignUp
							</Link>
						</span>
					</p>
				</form>
			</div>
		</div>
	);
};

export default Login;
