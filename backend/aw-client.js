import express from "express";
import cors from "cors";
import { AWClient } from "aw-client";

const app = express();
app.use(cors());

const client = new AWClient("ui-proxy");

app.get("/api/activity", async (req, res) => {
  const { date } = req.query;
  const hostname = "DESKTOP-15F9UJ8"; // hardcoded for now

  const start = new Date(date);
  start.setHours(0, 0, 0, 0);
  const end = new Date(date);
  end.setHours(23, 59, 59, 999);

  try {
    const win = await client.getEvents(`aw-watcher-window_${hostname}`, { start, end });
    const afk = await client.getEvents(`aw-watcher-afk_${hostname}`, { start, end });

    res.json({ windowEvents: win, afkEvents: afk });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.listen(5601, () => {
  console.log("Proxy running at http://localhost:5601");
});
