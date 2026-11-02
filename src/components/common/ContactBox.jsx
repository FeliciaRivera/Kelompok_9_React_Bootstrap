/* ContactBox, telepon & email warung. */

import { INFO_WARUNG } from "../../data/warungInfo.js";

function ContactBox() {
  return (
    <div className="info-box">
      <p className="info-label">Telepon</p>
      <p className="info-text mb-2">{INFO_WARUNG.telepon}</p>
      <p className="info-label">Email</p>
      <p className="info-text">{INFO_WARUNG.email}</p>
    </div>
  );
}

export default ContactBox;
