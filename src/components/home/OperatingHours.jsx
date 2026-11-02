/* OperatingHours — jam buka + badge status Buka/Tutup (dihitung dari jam saat ini). */

import { INFO_WARUNG } from "../../data/warungInfo.js";
import { cekStatusBuka } from "../../utils/helpers.js";

function OperatingHours() {
  const sedangBuka = cekStatusBuka();

  return (
    <div className="info-box d-flex justify-content-between align-items-center">
      <div>
        <p className="info-label">{INFO_WARUNG.hariBuka}</p>
        <p className="info-text">{INFO_WARUNG.jamBuka}</p>
      </div>
      <span className={"badge " + (sedangBuka ? "text-bg-success" : "text-bg-secondary")}>
        {sedangBuka ? "Sedang Buka" : "Sedang Tutup"}
      </span>
    </div>
  );
}

export default OperatingHours;
