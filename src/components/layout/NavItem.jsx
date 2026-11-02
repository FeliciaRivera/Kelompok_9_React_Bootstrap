/* NavItem — satu tautan navbar.
   Fungsi navigasi diterima dari induk (props.onNavigate). */

function NavItem(props) {
  // Handler di atas return: memanggil fungsi dari props dengan nama halaman
  function handleClick() {
    props.onNavigate(props.page);
  }

  return (
    <li className="nav-item">
      <button
        type="button"
        className={"nav-link w-100 text-start" + (props.active ? " active" : "")}
        aria-current={props.active ? "page" : undefined}
        onClick={handleClick}
      >
        {props.label}
        {props.badge > 0 && (
          <span className="badge rounded-pill text-bg-light text-brand ms-2">{props.badge}</span>
        )}
      </button>
    </li>
  );
}

export default NavItem;
