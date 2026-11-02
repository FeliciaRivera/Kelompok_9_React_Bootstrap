/* MapBox, embed Google Maps + tombol buka di Maps. */

import { INFO_WARUNG } from "../../data/warungInfo.js";

// props.fill = true → peta memanjang mengisi sisa tinggi sidebar
function MapBox(props) {
  return (
    <div className={"border rounded-3 p-3 bg-white bg-opacity-50" + (props.fill ? " map-fill" : "")}>
      <iframe
        title="Peta lokasi Warung Pojok Mba Sofy"
        src={INFO_WARUNG.mapsEmbed}
        className="map-frame"
        loading="lazy"
      ></iframe>
    </div>
  );
}

export default MapBox;
