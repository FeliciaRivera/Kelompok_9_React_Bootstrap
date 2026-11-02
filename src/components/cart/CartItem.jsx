/* CartItem, satu baris keranjang: gambar, nama, kontrol qty, subtotal.
   Ketiga tombol memanggil fungsi dari props dengan id menu. */

import { formatRupiah, gambarUrl } from "../../utils/helpers.js";

function CartItem(props) {
  function handleIncrease() {
    props.onIncrease(props.item.id);
  }

  function handleDecrease() {
    props.onDecrease(props.item.id);
  }

  function handleRemove() {
    props.onRemove(props.item.id);
  }

  return (
    <li className="list-group-item bg-transparent px-0 py-3">
      <div className="d-flex align-items-center gap-3 flex-wrap">
        <img src={gambarUrl(props.item.gambar)} alt={props.item.nama} className="cart-thumb" />

        <div className="flex-grow-1">
          <p className="fw-bold mb-0">{props.item.nama}</p>
          <small className="text-muted">{formatRupiah(props.item.harga)} / porsi</small>
        </div>

        <div className="qty-control d-flex align-items-center" aria-label={`Jumlah ${props.item.nama}`}>
          <button type="button" className="btn btn-sm btn-outline-primary" aria-label="Kurangi" onClick={handleDecrease}>
            −
          </button>
          <span className="qty-value">{props.item.qty}</span>
          <button type="button" className="btn btn-sm btn-outline-primary" aria-label="Tambah" onClick={handleIncrease}>
            +
          </button>
        </div>

        <div className="text-end" style={{ minWidth: 100 }}>
          <p className="fw-bold text-brand mb-0">{formatRupiah(props.item.subtotal)}</p>
          <button type="button" className="btn btn-link btn-sm text-danger p-0" onClick={handleRemove}>
            Hapus
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
