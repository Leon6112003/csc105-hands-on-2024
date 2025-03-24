import React, { useState } from "react";
import "../style/ItemCard.css";

function ItemCard({ entry, list, setList }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(entry.name);

  // Toggle "bought" status
  const toggleBought = () => {
    setList(
      list.map((item) =>
        item.id === entry.id ? { ...item, bought: !item.bought } : item
      )
    );
  };

  // Remove an item
  const handleRemove = () => {
    setList(list.filter((item) => item.id !== entry.id));
  };

  // Update an item name
  const handleEdit = () => {
    if (editText.trim() !== "") {
      setList(
        list.map((item) =>
          item.id === entry.id ? { ...item, name: editText } : item
        )
      );
    }
    setIsEditing(false);
  };

  // Handle Enter key press
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleEdit();
    }
  };

  return (
    <div
      className={`card_container ${entry.bought ? "bought" : ""}`}
      onClick={!isEditing ? toggleBought : undefined} // Prevent toggling when editing
    >
      {isEditing ? (
        <input
          type="text"
          className="edit_input"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={handleKeyPress}
          autoFocus
        />
      ) : (
        <span className="entry_name">{entry.name}</span>
      )}

      {isEditing ? (
        <button className="save_button" onClick={handleEdit}>
          Save
        </button>
      ) : (
        <button
          className="update_button"
          onClick={(e) => {
            e.stopPropagation(); // Prevent marking as bought when clicking edit
            setIsEditing(true);
          }}
        >
          Edit
        </button>
      )}

      <button
        className="delete_button"
        onClick={(e) => {
          e.stopPropagation();
          handleRemove();
        }}
      >
        Remove
      </button>
    </div>
  );
}

export default ItemCard;
