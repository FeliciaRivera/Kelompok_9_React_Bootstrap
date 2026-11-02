/* MenuToolbar — pencarian, filter kategori, urutan, dan mode tampilan.
   Komponen ini TIDAK menyimpan logika: semua event langsung
   memanggil fungsi yang diterima dari props. */

import ToggleButton from "./ToggleButton.jsx";

function MenuToolbar(props) {
  return (
    <div className="panel mb-4">
      <div className="row g-3 align-items-end">
        <div className="col-md-5">
          <label htmlFor="cari-menu" className="form-label info-label">Cari Menu</label>
          <input
            id="cari-menu"
            type="search"
            className="form-control"
            placeholder="Contoh: katsu, keju, kopi…"
            value={props.filter.keyword}
            onChange={props.onKeywordChange}
          />
        </div>

        <div className="col-6 col-md-3">
          <label htmlFor="urut-menu" className="form-label info-label">Urutkan</label>
          <select id="urut-menu" className="form-select" value={props.filter.urutan} onChange={props.onSortChange}>
            <option value="default">Default</option>
            <option value="termurah">Harga termurah</option>
            <option value="termahal">Harga termahal</option>
            <option value="nama">Nama A–Z</option>
          </select>
        </div>

        <div className="col-6 col-md-4">
          <span className="form-label info-label d-block">Tampilan</span>
          <div className="btn-group w-100" role="group" aria-label="Mode tampilan">
            <ToggleButton label="Kartu" value="kartu" active={props.filter.tampilan === "kartu"} onSelect={props.onViewChange} />
            <ToggleButton label="Tabel" value="tabel" active={props.filter.tampilan === "tabel"} onSelect={props.onViewChange} />
          </div>
        </div>
      </div>

      <div className="d-flex flex-wrap gap-2 mt-3 align-items-center">
        <ToggleButton label="Semua" value="semua" pill active={props.filter.kategori === "semua"} onSelect={props.onCategoryChange} />
        {props.kategoriList.map((k) => (
          <ToggleButton key={k.id} label={k.label} value={k.id} pill active={props.filter.kategori === k.id} onSelect={props.onCategoryChange} />
        ))}
        <span className="ms-auto small text-muted">{props.resultCount} menu ditemukan</span>
        <button type="button" className="btn btn-sm btn-link" onClick={props.onReset}>Reset</button>
      </div>
    </div>
  );
}

export default MenuToolbar;
