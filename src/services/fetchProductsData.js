import { collection, getDocs, query } from "firebase/firestore";
import { db } from "./firebase";

const fetchProductData = async (userData) => {
	try {
		const productQuery = query(collection(db, "products"));
		const productQuerySnapshot = await getDocs(productQuery);
		const productData = productQuerySnapshot.docs?.map((doc) => ({
			inCart:
				JSON.stringify(userData) !== JSON.stringify({})
					? userData?.cart?.some((item) => item.id === doc.data().id)
					: false,
			inWishlist:
				JSON.stringify(userData) !== JSON.stringify({})
					? userData?.wishlist?.some((item) => item.id === doc.data().id)
					: false,
			docID: doc.id,
			...doc.data(),
		}));
		return productData;
	} catch (err) {
		console.log("ERROR: ", err);
		return false;
	}
};

export { fetchProductData };
