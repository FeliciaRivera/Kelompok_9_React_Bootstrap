/* CategoryCard — kartu kategori yang bisa diklik → buka Menu terfilter. */

import { gambarUrl } from "../../utils/helpers.js";

function CategoryCard(props) {
  function handleClick() {
    props.onCategoryClick(props.item);
  }

  return (
    <button type="button" className="category-card" onClick={handleClick} title={`Lihat menu ${props.item.label}`}>
      <img src={gambarUrl(props.item.gambar)} alt={props.item.label} />
      <span className="info-label d-block">{props.item.label}</span>
      <span className="info-text d-block">{props.item.varian}</span>
    </button>
  );
}

export default CategoryCard;
