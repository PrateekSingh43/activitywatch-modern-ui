// components/Categories.jsx
import { useState } from "react";

const DEFAULT_RULES = [
  { id: 1, app: "chrome.exe", category: "Browsing" },
  { id: 2, app: "vscode.exe", category: "Development" },
  { id: 3, app: "vlc.exe", category: "Entertainment" },
];

export default function Categories() {
  const [rules, setRules] = useState(DEFAULT_RULES);
  const [newApp, setNewApp] = useState("");
  const [newCat, setNewCat] = useState("");

  const addRule = () => {
    if (!newApp || !newCat) return;
    const newRule = {
      id: rules.length + 1,
      app: newApp.trim(),
      category: newCat.trim(),
    };
    setRules([...rules, newRule]);
    setNewApp("");
    setNewCat("");
  };

  const removeRule = (id) => {
    setRules(rules.filter((r) => r.id !== id));
  };

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Category Rules</h1>
      <div className="grid grid-cols-2 gap-6">
        {rules.map((rule) => (
          <div key={rule.id} className="bg-white rounded-md p-4 shadow-sm flex justify-between items-center">
            <div>
              <p className="text-gray-600 text-sm">App: <span className="font-medium">{rule.app}</span></p>
              <p className="text-gray-600 text-sm">Category: <span className="font-medium">{rule.category}</span></p>
            </div>
            <button
              onClick={() => removeRule(rule.id)}
              className="text-red-500 hover:text-red-700 text-sm"
            >
              Remove
            </button>
          </div>
        ))}
        <div className="bg-gray-50 rounded-md p-4 border border-dashed border-gray-300">
          <h3 className="font-medium text-gray-700 mb-2">Add New Rule</h3>
          <input
            type="text"
            placeholder="App Name"
            value={newApp}
            onChange={(e) => setNewApp(e.target.value)}
            className="mb-2 w-full px-2 py-1 text-sm border rounded"
          />
          <input
            type="text"
            placeholder="Category"
            value={newCat}
            onChange={(e) => setNewCat(e.target.value)}
            className="mb-2 w-full px-2 py-1 text-sm border rounded"
          />
          <button
            onClick={addRule}
            className="w-full bg-indigo-600 text-white py-1 rounded hover:bg-indigo-700 text-sm"
          >
            Add Rule
          </button>
        </div>
      </div>
    </main>
  );
}
