import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

const userSignUp = async ({ username, email, password }) => {
	try {
		const userCredential = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userID = userCredential.user.uid;

		const userDoc = await addDoc(collection(db, "users"), {
			id: userID,
			username: username,
			email: email,
			cart: [],
			wishlist: [],
			orders: [],
			address: [],
		});
		//userDoc will be used later in context
		return true;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userSignUp };
