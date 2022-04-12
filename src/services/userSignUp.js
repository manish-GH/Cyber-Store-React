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
		const initialUserData = {
			id: userID,
			username: username,
			email: email,
			cart: [],
			wishlist: [],
			orders: [],
			address: [],
		};
		const userDoc = await addDoc(collection(db, "users"), initialUserData);
		const userData = { ...initialUserData, docID: userDoc.id };
		return userID ? userData : false;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userSignUp };
