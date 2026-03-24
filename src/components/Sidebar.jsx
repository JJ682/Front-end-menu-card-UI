import React from "react";
import "./sidebar.css";

const menus = ["Food", "Drinks", "Brunch"];

function Sidebar({ selected, setSelected }) {
  return (
    <div className="sidebar">
      <h2 className="logo">🍽 Menu</h2>

      {menus.map((menu) => (
        <button
          key={menu}
          className={`menu-btn ${selected === menu ? "active" : ""}`}
          onClick={() => setSelected(menu)}
        >
          {menu}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;