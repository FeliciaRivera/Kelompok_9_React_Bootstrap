/* WelcomeArticle — artikel "Selamat Datang" + keunggulan + video. */

import { KEUNGGULAN } from "../../data/warungInfo.js";
import { gambarUrl } from "../../utils/helpers.js";

function WelcomeArticle(props) {
  return (
    <article className="panel">
      <h2 className="panel-title">Selamat Datang</h2>
      <img src={gambarUrl("foto-depan.jpeg")} alt="Tampak depan Warung Pojok Mba Sofy" className="article-img mb-3" />
      <p>
        <strong>Warung Pojok Mba Sofy</strong> adalah usaha kuliner rumahan yang melayani menu masakan
        sehari-hari dengan cita rasa rumahan. Kami menyediakan aneka{" "}
        <em>nasi goreng, kwetiau/mie goreng, nasi katsu, roti bakar,</em> hingga minuman dingin dan hangat.
      </p>
      <p>
        Semua menu dimasak <strong>fresh setelah dipesan</strong> menggunakan bahan segar setiap hari,
        tanpa MSG berlebih, dan resep turun-temurun dari keluarga Mba Sofy.
      </p>

      <h3 className="panel-subtitle">Keunggulan Kami</h3>
      <ul className="feature-list list-unstyled">
        {KEUNGGULAN.map((k) => (
          <li key={k.judul}>
            <strong>{k.judul}</strong> - {k.isi}
          </li>
        ))}
      </ul>

      <h3 className="panel-subtitle">Jelajahi Lebih Lanjut</h3>
      <p>
        Ingin tahu lebih dalam tentang warung kami? Kunjungi halaman{" "}
        <button type="button" className="btn btn-link p-0 align-baseline" onClick={props.onAboutClick}>
          Tentang Kami
        </button>{" "}
        untuk mengenal visi, misi, dan cerita di balik Warung Pojok Mba Sofy.
      </p>

      <h3 className="panel-subtitle">Video Profil Warung</h3>
      <div className="ratio ratio-16x9">
        <video controls className="rounded-3" preload="metadata">
          <source src={`${import.meta.env.BASE_URL}video/vidprofile.mov`} type="video/mp4" />
          Browser Anda tidak mendukung elemen video.
        </video>
      </div>
    </article>
  );
}

export default WelcomeArticle;
