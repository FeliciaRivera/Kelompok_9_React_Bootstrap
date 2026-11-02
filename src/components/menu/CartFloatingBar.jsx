/* CartFloatingBar — bar ringkasan keranjang yang menempel di bawah layar
   saat keranjang berisi. Tombol memanggil props.onViewCart. */

import { formatRupiah } from "../../utils/helpers.js";

function CartFloatingBar(props) {
  if (props.totalItem === 0) return null;

  return (
    <div className="cart-floating d-flex justify-content-between align-items-center px-3 py-2 mt-4">
      <span>
        <strong>{props.totalItem} item</strong> · {formatRupiah(props.totalHarga)}
      </span>
      <button type="button" className="btn btn-light-brand btn-sm" onClick={props.onViewCart}>
        Lihat Keranjang →
      </button>
    </div>
  );
}

export default CartFloatingBar;
