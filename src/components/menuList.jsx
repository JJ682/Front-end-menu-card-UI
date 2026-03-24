import { useEffect, useState } from "react";
import axios from "axios";
import API from "../assets/api";

function MenuList({ setSelectedMenu }) {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    axios.get(`${API}/menu`)
      .then((res) => setMenus(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      {menus.map((menu) => (
        <div
          key={menu._id}
          onClick={() => setSelectedMenu(menu._id)}
          style={{
            padding: "10px",
            marginBottom: "5px",
            background: "#333",
            color: "white",
            cursor: "pointer",
          }}
        >
          {menu.name}
        </div>
      ))}
    </div>
  );
}

export default MenuList;