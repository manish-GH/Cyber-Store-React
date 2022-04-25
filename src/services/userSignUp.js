import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "./firebase";
import { fetchProductData } from "./fetchProductsData";

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
		let userData = { ...initialUserData, docID: userDoc.id };
		const productData = await fetchProductData(userData);
		userData = { ...userData, productData };
		return userID ? userData : false;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userSignUp };
