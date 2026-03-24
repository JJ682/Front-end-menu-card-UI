import { useState } from "react";
import ItemGrid from "../components/ItemGrid";
import AddItemModal from "../components/AddItemModal";
import Sidebar from "../components/Sidebar";
import "./home.css";

function Home() {
  const [showModal, setShowModal] = useState(false);
  const [selectedMenu, setSelectedMenu] = useState("Food");

  return (
    <div className="home-container">

      {/* Sidebar */}
      <Sidebar
        selected={selectedMenu}
        setSelected={setSelectedMenu}
      />

      {/* Main */}
      <div className="main-content">
        <h1>{selectedMenu} Items</h1>

        <button
          className="add-btn"
          onClick={() => setShowModal(true)}
        >
          + Add Item
        </button>

        <ItemGrid menuId={selectedMenu} />

        {showModal && (
          <AddItemModal
            close={() => setShowModal(false)}
            menuId={selectedMenu}   
          />
        )}
      </div>
    </div>
  );
}

export default Home;