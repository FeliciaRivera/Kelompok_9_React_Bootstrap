/* Footer — konsisten di semua halaman. */

import { INFO_WARUNG } from "../../data/warungInfo.js";

function Footer(props) {
  function handleToMenu() {
    props.onNavigate("menu");
  }

  function handleToAbout() {
    props.onNavigate("tentang");
  }

  return (
    <footer className="site-footer mt-5 py-4">
      <div className="container text-center">
        <div className="mb-2">
          <button type="button" className="btn btn-link px-2" onClick={handleToMenu}>Menu</button>
          <span>·</span>
          <button type="button" className="btn btn-link px-2" onClick={handleToAbout}>Tentang</button>
          <span>·</span>
          <span className="px-2">{INFO_WARUNG.telepon}</span>
        </div>
        <p className="mb-0">
          &copy; 2026 {INFO_WARUNG.nama} — Kelompok 9 (SI A). Proyek Pemrograman Antarmuka Pengguna.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
