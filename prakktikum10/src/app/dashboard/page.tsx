"use client";

import { useEffect, useState } from "react";

type Item = {
  id: number;
  title: string;
  body: string;
};

export default function DashboardPage() {
  const [items, setItems] = useState<Item[]>([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const fetchItems = async () => {
    const res = await fetch("/api/items");
    const data = await res.json();
    setItems(data);
  };

  const createItem = async () => {
    await fetch("/api/items", {
      method: "POST",
      body: JSON.stringify({ title, body }),
      headers: { "Content-Type": "application/json" },
    });
    setTitle("");
    setBody("");
    fetchItems();
  };

  const deleteItem = async (id: number) => {
    await fetch(`/api/items/${id}`, {
      method: "DELETE",
    });
    fetchItems();
  };

  useEffect(() => {
    fetchItems();
  }, []);

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="mb-4">
        <input
          placeholder="Title"
          className="border p-2 mr-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          placeholder="Body"
          className="border p-2 mr-2"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
        <button
          onClick={createItem}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          Add
        </button>
      </div>

      <ul>
        {items.map((item) => (
          <li key={item.id} className="border-b py-2 flex justify-between">
            <div>
              <strong>{item.title}</strong>: {item.body}
            </div>
            <button
              onClick={() => deleteItem(item.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
