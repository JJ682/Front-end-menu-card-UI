import { useState } from "react";
import axios from "axios";

function AddMenu({ refreshMenus }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async () => {
    if (!name) {
      alert("Enter menu name");
      return;
    }

    try {
      await axios.post("http://localhost:8080/menus", {
        name,
        description,
      });

      alert("Menu Added ✅");

      setName("");
      setDescription("");

      // refresh menu list
      if (refreshMenus) refreshMenus();

    } catch (err) {
      console.log(err);
      alert("Error adding menu ❌");
    }
  };

  return (
    <div className="add-menu">
      <input
        value={name}
        placeholder="Menu Name"
        onChange={(e) => setName(e.target.value)}
      />

      <input
        value={description}
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={handleSubmit}>Add Menu</button>
    </div>
  );
}

export default AddMenu;