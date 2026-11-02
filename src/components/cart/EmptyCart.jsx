/* EmptyCart, tampilan saat keranjang kosong. */

function EmptyCart(props) {
  return (
    <div className="panel text-center py-5">
      <div className="display-4 mb-2" aria-hidden="true">🛒</div>
      <h2 className="h4 fw-bold text-brand">Keranjang masih kosong</h2>
      <p className="text-muted">Yuk pilih menu favorit Anda terlebih dahulu.</p>
      <button type="button" className="btn btn-primary" onClick={props.onBackToMenu}>
        Lihat Menu
      </button>
    </div>
  );
}

export default EmptyCart;
