/* MenuGrid — grid responsif kartu menu (row-cols Bootstrap). */

import MenuCard from "./MenuCard.jsx";

function MenuGrid(props) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 g-3">
      {props.items.map((item) => (
        <div className="col" key={item.id}>
          <MenuCard item={item} qtyInCart={props.qtyMap[item.id] || 0} onAddToCart={props.onAddToCart} />
        </div>
      ))}
    </div>
  );
}

export default MenuGrid;
