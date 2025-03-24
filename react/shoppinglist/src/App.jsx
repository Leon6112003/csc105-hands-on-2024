import { useState } from "react";
import ItemCard from "./components/ItemCard";
import "./App.css";

function App() {
  const [list, setList] = useState([]);
  const [itemText, setItemText] = useState("");

  const handleAddItem = (e) => {
    e.preventDefault();
    if (itemText.trim() !== "") {
      setList([...list, { id: Date.now(), name: itemText, bought: false }]);
      setItemText("");
    }
  };

  const toggleBought = (id) => {
    setList(
      list.map((item) =>
        item.id === id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  return (
    <div className="shopping_container">
      <h1>Shopping List</h1>
      <div className="add-item-section">
        <form onSubmit={handleAddItem}>
          <input
            type="text"
            placeholder="Add an item"
            className="input_box"
            value={itemText}
            onChange={(e) => setItemText(e.target.value)}
          />
          <button type="submit" className="add_btn">
            Add
          </button>
        </form>
      </div>
      {list.map((entry) => (
        <ItemCard
          key={entry.id}
          entry={entry}
          list={list}
          setList={setList}
          toggleBought={toggleBought}
        />
      ))}
    </div>
  );
}

export default App;
