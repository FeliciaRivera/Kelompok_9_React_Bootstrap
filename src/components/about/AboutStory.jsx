/* AboutStory, berisi cerita, visi, dan misi. */

import { MISI, VISI } from "../../data/warungInfo.js";
import { gambarUrl } from "../../utils/helpers.js";

function AboutStory() {
  return (
    <>
      <h2 className="panel-title">Cerita Kami</h2>
      <img src={gambarUrl("foto-depan.jpeg")} alt="Tampak depan Warung Pojok Mba Sofy" className="article-img mb-3" />
      <p>
        <strong>Warung Pojok Mba Sofy</strong> berawal dari dapur rumah Mba Sofy pada tahun 2018. Berawal dari
        kecintaan pada masakan rumahan dan keinginan untuk berbagi rasa, Mba Sofy mulai membuka warung kecil di
        pojok jalan yang kini menjadi tempat favorit warga sekitar.
      </p>
      <p>
        Nama "Pojok" sendiri diambil karena lokasi warung yang berada di sudut jalan, namun justru dari pojok
        itulah kami melayani ratusan pelanggan setiap harinya dengan penuh kehangatan.
      </p>

      <h3 className="panel-subtitle">Visi</h3>
      <p>{VISI}</p>

      <h3 className="panel-subtitle">Misi</h3>
      <ul className="feature-list list-unstyled">
        {MISI.map((m) => (
          <li key={m}>{m}</li>
        ))}
      </ul>
    </>
  );
}

export default AboutStory;
