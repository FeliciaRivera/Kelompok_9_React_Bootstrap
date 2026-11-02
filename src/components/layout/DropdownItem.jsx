/* DropdownItem — item di dropdown "Menu" pada navbar. */

function DropdownItem(props) {
  function handleClick() {
    props.onSelect(props.kategori);
  }

  return (
    <li>
      <button type="button" className="dropdown-item" onClick={handleClick}>
        {props.label}
      </button>
    </li>
  );
}

export default DropdownItem;
