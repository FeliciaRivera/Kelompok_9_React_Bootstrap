/* PriceTable — tabel daftar harga dengan colspan & rowspan
   (dipertahankan dari versi HTML), sekarang dibangkitkan dari data. */

import PriceRow from "./PriceRow.jsx";
import { kelompokkanMenu } from "../../utils/helpers.js";

function PriceTable(props) {
  const grupMenu = kelompokkanMenu(props.items);

  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover price-table mb-0">
        <thead>
          <tr className="judul">
            <th colSpan="4">{props.judul}</th>
          </tr>
          <tr className="kolom">
            <th>Kategori</th>
            <th>Nama Menu</th>
            <th>Harga</th>
            <th className="text-center">Aksi</th>
          </tr>
        </thead>
        <tbody>
          {grupMenu.map((grup) =>
            grup.items.map((item, index) => (
              <PriceRow
                key={item.id}
                item={item}
                kelompok={grup.kelompok}
                rowSpan={index === 0 ? grup.items.length : 0}
                onAddToCart={props.onAddToCart}
              />
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default PriceTable;
