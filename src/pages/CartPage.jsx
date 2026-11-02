/* CartPage — FITUR BARU: Keranjang Belanja + Hitung Total + Checkout
   
   - State form checkout & error validasi disimpan DI SINI (induk),
     lalu dioper ke <CheckoutForm> sebagai props (controlled form).
   - Handler ubah qty / hapus / kosongkan berasal dari App dan
     diteruskan ke <CartList> → <CartItem>. */

import { useState } from "react";
import CartList from "../components/cart/CartList.jsx";
import CartSummary from "../components/cart/CartSummary.jsx";
import CheckoutForm from "../components/cart/CheckoutForm.jsx";
import EmptyCart from "../components/cart/EmptyCart.jsx";
import OrderSuccess from "../components/cart/OrderSuccess.jsx";
import ConfirmDialog from "../components/common/ConfirmDialog.jsx";
import { INFO_PEMESANAN } from "../data/warungInfo.js";
import { validasiCheckout } from "../utils/helpers.js";

const FORM_AWAL = { nama: "", email: "", telepon: "", metode: "dine-in", catatan: "" };

function CartPage(props) {
  const [formData, setFormData] = useState(FORM_AWAL);
  const [errors, setErrors] = useState({});
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  //  Handler form 
  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    if (errors[name]) setErrors({ ...errors, [name]: undefined });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const hasilValidasi = validasiCheckout(formData);
    setErrors(hasilValidasi);
    if (Object.keys(hasilValidasi).length > 0) return;

    props.onCheckout(formData);
    setFormData(FORM_AWAL);
  }

  //  Handler kosongkan keranjang (dengan konfirmasi) 
  function handleAskClear() {
    setShowClearConfirm(true);
  }

  function handleCancelClear() {
    setShowClearConfirm(false);
  }

  function handleConfirmClear() {
    setShowClearConfirm(false);
    props.onClearCart();
  }

  //  Handler navigasi 
  function handleBackToMenu() {
    props.onNavigate("menu");
  }

  //  Tampilan kondisi khusus 
  if (props.cartItems.length === 0 && props.lastOrder) {
    return (
      <OrderSuccess
        order={props.lastOrder}
        onOrderAgain={handleBackToMenu}
      />
    );
  }

  if (props.cartItems.length === 0) {
    return <EmptyCart onBackToMenu={handleBackToMenu} />;
  }

  return (
    <>
      <h2 className="page-title">Keranjang Belanja</h2>

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <div className="panel mb-4">
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3 className="panel-title mb-0 border-0">Pesanan Anda</h3>
              <button type="button" className="btn btn-sm btn-outline-danger" onClick={handleAskClear}>
                Kosongkan
              </button>
            </div>
            <CartList
              items={props.cartItems}
              onIncrease={props.onIncreaseQty}
              onDecrease={props.onDecreaseQty}
              onRemove={props.onRemoveItem}
            />
            <button type="button" className="btn btn-link px-0 mt-2" onClick={handleBackToMenu}>
              ← Tambah menu lain
            </button>
          </div>

          <div className="panel">
            <h3 className="panel-title">Data Pemesan</h3>
            <CheckoutForm
              formData={formData}
              errors={errors}
              totalHarga={props.cartTotal.totalHarga}
              onChange={handleFormChange}
              onSubmit={handleSubmit}
            />
          </div>
        </div>

        <aside className="col-lg-4">
          <div className="summary-sticky">
            <CartSummary items={props.cartItems} total={props.cartTotal} metode={formData.metode} />
            <div className="panel mt-3">
              <h4 className="h6 fw-bold text-brand">Info Pemesanan</h4>
              {INFO_PEMESANAN.map((info) => (
                <div className="info-box mb-2" key={info.label}>
                  <p className="info-label">{info.label}</p>
                  <p className="info-text">{info.isi}</p>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <ConfirmDialog
        show={showClearConfirm}
        title="Kosongkan keranjang?"
        confirmLabel="Ya, kosongkan"
        onConfirm={handleConfirmClear}
        onCancel={handleCancelClear}
      >
        Semua menu ({props.cartTotal.totalItem} item) akan dihapus dari keranjang.
      </ConfirmDialog>
    </>
  );
}

export default CartPage;
