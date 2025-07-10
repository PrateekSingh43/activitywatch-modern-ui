import {
  BarChart,
  Bar,
  XAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts";

const COLORS = ["#4f46e5", "#6366f1", "#818cf8", "#a5b4fc", "#c7d2fe"];

function formatAppName(app) {
  return app.replace(".exe", "");
}

function formatDuration(seconds) {
  const min = Math.floor(seconds / 60);
  const hr = Math.floor(min / 60);
  const remMin = min % 60;
  return hr > 0 ? `${hr}h ${remMin}m` : `${remMin}m`;
}

export default function TopAppsChart({ topApps }) {
  const data = topApps.map(a => ({
    ...a,
    name: formatAppName(a.name),
  }));

  return (
    <ResponsiveContainer width="100%" height={240}>
      <BarChart data={data}>
        <XAxis dataKey="name" tick={{ fontSize: 12 }} />
        <Tooltip formatter={(val) => formatDuration(val)} />
        <Bar dataKey="duration" radius={[8, 8, 0, 0]}>
          {data.map((_, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}