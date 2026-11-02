/* OrderSuccess, struk pesanan setelah checkout berhasil.
   Tombol "Pesan Lagi" memanggil props.onOrderAgain. */

import { formatRupiah } from "../../utils/helpers.js";

function OrderSuccess(props) {
  const { order } = props;

  return (
    <div className="row justify-content-center">
      <div className="col-lg-7">
        <div className="panel">
          <div className="alert alert-success mb-4">
            <h2 className="h5 fw-bold mb-1">Pesanan Anda telah diverifikasi!</h2>
            <span className="small">Terima kasih, pesanan sedang disiapkan. Tunjukkan kode pesanan ini saat pembayaran.</span>
          </div>

          <div className="d-flex justify-content-between small text-muted mb-1">
            <span>Kode Pesanan</span>
            <strong className="text-brand">{order.kode}</strong>
          </div>
          <div className="d-flex justify-content-between small text-muted mb-1">
            <span>Tanggal</span>
            <span>{order.tanggal}</span>
          </div>
          <div className="d-flex justify-content-between small text-muted mb-3">
            <span>Pemesan</span>
            <span>{order.pelanggan.nama} · {order.pelanggan.metode === "dine-in" ? "Makan di Tempat" : "Take Away"}</span>
          </div>

          <div className="table-responsive">
            <table className="table table-sm price-table">
              <thead>
                <tr className="kolom">
                  <th>Menu</th>
                  <th className="text-center">Qty</th>
                  <th className="text-end">Subtotal</th>
                </tr>
              </thead>
              <tbody>
                {order.items.map((item) => (
                  <tr key={item.id}>
                    <td>{item.nama}</td>
                    <td className="text-center">{item.qty}</td>
                    <td className="text-end">{formatRupiah(item.subtotal)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th colSpan="2">Total ({order.totalItem} porsi)</th>
                  <th className="text-end text-brand">{formatRupiah(order.totalHarga)}</th>
                </tr>
              </tfoot>
            </table>
          </div>

          {order.pelanggan.catatan && (
            <p className="small"><strong>Catatan:</strong> {order.pelanggan.catatan}</p>
          )}

          <div className="d-grid gap-2 d-sm-flex justify-content-sm-end">
            <button type="button" className="btn btn-primary" onClick={props.onOrderAgain}>
              Pesan Lagi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
