/* Hero — banner utama Beranda. Tombol memanggil props.onOrderClick. */

import { INFO_WARUNG } from "../../data/warungInfo.js";

function Hero(props) {
  return (
    <section className="hero text-center px-3 py-5">
      <h2 className="fw-bold">{INFO_WARUNG.tagline}</h2>
      <p className="mb-4 opacity-75">
        {INFO_WARUNG.nama} menyajikan {props.menuCount} varian masakan rumahan dengan bahan segar dan harga terjangkau.
      </p>
      <button type="button" className="btn btn-light-brand btn-lg px-4" onClick={props.onOrderClick}>
        Lihat Menu &amp; Pesan
      </button>
    </section>
  );
}

export default Hero;
