/* =============================================================
   DATA MENU — Warung Pojok Mba Sofy
   Sumber data diambil dari tabel di menu.html (versi HTML statis).
   Sekarang disimpan sebagai array of object agar bisa di-render
   dengan map(), difilter, dan dimasukkan ke keranjang.
   ============================================================= */

// Kategori besar (dipakai di filter & dropdown navbar)
export const KATEGORI = [
  { id: "makanan", label: "Makanan" },
  { id: "roti", label: "Roti Bakar" },
  { id: "minuman", label: "Minuman" },
];

// Foto kategori (dipakai di Galeri Produk)
export const DAFTAR_GAMBAR = [
  { file: "nasi-goreng.jpeg", label: "Nasi Goreng" },
  { file: "kwetiau-goreng.jpeg", label: "Kwetiau / Mie" },
  { file: "nasi-katsu.jpeg", label: "Nasi Katsu" },
  { file: "roti-bakar.jpeg", label: "Roti Bakar" },
  { file: "minuman-dingin.jpeg", label: "Minuman Dingin" },
  { file: "kopi-panas.jpeg", label: "Minuman Hangat" },
];

// Data menu (25 varian, sama seperti versi HTML)
// - gambar  : nama file foto tiap menu → taruh file dengan nama ini di public/image/
// - alt foto : otomatis memakai `nama` menu
export const MENU_AWAL = [
  // ---------- MAKANAN ----------
  { id: 1, nama: "Nasi Goreng Biasa", kelompok: "Nasi Goreng", kategori: "makanan", harga: 20000, gambar: "nasi-goreng-biasa.jpg" },
  { id: 2, nama: "Nasi Goreng Komplit", kelompok: "Nasi Goreng", kategori: "makanan", harga: 24000, gambar: "nasi-goreng-komplit.jpg" },
  { id: 3, nama: "Nasi Goreng Komplit Special", kelompok: "Nasi Goreng", kategori: "makanan", harga: 29000, gambar: "nasi-goreng-komplit-special.jpg" },
  { id: 4, nama: "Nasi Goreng Seafood", kelompok: "Nasi Goreng", kategori: "makanan", harga: 29000, gambar: "nasi-goreng-seafood.jpg" },

  { id: 5, nama: "Kwetiau Goreng Biasa", kelompok: "Kwetiau Goreng", kategori: "makanan", harga: 20000, gambar: "kwetiau-goreng-biasa.jpg" },
  { id: 6, nama: "Kwetiau Goreng Komplit", kelompok: "Kwetiau Goreng", kategori: "makanan", harga: 24000, gambar: "kwetiau-goreng-komplit.jpg" },
  { id: 7, nama: "Kwetiau Goreng Komplit Special", kelompok: "Kwetiau Goreng", kategori: "makanan", harga: 29000, gambar: "kwetiau-goreng-komplit-special.jpg" },

  { id: 8, nama: "Mie Goreng Tek Tek Biasa", kelompok: "Mie Goreng Tek Tek", kategori: "makanan", harga: 20000, gambar: "mie-goreng-tek-tek-biasa.jpg" },
  { id: 9, nama: "Mie Goreng Tek Tek Komplit", kelompok: "Mie Goreng Tek Tek", kategori: "makanan", harga: 24000, gambar: "mie-goreng-tek-tek-komplit.jpg" },
  { id: 10, nama: "Mie Goreng Tek Tek Komplit Special", kelompok: "Mie Goreng Tek Tek", kategori: "makanan", harga: 29000, gambar: "mie-goreng-tek-tek-komplit-special.jpg" },

  { id: 11, nama: "Nasi Katsu", kelompok: "Nasi Katsu", kategori: "makanan", harga: 20000, gambar: "nasi-katsu.jpg" },
  { id: 12, nama: "Nasi Katsu Geprek", kelompok: "Nasi Katsu", kategori: "makanan", harga: 22000, gambar: "nasi-katsu-geprek.jpg" },
  { id: 13, nama: "Nasi Katsu + Telor", kelompok: "Nasi Katsu", kategori: "makanan", harga: 24000, gambar: "nasi-katsu-telor.jpg" },

  { id: 14, nama: "Katsu Mix Indomie", kelompok: "Katsu Mix Indomie", kategori: "makanan", harga: 23000, gambar: "katsu-mix-indomie.jpg" },
  { id: 15, nama: "Katsu Mix Indomie + Telor", kelompok: "Katsu Mix Indomie", kategori: "makanan", harga: 27000, gambar: "katsu-mix-indomie-telor.jpg" },
  { id: 16, nama: "Katsu Mix Indomie Double", kelompok: "Katsu Mix Indomie", kategori: "makanan", harga: 28000, gambar: "katsu-mix-indomie-double.jpg" },
  { id: 17, nama: "Katsu Mix Indomie Double + Telor", kelompok: "Katsu Mix Indomie", kategori: "makanan", harga: 32000, gambar: "katsu-mix-indomie-double-telor.jpg" },

  // ---------- ROTI BAKAR ----------
  { id: 18, nama: "Roti Bakar Aneka Rasa", kelompok: "Roti Bakar", kategori: "roti", harga: 13000, gambar: "roti-bakar-aneka-rasa.jpg" },
  { id: 19, nama: "Roti Bakar Mix Keju", kelompok: "Roti Bakar", kategori: "roti", harga: 15000, gambar: "roti-bakar-mix-keju.jpg" },

  // ---------- MINUMAN ----------
  { id: 20, nama: "Nutrisari", kelompok: "Minuman Dingin", kategori: "minuman", harga: 7000, gambar: "nutrisari.jpg" },
  { id: 21, nama: "Ovaltine", kelompok: "Minuman Dingin", kategori: "minuman", harga: 10000, gambar: "ovaltine.jpg" },
  { id: 22, nama: "Good Day", kelompok: "Minuman Dingin", kategori: "minuman", harga: 10000, gambar: "good-day.jpg" },
  { id: 23, nama: "Aneka Pop Ice", kelompok: "Minuman Dingin", kategori: "minuman", harga: 10000, gambar: "aneka-pop-ice.jpg" },
  { id: 24, nama: "Aneka Kopi Panas", kelompok: "Minuman Hangat", kategori: "minuman", harga: 6000, gambar: "aneka-kopi-panas.jpg" },
  { id: 25, nama: "Ovaltine Hangat", kelompok: "Minuman Hangat", kategori: "minuman", harga: 6000, gambar: "ovaltine-hangat.jpg" },
];
