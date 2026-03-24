import React, { useState } from "react";
import axios from "axios";
import API from "../assets/api";
import "./modal.css";

function AddItemModal({ close, menuId }) {
  const [form, setForm] = useState({
    name: "",
    price: ""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ✅ Validation
    if (!form.name || !form.price) {
      alert("Fill all fields ❌");
      return;
    }

    if (!menuId) {
      alert("Select menu first ❌");
      return;
    }

    try {
      console.log("Sending:", {
        name: form.name,
        price: form.price,
        menuId: menuId
      });

      const res = await axios.post(`${API}/item`, {
        name: form.name,
        price: Number(form.price),
        menuId: menuId
      });

      console.log("SUCCESS:", res.data);

      alert("Item added ✅");

      close();               // close modal
      window.location.reload(); // refresh

    } catch (err) {
      console.error("ERROR:", err.response?.data || err.message);
      alert("Error ❌");
    }
  };

  return (
    <div className="modal">
      <form onSubmit={handleSubmit} className="modal-box">
        <h2>Add Item</h2>

        <input
          type="text"
          placeholder="Item Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
        />

        <input
          type="number"
          placeholder="Price"
          value={form.price}
          onChange={(e) =>
            setForm({ ...form, price: e.target.value })
          }
        />

        <button type="submit">Add</button>

        <button type="button" onClick={close}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default AddItemModal;