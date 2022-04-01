const LoginValidation = (data, setError) => {
	const { email, password } = data;
	if (!email || !password) {
		setError("Fill all the fields");
		return false;
	} else {
		setError();
		return true;
	}
};

export { LoginValidation };
