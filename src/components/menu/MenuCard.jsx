/* MenuCard — kartu satu menu (Bootstrap card).
   Tombol "+ Keranjang" memanggil props.onAddToCart(item). */

import { formatRupiah, gambarUrl } from "../../utils/helpers.js";

function MenuCard(props) {
  function handleAddClick() {
    props.onAddToCart(props.item);
  }

  return (
    <div className="card menu-card h-100">
      <div className="position-relative">
        <img src={gambarUrl(props.item.gambar)} alt={props.item.nama} className="card-img-top" loading="lazy" />
        {props.qtyInCart > 0 && (
          <span className="badge text-bg-success position-absolute top-0 end-0 m-2">
            {props.qtyInCart} di keranjang
          </span>
        )}
      </div>
      <div className="card-body d-flex flex-column">
        <span className="badge bg-card-tint text-brand-soft align-self-start mb-2">{props.item.kelompok}</span>
        <h4 className="card-title h6 fw-bold">{props.item.nama}</h4>
        <p className="harga mb-3">{formatRupiah(props.item.harga)}</p>
        <button type="button" className="btn btn-primary btn-sm mt-auto" onClick={handleAddClick}>
          + Keranjang
        </button>
      </div>
    </div>
  );
}

export default MenuCard;
