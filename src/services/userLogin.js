import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const userLogin = async ({ email, password }) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userID = userCredential.user.uid;
		return userID ? true : false;
		//userID will be used later
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userLogin };
