import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from "./firebase";
import { fetchProductData } from "./fetchProductsData";

const fetchUserInfo = async (userID) => {
	try {
		const userQuery = query(collection(db, "users"), where("id", "==", userID));
		const userQuerySnapshot = await getDocs(userQuery);
		const userList = userQuerySnapshot.docs?.map((doc) => ({
			docID: doc.id,
			...doc.data(),
		}));
		let userData = { ...userList[0] };
		const productData = await fetchProductData(userData);
		userData = { ...userData, productData };
		return userID ? userData : false;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { fetchUserInfo };
