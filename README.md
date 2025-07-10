# 🧠 ActivityWatch Enhanced UI

> A powerful, beautiful, plug-and-play dashboard for [ActivityWatch](on Your LocalHost Any Time and Every Time) that replaces the default UI with a real productivity control center.  
> Built with **React**, **TailwindCSS**, and **Recharts**. Powered by the same watchers — no backend modification needed.

---

![UI Preview](https://your-screenshot-url.com/preview.png) <!-- Add actual screenshot once ready -->

---

## 🎯 Why This Project Exists

The default ActivityWatch UI is minimal, raw, and static.  
We built this to **feel like a true productivity OS**, providing:

- 📊 Visual dashboards (active time, idle time, top apps, categories)
- 🎯 Category-based rule engine (e.g., `code` → `Work`)
- 📆 Timeline & trends with easy date navigation
- ⚙️ Fully local, zero data sent anywhere

> **Who is it for?**
> - Freelancers, developers, remote workers tracking deep work
> - Quantified self, dopamine detox, and habit-aware users
> - Anyone who already uses ActivityWatch and wants clarity, not CSVs

---

## 🖼️ Features Overview

| Feature                | Description |
|------------------------|-------------|
| ✅ Dashboard View      | Total active, idle time, top apps, categories |
| 📅 Date Navigation     | Move back and forth by day |
| 🔍 Rule Engine         | Categorize apps into Productivity, Leisure, etc. |
| 📈 Productivity Trends | Weekly/Monthly summaries |
| 🧠 Smart UI Components | Responsive, fast, extendable |
| 🛡️ Privacy Respecting  | Built on local watchers, no data leaves your machine |
| 💡 Plugin Friendly     | Ready for extensions like reporting, exports |

---

## 🖥️ Live Demo (Coming Soon)

<!-- Once hosted -->
> 🚀 [Live UI Preview](http://localhost:5601)

---

## 📦 Tech Stack

- **Frontend**: React + Vite + TailwindCSS + Recharts
- **API Layer**: `aw-client` + custom local proxy
- **Styling**: TailwindCSS + custom components
- **Data Source**: ActivityWatch (localhost:5600)

---

## 📁 Project Structure

```bash
activitywatch-enhanced-ui/
├── frontend/          # Full-featured modern UI (React)
│   └── src/
│       ├── components/
│       ├── pages/
│       ├── hooks/
│       ├── utils/
│       └── ...
├── backend/           # Optional: proxy or integration logic
│   └── aw-client.js   # Acts as local proxy to AW server
├── README.md          # You're reading this
├── .env               # For config
├── .gitignore
└── LICENSE
