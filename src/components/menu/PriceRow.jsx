/* PriceRow — satu baris tabel harga.
   Kolom "kategori" hanya dirender di baris pertama grup (rowspan). */

import { formatRupiah } from "../../utils/helpers.js";

function PriceRow(props) {
  function handleAddClick() {
    props.onAddToCart(props.item);
  }

  return (
    <tr>
      {props.rowSpan > 0 && (
        <td rowSpan={props.rowSpan} className="kategori">{props.kelompok}</td>
      )}
      <td>{props.item.nama}</td>
      <td className="text-nowrap">{formatRupiah(props.item.harga)}</td>
      <td className="text-center">
        <button type="button" className="btn btn-sm btn-outline-primary" onClick={handleAddClick}>
          + Keranjang
        </button>
      </td>
    </tr>
  );
}

export default PriceRow;
