# Warung Pojok Mba Sofy — React + Bootstrap

Lanjutan proyek kelompok mata kuliah **Pemrograman Antarmuka Pengguna**. Website profil & katalog UMKM yang sebelumnya berupa HTML/CSS statis (`index.html`, `menu.html`, `about.html`) dimigrasikan menjadi **Single Page Application React** dengan **Bootstrap 5**, lalu ditambah fitur interaktif baru.

- Kelompok: 9 (SI A) · Studi kasus: Opsi A, Profil & Katalog UMKM
- Anggota: Deio Castello Sujati (825250002), Felicia Rivera (825250003), Muhammad Ubait Dhaifullah (825250012)

## Cara Menjalankan

```bash
npm install
npm run dev      # buka http://localhost:5173
npm run build    # build produksi ke folder dist/
```

Butuh Node.js 18 ke atas.

## Fitur

**Dimigrasikan dari versi HTML**
- Halaman Beranda, Menu, dan Tentang dengan header, navigasi, konten, dan footer yang konsisten
- Layout 2 kolom Bootstrap (`col-lg-8` + `col-lg-4`) yang menjadi 1 kolom di layar kecil
- Navbar responsif + dropdown Menu (dikendalikan state React, tanpa JavaScript Bootstrap)
- Tabel daftar harga dengan `colSpan` & `rowSpan`, sekarang dibangkitkan otomatis dari data
- Galeri produk, video profil, peta Google Maps, kontak, jam operasional

**Fitur baru**
1. **Pencarian & filter menu**: cari nama, filter kategori (Makanan / Roti Bakar / Minuman), urutkan harga/nama, ganti tampilan kartu ↔ tabel.
2. **Keranjang belanja + hitung total**: tambah menu, ubah jumlah (+/−), hapus item, kosongkan keranjang (dengan modal konfirmasi), subtotal per item & total otomatis, badge jumlah item di navbar, bar keranjang melayang.
3. **Checkout**: form data pemesan (controlled form) dengan validasi, lalu struk pesanan berkode dengan pesan **"Pesanan Anda telah diverifikasi"** (tanpa backend, semua berjalan di browser).
4. Notifikasi toast, badge status **Sedang Buka / Tutup** berdasarkan jam saat ini.

## Aturan State & Event Handling

Tidak ada fungsi yang ditulis langsung di dalam atribut event JSX (`onClick={() => ...}`).
Pola yang dipakai:

1. **State & handler didefinisikan di komponen induk**, di luar `return`.
2. Handler **dioper ke anak lewat props**.
3. Anak **memanggil handler dari props** saat event terjadi.

```jsx
// App.jsx (INDUK) — handler di atas return
function handleAddToCart(item) {
  setCart([...cart, { id: item.id, qty: 1 }]);
}
return <MenuPage onAddToCart={handleAddToCart} />;

// MenuCard.jsx (ANAK) — handler pembungkus juga di atas return
function MenuCard(props) {
  function handleAddClick() {
    props.onAddToCart(props.item);
  }
  return <button onClick={handleAddClick}>+ Keranjang</button>;
}

// Jika tidak butuh parameter, props dipanggil langsung:
<button onClick={props.onClose}>Tutup</button>
```

## Foto Menu

Setiap menu punya nama file foto sendiri di `src/data/menuData.js` (field `gambar`, contoh `nasi-goreng-biasa.jpg`). Taruh file dengan nama persis sama di `public/image/`. Teks `alt` foto memakai nama menu.

Pemrosesan data (filter, sort, total, validasi) dipisah ke `src/utils/helpers.js`, tidak ditulis di dalam JSX.

## Struktur Folder

```
src/
├── App.jsx                 # INDUK: state global + semua handler utama
├── main.jsx                # import Bootstrap + tema
├── data/                   # menuData.js (25 menu), warungInfo.js
├── utils/helpers.js        # formatRupiah, filter/sort, total, validasi, WA link
├── styles/custom.css       # palet warna warung → variabel Bootstrap
├── pages/
│   ├── HomePage.jsx        # Beranda
│   ├── MenuPage.jsx        # Katalog + filter
│   ├── AboutPage.jsx       # Tentang
│   └── CartPage.jsx        # Keranjang + checkout
└── components/
    ├── layout/   Header, NavItem, DropdownItem, Footer, Notification
    ├── common/   InfoBox, MapBox, ContactBox, ConfirmDialog
    ├── home/     Hero, WelcomeArticle, CategoryGrid, CategoryCard, OperatingHours
    ├── about/    AboutStory, ValuesTable, QuickInfo
    ├── menu/     MenuToolbar, ToggleButton, MenuGrid, MenuCard, PriceTable, PriceRow, Gallery, CartFloatingBar
    └── cart/     CartList, CartItem, CartSummary, CheckoutForm, EmptyCart, OrderSuccess
```

## Alur Props (contoh: keranjang)

```
App (cart, handleIncreaseQty, handleDecreaseQty, handleRemoveFromCart)
 └─ CartPage (onIncreaseQty, onDecreaseQty, onRemoveItem)
     └─ CartList (onIncrease, onDecrease, onRemove)
         └─ CartItem → onClick={handleIncrease} → props.onIncrease(id)
```

## Teknologi

React 19 · Vite · Bootstrap 5.3 (CSS) · Hook `useState` & `useRef`
