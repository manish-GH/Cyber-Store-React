import "./App.css";
import { Login, SignUp, Landing, ProductList, Wishlist, Cart } from "./screens";
import { Routes, Route } from "react-router-dom";
import { Navbar } from "./components";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<Landing />} />
				<Route path="/login" element={<Login />} />
				<Route path="/signUp" element={<SignUp />} />
				<Route path="/productList" element={<ProductList />} />
				<Route path="/cart" element={<Cart />} />
				<Route path="/wishlist" element={<Wishlist />} />
			</Routes>
		</div>
	);
}

export default App;
