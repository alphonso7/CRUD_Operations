import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState("");
  const [updateItem, setUpdateItem] = useState({ id: "", title: "" });
  const [API_URL, setAPI_URL] = useState("https://fakestoreapi.com/products");

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching data:", error));
  }, [API_URL]);

  const changeapi = () => {
    if (API_URL === "https://fakestoreapi.com/products") {
      setAPI_URL("https://jsonplaceholder.typicode.com/albums");
    } else {
      setAPI_URL("https://fakestoreapi.com/products");
    }
  };

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setItems(data.slice(0, 10)))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCreate = () => {
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title: newItem, body: "", userId: 1 }),
    })
      .then((response) => response.json())
      .then((data) => setItems([...items, data]))
      .catch((error) => console.error("Error creating item:", error));
  };

  const handleUpdate = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updateItem),
    })
      .then((response) => response.json())
      .then((data) => {
        setItems(items.map((item) => (item.id === id ? data : item)));
      })
      .catch((error) => console.error("Error updating item:", error));
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, { method: "DELETE" })
      .then(() => {
        setItems(items.filter((item) => item.id !== id));
      })
      .catch((error) => console.error("Error deleting item:", error));
  };

  return (
    <div>
      <h1>CRUD Operations</h1>
      <div>
        <button onClick={changeapi}>Click to change API</button>
      </div>
      <input
        type="text"
        placeholder="Add new item"
        value={newItem}
        onChange={(e) => setNewItem(e.target.value)}
      />
      <button onClick={handleCreate}>Add Item</button>

      {updateItem.id && (
        <div>
          <input
            type="text"
            placeholder=""
            value={updateItem.title}
            onChange={(e) => setUpdateItem({ ...updateItem, title: e.target.value })}/>
          <button onClick={() => handleUpdate(updateItem.id)}> Update Item </button>
        </div>
      )}

      <ul>
        {items.map((item) => (
          <li className="listOfItems" key={item.id}>
            {item.title}{" "}
            <div>
              <button onClick={() => handleDelete(item.id)}>Delete</button>
              <button onClick={() =>setUpdateItem({ id: item.id, title: item.title })}> Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
