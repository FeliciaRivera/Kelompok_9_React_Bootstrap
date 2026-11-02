/* =============================================================
   Header — navbar Bootstrap (responsif) + dropdown Menu
   State lokal: buka/tutup hamburger & dropdown.
   Handler didefinisikan di atas (di luar return), lalu dioper
   ke NavItem / DropdownItem lewat props.
   ============================================================= */

import { useState } from "react";
import NavItem from "./NavItem.jsx";
import DropdownItem from "./DropdownItem.jsx";
import { KATEGORI } from "../../data/menuData.js";
import { INFO_WARUNG } from "../../data/warungInfo.js";
import { gambarUrl } from "../../utils/helpers.js";

const TAGLINE = {
  beranda: INFO_WARUNG.tagline,
  menu: "Menu & Pemesanan",
  tentang: "Tentang Kami",
  keranjang: "Keranjang Belanja",
};

function Header(props) {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // ---------- Handler ----------
  function handleToggleNav() {
    setIsNavOpen(!isNavOpen);
  }

  function handleToggleDropdown() {
    setIsDropdownOpen(!isDropdownOpen);
  }

  function handleNavClick(page) {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
    props.onNavigate(page);
  }

  function handleCategoryClick(kategori) {
    setIsNavOpen(false);
    setIsDropdownOpen(false);
    props.onSelectCategory(kategori);
  }

  function handleBrandClick() {
    handleNavClick("beranda");
  }

  return (
    <header className="site-header sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container">
          {/* Brand */}
          <button type="button" className="navbar-brand d-flex align-items-center gap-2 btn btn-link text-decoration-none p-0 me-2" onClick={handleBrandClick}>
            <img src={gambarUrl("logo.png")} alt="Logo Warung Pojok Mba Sofy" className="brand-logo" />
            <span className="text-start">
              <h1 className="mb-0 fw-bold text-white">{INFO_WARUNG.nama}</h1>
              <small className="d-none d-sm-block brand-tagline">{TAGLINE[props.activePage]}</small>
            </span>
          </button>

          {/* Tombol hamburger */}
          <button
            type="button"
            className="navbar-toggler"
            aria-label="Buka menu navigasi"
            aria-expanded={isNavOpen}
            onClick={handleToggleNav}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Daftar navigasi */}
          <div className={"collapse navbar-collapse" + (isNavOpen ? " show" : "")}>
            <ul className="navbar-nav ms-auto gap-1 mt-2 mt-lg-0 align-items-lg-center">
              <NavItem label="Beranda" page="beranda" active={props.activePage === "beranda"} onNavigate={handleNavClick} />

              {/* Dropdown Menu */}
              <li className="nav-item dropdown">
                <button
                  type="button"
                  className={"nav-link dropdown-toggle w-100 text-start" + (props.activePage === "menu" ? " active" : "")}
                  aria-expanded={isDropdownOpen}
                  onClick={handleToggleDropdown}
                >
                  Menu
                </button>
                <ul className={"dropdown-menu" + (isDropdownOpen ? " show" : "")}>
                  <DropdownItem label="Semua Menu" kategori="semua" onSelect={handleCategoryClick} />
                  <li><hr className="dropdown-divider" /></li>
                  {KATEGORI.map((k) => (
                    <DropdownItem key={k.id} label={k.label} kategori={k.id} onSelect={handleCategoryClick} />
                  ))}
                </ul>
              </li>

              <NavItem label="Tentang" page="tentang" active={props.activePage === "tentang"} onNavigate={handleNavClick} />
              <NavItem
                label="Keranjang"
                page="keranjang"
                badge={props.cartCount}
                active={props.activePage === "keranjang"}
                onNavigate={handleNavClick}
              />
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
