import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
	return (
		<div className="main-container">
			<div className="form-container">
				<form className="form">
					<div className="form-field">
						<h1>Login</h1>
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
							<input
								type="checkbox"
								id="remember-me"
								name="remember-me"
								value="remember-me"
							/>
							<label htmlFor="remember-me"> Remember me</label>
						</div>
						<Link to="/login" className="btn btn-link">
							Forgot password?
						</Link>
					</div>
					<button className="btn btn-primary">Login</button>
					<p className="form-link text-center">
						Don't have an account?
						<span>
							<Link to="/signUp" className="btn btn-link">
								{" "}
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
