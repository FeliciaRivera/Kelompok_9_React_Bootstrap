/* QuickInfo, kumpulan InfoBox di sidebar Tentang. */

import InfoBox from "../common/InfoBox.jsx";
import { INFO_WARUNG } from "../../data/warungInfo.js";

function QuickInfo() {
  return (
    <>
      <InfoBox label="Berdiri Sejak">{INFO_WARUNG.berdiri}</InfoBox>
      <InfoBox label="Lokasi">{INFO_WARUNG.lokasi}</InfoBox>
      <InfoBox label="Jenis Usaha">Warung Makan Rumahan</InfoBox>
      <InfoBox label="Jam Buka">{INFO_WARUNG.hariBuka}, {INFO_WARUNG.jamBuka}</InfoBox>
      <InfoBox label="Layanan">Dine-in &amp; Take away</InfoBox>
    </>
  );
}

export default QuickInfo;
