/* InfoBox, kotak label + isi (dipakai di banyak sidebar). */

function InfoBox(props) {
  return (
    <div className={"info-box " + (props.className || "mb-2")}>
      <p className="info-label">{props.label}</p>
      <p className="info-text">{props.children}</p>
    </div>
  );
}

export default InfoBox;
