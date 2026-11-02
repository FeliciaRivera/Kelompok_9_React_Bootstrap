/* ConfirmDialog modal konfirmasi berbasis class Bootstrap.
   Tampil/tidaknya dikendalikan induk lewat props.show.
   Tombol memanggil props.onConfirm / props.onCancel. */

function ConfirmDialog(props) {
  if (!props.show) return null;

  return (
    <>
      <div className="modal-backdrop-custom"></div>
      <div className="modal d-block" tabIndex="-1" role="dialog" aria-modal="true" style={{ zIndex: 1075 }}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title text-brand">{props.title}</h5>
              <button type="button" className="btn-close" aria-label="Tutup" onClick={props.onCancel}></button>
            </div>
            <div className="modal-body">{props.children}</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-outline-secondary" onClick={props.onCancel}>
                Batal
              </button>
              <button type="button" className={"btn btn-" + (props.variant || "danger")} onClick={props.onConfirm}>
                {props.confirmLabel || "Ya, lanjutkan"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ConfirmDialog;
