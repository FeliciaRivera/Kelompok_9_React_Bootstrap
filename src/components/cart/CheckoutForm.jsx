/* CheckoutForm, form data pemesan (controlled component).
   Nilai (formData), pesan error, onChange, dan onSubmit
   SEMUANYA berasal dari induk (CartPage) melalui props. */

import { formatRupiah } from "../../utils/helpers.js";

function CheckoutForm(props) {
  const { formData, errors } = props;

  return (
    <form noValidate onSubmit={props.onSubmit}>
      <div className="row g-3">
        <div className="col-md-6">
          <label htmlFor="nama" className="form-label info-label">Nama Lengkap *</label>
          <input
            id="nama" name="nama" type="text" placeholder="Masukkan nama Anda"
            className={"form-control" + (errors.nama ? " is-invalid" : "")}
            value={formData.nama} onChange={props.onChange}
          />
          <div className="invalid-feedback">{errors.nama}</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="telepon" className="form-label info-label">No. Telepon *</label>
          <input
            id="telepon" name="telepon" type="tel" placeholder="0812xxxxxxx"
            className={"form-control" + (errors.telepon ? " is-invalid" : "")}
            value={formData.telepon} onChange={props.onChange}
          />
          <div className="invalid-feedback">{errors.telepon}</div>
        </div>

        <div className="col-md-6">
          <label htmlFor="email" className="form-label info-label">Email *</label>
          <input
            id="email" name="email" type="email" placeholder="nama@email.com"
            className={"form-control" + (errors.email ? " is-invalid" : "")}
            value={formData.email} onChange={props.onChange}
          />
          <div className="invalid-feedback">{errors.email}</div>
        </div>

        <div className="col-md-6">
          <span className="form-label info-label d-block">Metode Pemesanan *</span>
          <div className="form-check form-check-inline mt-1">
            <input
              className="form-check-input" type="radio" name="metode" id="metode-dinein" value="dine-in"
              checked={formData.metode === "dine-in"} onChange={props.onChange}
            />
            <label className="form-check-label" htmlFor="metode-dinein">Makan di Tempat</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input" type="radio" name="metode" id="metode-takeaway" value="takeaway"
              checked={formData.metode === "takeaway"} onChange={props.onChange}
            />
            <label className="form-check-label" htmlFor="metode-takeaway">Take Away</label>
          </div>
        </div>

        <div className="col-12">
          <label htmlFor="catatan" className="form-label info-label">Catatan Tambahan</label>
          <textarea
            id="catatan" name="catatan" rows="3" className="form-control"
            placeholder="Contoh: jangan pedas, tanpa bawang, dll."
            value={formData.catatan} onChange={props.onChange}
          ></textarea>
        </div>

        <div className="col-12 d-grid d-sm-flex justify-content-sm-end">
          <button type="submit" className="btn btn-primary btn-lg px-4">
            Pesan Sekarang · {formatRupiah(props.totalHarga)}
          </button>
        </div>
      </div>
    </form>
  );
}

export default CheckoutForm;
