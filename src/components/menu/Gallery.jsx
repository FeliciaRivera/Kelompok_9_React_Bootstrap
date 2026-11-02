/* Gallery — galeri produk 3 kolom (col-6 col-md-4). */

import { DAFTAR_GAMBAR } from "../../data/menuData.js";
import { gambarUrl } from "../../utils/helpers.js";

function Gallery() {
  return (
    <div className="row g-3">
      {DAFTAR_GAMBAR.map((g) => (
        <div className="col-6 col-md-4" key={g.file}>
          <figure className="gallery-item m-0">
            <img src={gambarUrl(g.file)} alt={g.label} loading="lazy" />
            <figcaption>{g.label}</figcaption>
          </figure>
        </div>
      ))}
    </div>
  );
}

export default Gallery;
