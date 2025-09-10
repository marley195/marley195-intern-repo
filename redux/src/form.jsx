import React, { useState } from "react";

function ShoppingList() {
  const [item, setItem] = useState(""); // input value
  const [shoppingList, setShoppingList] = useState([]); // array of items

  const addItem = () => {
    if (item.trim() === "") return; // ignore empty input
    setShoppingList([...shoppingList, item]); // add item to array
    setItem(""); // clear input field
  };

  return (
    <div>
      <h1>Shopping List</h1>
      <input
        type="text"
        value={item}
        onChange={(event) => setItem(event.target.value)}
        placeholder="Add a grocery item"
      />
      <button onClick={addItem}>Add Item</button>

      <ul>
        {shoppingList.map((grocery, index) => (
          <li key={index}>{grocery}</li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
