import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import { fetchUserInfo } from "./fetchUserInfo";

const userLogin = async ({ email, password }) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userID = userCredential.user.uid;
		const userData = await fetchUserInfo(userID);
		return userID ? userData : false;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userLogin };
