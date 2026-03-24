import React from "react";

function Header({ title, onOpen }) {
  return (
    <div className="header">
      <h2>{title}</h2>

      <button className="add-btn" onClick={onOpen}>
        + Add Item
      </button>
    </div>
  );
}

export default Header;