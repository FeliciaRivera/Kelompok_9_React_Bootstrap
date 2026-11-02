/* =============================================================
   DATA STATIS WARUNG (profil, kontak, kategori, visi-misi, nilai)
   ============================================================= */

export const INFO_WARUNG = {
  nama: "Warung Pojok Mba Sofy",
  tagline: "Masakan Rumahan, Rasa Istimewa",
  telepon: "0813-8376-3005",
  email: "warung.mbasofy@gmail.com",
  hariBuka: "Senin – Jumat",
  jamBuka: "07.00 – 17.00 WIB",
  berdiri: "2018",
  lokasi: "Jakarta Barat, DKI Jakarta",
  mapsLink: "https://maps.google.com/?q=Warung+Pojok+Mba+Sofy",
  mapsEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.71564722645!2d106.78846659999999!3d-6.1688182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f65c8572640d%3A0xc0a066d78372614e!2sTarumanagara%20University!5e0!3m2!1sen!2sid!4v1789272072377!5m2!1sen!2sid",
};

// Kartu kategori di sidebar Beranda (klik → buka Menu dengan filter)
export const KATEGORI_PRODUK = [
  { id: 1, label: "Nasi Goreng", varian: "Biasa · Komplit · Special", gambar: "nasi-goreng.jpeg", kategori: "makanan", keyword: "Nasi Goreng" },
  { id: 2, label: "Kwetiau & Mie", varian: "Biasa · Komplit · Special", gambar: "kwetiau-goreng.jpeg", kategori: "makanan", keyword: "Goreng" },
  { id: 3, label: "Nasi Katsu", varian: "Original · Geprek · Telor", gambar: "nasi-katsu.jpeg", kategori: "makanan", keyword: "Katsu" },
  { id: 4, label: "Roti Bakar", varian: "Aneka Rasa · Mix Keju", gambar: "roti-bakar.jpeg", kategori: "roti", keyword: "" },
  { id: 5, label: "Minuman Dingin", varian: "Nutrisari · Ovaltine · Pop Ice", gambar: "minuman-dingin.jpeg", kategori: "minuman", keyword: "" },
  { id: 6, label: "Minuman Hangat", varian: "Kopi · Ovaltine Hangat", gambar: "kopi-panas.jpeg", kategori: "minuman", keyword: "Panas" },
];

export const KEUNGGULAN = [
  { judul: "Menu bervariasi", isi: "mulai dari Rp 6.000!" },
  { judul: "Porsi fleksibel", isi: "tersedia Komplit & Special!" },
  { judul: "Dimasak fresh", isi: "pesanan dimasak langsung setelah pesanan diterima!" },
  { judul: "Tempat nyaman", isi: "bersih dan ramah untuk seluruh pelanggan!" },
];

export const VISI =
  "Menjadi warung makan rumahan yang terpercaya, terjangkau, dan konsisten dalam menyajikan cita rasa masakan Indonesia yang sehat.";

export const MISI = [
  "Menyajikan masakan dengan bahan segar dan berkualitas",
  "Memberikan porsi yang memuaskan dengan harga terjangkau",
  "Menjaga kebersihan dan kenyamanan tempat makan",
  "Melayani pelanggan dengan ramah dan cepat",
  "Terus berinovasi pada menu tanpa meninggalkan cita rasa asli",
];

export const NILAI = [
  { nilai: "Kejujuran", penerapan: "Bahan yang digunakan selalu sesuai standar, tanpa pengurangan kualitas." },
  { nilai: "Kebersihan", penerapan: "Dapur dan area makan dibersihkan setiap hari, sebelum dan sesudah buka." },
  { nilai: "Keramahan", penerapan: "Setiap pelanggan disambut dengan senyum dan pelayanan yang ramah." },
  { nilai: "Konsistensi", penerapan: "Rasa setiap menu dijaga agar tetap sama setiap harinya." },
];

export const INFO_PEMESANAN = [
  { label: "Estimasi Waktu", isi: "Dine-in: 10–15 menit · Take away: 15–20 menit" },
  { label: "Metode Pembayaran", isi: "Tunai · Transfer Bank · QRIS · GoPay · OVO · Dana" },
  { label: "Tips Pemesanan", isi: "Pesan minimal 30 menit sebelum jam pengambilan jika ingin diambil nanti." },
];
