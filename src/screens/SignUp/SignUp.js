import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { userSignUp } from "../../services";

const SignUp = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordCheck, setPasswordCheck] = useState("");
	const [termsAndConditions, setTermsAndConditions] = useState(false);
	const [error, setError] = useState("");

	const handleFormFill = (data, setFunction) => {
		if (error) setError("");
		setFunction(data);
	};

	const handleSignUp = async (event) => {
		event.preventDefault();
		try {
			if (
				!username ||
				!email ||
				!password ||
				!passwordCheck ||
				!termsAndConditions
			) {
				setError("Fill all the fields");
			} else if (password !== passwordCheck) {
				setError("Passwords do not match");
			} else if (password.length <= 6) {
				setError("Password should contain at least 6 characters");
			} else {
				const didUserSignUp = await userSignUp({ username, email, password });
				if (didUserSignUp) {
					setUsername("");
					setEmail("");
					setPassword("");
					setPasswordCheck("");
					navigate("/product");
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
							value={username}
							onChange={(event) =>
								handleFormFill(event.target.value, setUsername)
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
							value={email}
							onChange={(event) => handleFormFill(event.target.value, setEmail)}
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
							value={password}
							onChange={(event) =>
								handleFormFill(event.target.value, setPassword)
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
							value={passwordCheck}
							onChange={(event) =>
								handleFormFill(event.target.value, setPasswordCheck)
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
								checked={termsAndConditions}
								onChange={() =>
									handleFormFill(!termsAndConditions, setTermsAndConditions)
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
