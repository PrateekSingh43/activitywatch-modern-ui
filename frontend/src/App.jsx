import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Timeline from "./components/Timeline";
import Categories from "./components/Categoires";
import Settings from "./components/Settings";



export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 p-6 overflow-y-auto bg-gray-50">
          <Routes>
            <Route path="/" element={<Dashboard />} />
             <Route path="/timelines" element={<Timeline />} />
              <Route path="//categories" element={<Categories />} />
               <Route path="/settings" element={<Settings />} />
        
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
