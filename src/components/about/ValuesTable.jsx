/* ValuesTable, tabel prinsip yang dipegang oleh Warung Pojok Mba Sofy (Bootstrap table). */

function ValuesTable(props) {
  return (
    <div className="table-responsive">
      <table className="table table-bordered table-hover price-table mb-0">
        <thead>
          <tr className="kolom">
            <th>Nilai</th>
            <th>Penerapan</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((n) => (
            <tr key={n.nilai}>
              <td><strong>{n.nilai}</strong></td>
              <td>{n.penerapan}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ValuesTable;
