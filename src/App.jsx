import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ProductCard from "./components/ProductCard";

function App() {
	return (
		<div className="showcase">
			<ProductCard
				url="https://i.pinimg.com/564x/d5/44/76/d5447631608c69c3452d486193a79de8.jpg"
				productName="Marylin + Marge portrait"
				alt="Marylin + Marge portrait"
				price="5,000"
			/>
			<ProductCard
				url="https://i.pinimg.com/564x/ac/9f/3c/ac9f3c55bcbd06517741ec04222fce05.jpg"
				productName="Eau du toilet"
				alt="Perfume"
				price="2,000"
			/>
		</div>
	);
}

export default App;
