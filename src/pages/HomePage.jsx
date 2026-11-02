/* HomePage — Beranda (migrasi dari index.html)
   Layout 2 kolom Bootstrap: col-lg-8 (artikel) + col-lg-4 (sidebar) */

import Hero from "../components/home/Hero.jsx";
import WelcomeArticle from "../components/home/WelcomeArticle.jsx";
import CategoryGrid from "../components/home/CategoryGrid.jsx";
import OperatingHours from "../components/home/OperatingHours.jsx";
import MapBox from "../components/common/MapBox.jsx";
import ContactBox from "../components/common/ContactBox.jsx";
import { KATEGORI_PRODUK } from "../data/warungInfo.js";

function HomePage(props) {
  // Handler halaman: diteruskan ke komponen anak lewat props
  function handleOrderClick() {
    props.onNavigate("menu");
  }

  function handleAboutClick() {
    props.onNavigate("tentang");
  }

  function handleCategoryClick(kategoriProduk) {
    props.onSelectCategory(kategoriProduk.kategori, kategoriProduk.keyword);
  }

  return (
    <>
      <Hero onOrderClick={handleOrderClick} menuCount={props.menuCount} />

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <WelcomeArticle onAboutClick={handleAboutClick} />
        </div>

        <aside className="col-lg-4">
          {/* h-100 + flex-column: panel setinggi kolom kiri (col-lg-8) */}
          <div className="panel h-100 d-flex flex-column">
            <h3 className="panel-title">Kategori Produk</h3>
            <CategoryGrid items={KATEGORI_PRODUK} onCategoryClick={handleCategoryClick} />

            <h3 className="panel-title mt-4">Jam Operasional</h3>
            <OperatingHours />

            <h3 className="panel-title mt-4">Peta Lokasi</h3>
            <MapBox fill />

            <h3 className="panel-title mt-4">Kontak Cepat</h3>
            <ContactBox />
          </div>
        </aside>
      </div>
    </>
  );
}

export default HomePage;
