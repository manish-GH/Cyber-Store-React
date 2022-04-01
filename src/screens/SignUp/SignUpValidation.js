const SignUpValidation = (
	{ username, email, password, passwordCheck, termsAndConditions },
	setError
) => {
	if (
		!username ||
		!email ||
		!password ||
		!passwordCheck ||
		!termsAndConditions
	) {
		setError("Fill all the fields");
		return false;
	} else if (password !== passwordCheck) {
		setError("Passwords do not match");
		return false;
	} else if (password.length <= 6) {
		setError("Password should contain at least 6 characters");
		return false;
	} else {
		setError();
		return true;
	}
};

export { SignUpValidation };
