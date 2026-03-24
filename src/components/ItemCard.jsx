import React from "react";

function ItemCard({ item, onDelete }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      padding: "10px"
    }}>
      
      <img
        src={`http://localhost:8080/uploads/${item.image}`}
        alt={item.name}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{item.name}</h3>
      <p>₹{item.price}</p>

      <button onClick={() => onDelete(item._id)}>
        Delete
      </button>
    </div>
  );
}

export default ItemCard;