// components/Timelines.jsx
import { useActivityData } from "../hooks/useActivityData";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from "recharts";

const APP_COLORS = {
  "chrome.exe": "#4f46e5",
  "vlc.exe": "#22c55e",
  "explorer.exe": "#ec4899",
  "WINWORD.EXE": "#eab308",
  "ApplicationFrameHost.exe": "#06b6d4",
  "afk": "#9ca3af",
};

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const hr = Math.floor(min / 60);
  const remMin = min % 60;
  return hr > 0 ? `${hr}h ${remMin}m` : `${remMin}m`;
}

// Optional: convert raw activity to hourly segments
function convertToTimeline(topApps) {
  return topApps.map((app, i) => ({
    time: `${i + 8}:00`, // fake time slot 08:00, 09:00, ...
    app: app.name,
    duration: app.duration,
  }));
}

export default function Timeline() {
  const today = new Date().toISOString().slice(0, 10);
  const { topApps } = useActivityData(today);
  const timelineData = convertToTimeline(topApps);

  return (
    <main className="p-6">
      <h1 className="text-xl font-bold text-gray-800 mb-4">Usage Timeline</h1>
      <div className="bg-white rounded-md shadow-sm p-5 w-full h-[400px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            layout="vertical"
            data={timelineData}
            margin={{ top: 10, right: 30, left: 60, bottom: 10 }}
          >
            <XAxis type="number" hide />
            <YAxis type="category" dataKey="time" tick={{ fontSize: 12 }} />
            <Tooltip formatter={(val, _, entry) => [formatDuration(val), entry.payload.app]} />
            <Bar dataKey="duration" barSize={20}>
              {timelineData.map((entry, index) => (
                <Cell key={index} fill={APP_COLORS[entry.app] || "#6366f1"} />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </main>
  );
}
