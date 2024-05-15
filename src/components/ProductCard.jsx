import "../styles/ProductCard.css";

function ProductCard(props) {
	return (
		<div className="product">
			<img src={props.url} alt={props.alt} />
			<h1>{props.productName}</h1>
			<span>${props.price}.00</span>
		</div>
	);
}

export default ProductCard;
