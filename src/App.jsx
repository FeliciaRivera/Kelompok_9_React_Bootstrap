/* 
   App.jsx — KOMPONEN INDUK (Parent Component)
   
   Aturan yang diterapkan:
   1. Semua state global (halaman aktif, keranjang,
      filter, pesanan terakhir, notifikasi) disimpan DI SINI.
   2. Semua fungsi pengubah state (handler) didefinisikan DI SINI,
      di luar `return`.
   3. Handler dioper ke komponen anak lewat PROPS, lalu anak
      memanggilnya saat event terjadi (mis. onClick={props.onX}).
    */

import { useRef, useState } from "react";

import Header from "./components/layout/Header.jsx";
import Footer from "./components/layout/Footer.jsx";
import Notification from "./components/layout/Notification.jsx";

import HomePage from "./pages/HomePage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import CartPage from "./pages/CartPage.jsx";

import { MENU_AWAL } from "./data/menuData.js";
import { detailKeranjang, hitungTotal } from "./utils/helpers.js";

// Daftar menu bersifat tetap (data dari menuData.js)
const menuItems = MENU_AWAL;

const FILTER_AWAL = { keyword: "", kategori: "semua", urutan: "default", tampilan: "kartu" };

function App() {
  //  STATE 
  const [activePage, setActivePage] = useState("beranda");
  const [cart, setCart] = useState([]); // [{ id, qty }]
  const [menuFilter, setMenuFilter] = useState(FILTER_AWAL);
  const [lastOrder, setLastOrder] = useState(null);
  const [notif, setNotif] = useState(null); // { pesan, varian }
  const notifTimer = useRef(null);

  // Data turunan (dihitung dari state, bukan disimpan ganda)
  const cartItems = detailKeranjang(cart, menuItems);
  const cartTotal = hitungTotal(cartItems);

  //  HANDLER: NOTIFIKASI 
  function showNotif(pesan, varian = "success") {
    clearTimeout(notifTimer.current);
    setNotif({ pesan, varian });
    notifTimer.current = setTimeout(handleCloseNotif, 2500);
  }

  function handleCloseNotif() {
    setNotif(null);
  }

  //  HANDLER: NAVIGASI (SPA) 
  function handleNavigate(page) {
    setActivePage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  // Dipakai dropdown navbar & kartu kategori di Beranda
  function handleSelectCategory(kategori, keyword = "") {
    setMenuFilter({ ...FILTER_AWAL, tampilan: menuFilter.tampilan, kategori, keyword });
    handleNavigate("menu");
  }

  //  HANDLER: FILTER MENU 
  function handleFilterChange(field, value) {
    setMenuFilter({ ...menuFilter, [field]: value });
  }

  function handleResetFilter() {
    setMenuFilter({ ...FILTER_AWAL, tampilan: menuFilter.tampilan });
  }

  //  HANDLER: KERANJANG 
  function handleAddToCart(item) {
    const sudahAda = cart.find((c) => c.id === item.id);
    if (sudahAda) {
      setCart(cart.map((c) => (c.id === item.id ? { ...c, qty: c.qty + 1 } : c)));
    } else {
      setCart([...cart, { id: item.id, qty: 1 }]);
    }
    setLastOrder(null);
    showNotif(`${item.nama} ditambahkan ke keranjang`);
  }

  function handleIncreaseQty(id) {
    setCart(cart.map((c) => (c.id === id ? { ...c, qty: Math.min(c.qty + 1, 50) } : c)));
  }

  function handleDecreaseQty(id) {
    setCart(
      cart
        .map((c) => (c.id === id ? { ...c, qty: c.qty - 1 } : c))
        .filter((c) => c.qty > 0)
    );
  }

  function handleRemoveFromCart(id) {
    setCart(cart.filter((c) => c.id !== id));
    showNotif("Menu dihapus dari keranjang", "warning");
  }

  function handleClearCart() {
    setCart([]);
    showNotif("Keranjang dikosongkan", "warning");
  }

  //  HANDLER: CHECKOUT 
  function handleCheckout(pelanggan) {
    const order = {
      kode: "WPS-" + Date.now().toString().slice(-6),
      tanggal: new Date().toLocaleString("id-ID"),
      items: cartItems,
      totalItem: cartTotal.totalItem,
      totalHarga: cartTotal.totalHarga,
      pelanggan,
    };
    setLastOrder(order);
    setCart([]);
    showNotif(`Pesanan ${order.kode} berhasil dibuat!`);
  }

  //  RENDER HALAMAN AKTIF 
  function renderPage() {
    if (activePage === "menu") {
      return (
        <MenuPage
          menuItems={menuItems}
          cart={cart}
          cartTotal={cartTotal}
          filter={menuFilter}
          onFilterChange={handleFilterChange}
          onResetFilter={handleResetFilter}
          onAddToCart={handleAddToCart}
          onNavigate={handleNavigate}
        />
      );
    }
    if (activePage === "tentang") {
      return <AboutPage />;
    }
    if (activePage === "keranjang") {
      return (
        <CartPage
          cartItems={cartItems}
          cartTotal={cartTotal}
          lastOrder={lastOrder}
          onIncreaseQty={handleIncreaseQty}
          onDecreaseQty={handleDecreaseQty}
          onRemoveItem={handleRemoveFromCart}
          onClearCart={handleClearCart}
          onCheckout={handleCheckout}
          onNavigate={handleNavigate}
        />
      );
    }
    return (
      <HomePage
        menuCount={menuItems.length}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />
    );
  }

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header
        activePage={activePage}
        cartCount={cartTotal.totalItem}
        onNavigate={handleNavigate}
        onSelectCategory={handleSelectCategory}
      />

      <main className="container py-4 flex-grow-1">{renderPage()}</main>

      <Footer onNavigate={handleNavigate} />

      <Notification notif={notif} onClose={handleCloseNotif} />
    </div>
  );
}

export default App;
