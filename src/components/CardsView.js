import ShopCard from "./ShopCard";

function CardsView({ products }) {
	return (
		<div className="cards-view">
			{products.map(item =>
				<ShopCard
				name={item.name}
				color={item.color}
				img={item.img}
				price={item.price}
				/>
			)}
		</div>
	)
}

export default CardsView;
