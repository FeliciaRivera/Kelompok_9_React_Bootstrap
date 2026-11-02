/* Notification — toast Bootstrap di pojok kanan bawah.
   Tombol tutup memanggil props.onClose (didefinisikan di App). */

function Notification(props) {
  if (!props.notif) return null;

  return (
    <div className="notif-wrap" role="status" aria-live="polite">
      <div className={`toast show align-items-center text-bg-${props.notif.varian} border-0`}>
        <div className="d-flex">
          <div className="toast-body fw-semibold">{props.notif.pesan}</div>
          <button
            type="button"
            className="btn-close btn-close-white me-2 m-auto"
            aria-label="Tutup"
            onClick={props.onClose}
          ></button>
        </div>
      </div>
    </div>
  );
}

export default Notification;
