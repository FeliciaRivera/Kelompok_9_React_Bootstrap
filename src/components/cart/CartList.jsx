/* CartList, daftar item keranjang (Bootstrap list-group). */

import CartItem from "./CartItem.jsx";

function CartList(props) {
  return (
    <ul className="list-group list-group-flush">
      {props.items.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          onIncrease={props.onIncrease}
          onDecrease={props.onDecrease}
          onRemove={props.onRemove}
        />
      ))}
    </ul>
  );
}

export default CartList;
