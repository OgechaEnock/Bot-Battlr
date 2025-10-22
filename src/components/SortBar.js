import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function SortBar({ onSort }) {
  const handleSortChange = (e) => {
    onSort(e.target.value);
  };

  return (
    <div className="container my-3">
      <div className="d-flex justify-content-between align-items-center p-3 bg-dark text-light rounded shadow-sm">
        <h5 className="mb-0">Sort Bots</h5>

        <select
          className="form-select w-auto bg-light border-0"
          onChange={handleSortChange}
        >
          <option value="">-- Sort by --</option>
          <option value="health">Health</option>
          <option value="damage">Damage</option>
          <option value="armor">Armor</option>
        </select>
      </div>
    </div>
  );
}

export default SortBar;
