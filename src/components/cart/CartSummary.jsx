/* CartSummary, ringkasan & total harga (hanya menampilkan, tanpa logika). */

import { formatRupiah } from "../../utils/helpers.js";

function CartSummary(props) {
  return (
    <div className="panel">
      <h4 className="h6 fw-bold text-brand border-bottom pb-2">Ringkasan Pesanan</h4>
      <ul className="list-unstyled small mb-3">
        {props.items.map((item) => (
          <li key={item.id} className="d-flex justify-content-between py-1">
            <span>{item.nama} × {item.qty}</span>
            <span>{formatRupiah(item.subtotal)}</span>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between small text-muted">
        <span>Total item</span>
        <span>{props.total.totalItem} porsi</span>
      </div>
      <div className="d-flex justify-content-between small text-muted">
        <span>Metode</span>
        <span>{props.metode === "dine-in" ? "Makan di Tempat" : "Take Away"}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between fs-5 fw-bold">
        <span>Total</span>
        <span className="text-brand" data-testid="grand-total">{formatRupiah(props.total.totalHarga)}</span>
      </div>
    </div>
  );
}

export default CartSummary;
