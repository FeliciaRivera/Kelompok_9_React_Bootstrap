/* =============================================================
   FUNGSI BANTU (pemroses data) — dipisah dari JSX
   ============================================================= */

// 20000 → "Rp 20.000"
export function formatRupiah(angka) {
  return "Rp " + Number(angka || 0).toLocaleString("id-ID");
}

// Path gambar di folder public
export function gambarUrl(file) {
  return `${import.meta.env.BASE_URL}image/${file}`;
}

// Cek status buka: Senin–Jumat, 07.00–17.00
export function cekStatusBuka(tanggal = new Date()) {
  const hari = tanggal.getDay(); // 0 = Minggu, 6 = Sabtu
  const jam = tanggal.getHours();
  const hariKerja = hari >= 1 && hari <= 5;
  return hariKerja && jam >= 7 && jam < 17;
}

// Filter + urutkan daftar menu sesuai pilihan pengguna
export function prosesDaftarMenu(menuItems, filter) {
  const keyword = filter.keyword.trim().toLowerCase();

  const hasil = menuItems.filter(function (item) {
    const cocokKategori = filter.kategori === "semua" || item.kategori === filter.kategori;
    const cocokKeyword =
      keyword === "" ||
      item.nama.toLowerCase().includes(keyword) ||
      item.kelompok.toLowerCase().includes(keyword);
    return cocokKategori && cocokKeyword;
  });

  if (filter.urutan === "termurah") hasil.sort((a, b) => a.harga - b.harga);
  if (filter.urutan === "termahal") hasil.sort((a, b) => b.harga - a.harga);
  if (filter.urutan === "nama") hasil.sort((a, b) => a.nama.localeCompare(b.nama));

  return hasil;
}

// Gabungkan isi keranjang [{id, qty}] dengan data menu → detail lengkap
export function detailKeranjang(cart, menuItems) {
  return cart
    .map(function (baris) {
      const menu = menuItems.find((m) => m.id === baris.id);
      if (!menu) return null;
      return { ...menu, qty: baris.qty, subtotal: menu.harga * baris.qty };
    })
    .filter(Boolean);
}

// Hitung ringkasan keranjang
export function hitungTotal(items) {
  return items.reduce(
    function (acc, item) {
      return { totalItem: acc.totalItem + item.qty, totalHarga: acc.totalHarga + item.subtotal };
    },
    { totalItem: 0, totalHarga: 0 }
  );
}

// Kelompokkan menu per "kelompok" untuk tabel dengan rowspan
export function kelompokkanMenu(items) {
  const grup = [];
  items.forEach(function (item) {
    let g = grup.find((x) => x.kelompok === item.kelompok);
    if (!g) {
      g = { kelompok: item.kelompok, items: [] };
      grup.push(g);
    }
    g.items.push(item);
  });
  return grup;
}

// Validasi form checkout → objek error (kosong = valid)
export function validasiCheckout(data) {
  const errors = {};
  if (data.nama.trim().length < 3) errors.nama = "Nama minimal 3 karakter.";
  if (!/^\S+@\S+\.\S+$/.test(data.email)) errors.email = "Format email tidak valid.";
  if (!/^[0-9]{10,13}$/.test(data.telepon)) errors.telepon = "No. telepon 10–13 digit angka.";
  return errors;
}
