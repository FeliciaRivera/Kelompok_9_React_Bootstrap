/* ToggleButton — tombol pilihan (kategori / mode tampilan).
   Saat diklik memanggil props.onSelect dengan nilainya. */

function ToggleButton(props) {
  function handleClick() {
    props.onSelect(props.value);
  }

  const kelasDasar = props.pill ? "btn btn-sm rounded-pill btn-outline-primary filter-pill" : "btn btn-outline-primary";

  return (
    <button
      type="button"
      className={kelasDasar + (props.active ? " active" : "")}
      aria-pressed={props.active}
      onClick={handleClick}
    >
      {props.label}
    </button>
  );
}

export default ToggleButton;
