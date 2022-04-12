import { signInWithEmailAndPassword } from "firebase/auth";
import { collection, getDocs, where, query } from "firebase/firestore";
import { auth, db } from "./firebase";

const userLogin = async ({ email, password }) => {
	try {
		const userCredential = await signInWithEmailAndPassword(
			auth,
			email,
			password
		);
		const userID = userCredential.user.uid;
		const userQuery = query(collection(db, "users"), where("id", "==", userID));
		const userQuerySnapshot = await getDocs(userQuery);
		const userData = userQuerySnapshot.docs.map((doc) => ({
			docID: doc.id,
			...doc.data(),
		}));
		return userID ? userData[0] : false;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { userLogin };
