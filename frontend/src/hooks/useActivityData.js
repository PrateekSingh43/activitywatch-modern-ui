import { useEffect, useState } from "react";

export const useActivityData = (date) => {
  const [data, setData] = useState({
    totalActive: 0,
    totalIdle: 0,
    topApps: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`http://localhost:5601/api/activity?date=${date}`);
      const { windowEvents, afkEvents } = await res.json();

      const totalActive = windowEvents.reduce((sum, e) => sum + e.duration, 0);

      const totalIdle = afkEvents
        .filter(e => e.data.status === "afk")
        .reduce((sum, e) => sum + e.duration, 0);

      const appMap = {};
      windowEvents.forEach(e => {
        const app = e.data.app || "Unknown";
        appMap[app] = (appMap[app] || 0) + e.duration;
      });

      const topApps = Object.entries(appMap)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 5)
        .map(([name, duration]) => ({ name, duration }));

      setData({ totalActive, totalIdle, topApps });
    };

    fetchData();
  }, [date]);

  return data;
};
