/* AboutPage — Tentang Kami (migrasi dari about.html) */

import AboutStory from "../components/about/AboutStory.jsx";
import ValuesTable from "../components/about/ValuesTable.jsx";
import QuickInfo from "../components/about/QuickInfo.jsx";
import MapBox from "../components/common/MapBox.jsx";
import ContactBox from "../components/common/ContactBox.jsx";
import { NILAI } from "../data/warungInfo.js";

function AboutPage() {
  return (
    <>
      <h2 className="page-title">Tentang Warung Pojok Mba Sofy</h2>

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <article className="panel">
            <AboutStory />
            <h3 className="panel-subtitle">Nilai yang Kami Pegang</h3>
            <ValuesTable items={NILAI} />
          </article>
        </div>

        <aside className="col-lg-4">
          {/* h-100 + flex-column: panel setinggi kolom kiri (col-lg-8) */}
          <div className="panel h-100 d-flex flex-column">
            <h3 className="panel-title">Info Singkat</h3>
            <QuickInfo />

            <h3 className="panel-title mt-4">Peta Lokasi</h3>
            <MapBox fill />

            <h3 className="panel-title mt-4">Hubungi Kami</h3>
            <ContactBox />
          </div>
        </aside>
      </div>
    </>
  );
}

export default AboutPage;
