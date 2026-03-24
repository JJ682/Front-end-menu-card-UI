import React, { useEffect, useState } from "react";
import axios from "axios";
import API from "../assets/api";

function ItemGrid({ menuId }) {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    try {
      const res = await axios.get(`${API}/item`);
      setItems(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API}/item/${id}`);
      fetchItems();
    } catch (err) {
      console.error(err);
    }
  };

  const filteredItems = items.filter(
    (item) => item.menuId === menuId
  );

  return (
    <div>
      {filteredItems.length === 0 ? (
        <p>No items found</p>
      ) : (
        filteredItems.map((item) => (
          <div key={item._id}>
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => handleDelete(item._id)}>
              Delete
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default ItemGrid;