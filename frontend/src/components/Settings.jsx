// components/Settings.jsx
import { useState } from "react";

export default function Settings() {
  const [startup, setStartup] = useState(true);
  const [theme, setTheme] = useState("light");
  const [port, setPort] = useState("4000");

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Settings</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white rounded-md p-4 shadow-sm">
          <h3 className="text-gray-800 font-medium mb-2">General</h3>
          <label className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={startup}
              onChange={() => setStartup(!startup)}
            />
            <span className="text-gray-700 text-sm">Run on startup</span>
          </label>

          <label className="block mb-2 text-sm text-gray-700">Theme</label>
          <select
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          >
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="auto">Auto</option>
          </select>
        </div>

        <div className="bg-white rounded-md p-4 shadow-sm">
          <h3 className="text-gray-800 font-medium mb-2">Server Config</h3>
          <label className="block mb-2 text-sm text-gray-700">Port</label>
          <input
            type="text"
            value={port}
            onChange={(e) => setPort(e.target.value)}
            className="w-full border rounded px-2 py-1 text-sm"
          />
          <p className="text-xs text-gray-500 mt-1">This is the local UI port.</p>
        </div>
      </div>
    </main>
  );
}
