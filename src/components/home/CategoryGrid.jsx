/* CategoryGrid — grid 2 kolom kartu kategori (row + col-6 Bootstrap).
   Meneruskan props.onCategoryClick ke tiap CategoryCard. */

import CategoryCard from "./CategoryCard.jsx";

function CategoryGrid(props) {
  return (
    <div className="row g-2">
      {props.items.map((item) => (
        <div className="col-6" key={item.id}>
          <CategoryCard item={item} onCategoryClick={props.onCategoryClick} />
        </div>
      ))}
    </div>
  );
}

export default CategoryGrid;
