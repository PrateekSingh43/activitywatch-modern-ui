import { Link } from "react-router-dom";
import {
  LayoutDashboard,
  Timer,
  Folder,
  Settings,
  ChevronLeft,
} from "lucide-react";

export default function Sidebar() {
  return (
    <>
      <aside className="w-64 bg-white shadow-lg h-full">
        <div className="flex items-center justify-between text-lg font-bold p-4 border-b border-gray-300 mb-20">
          <span>Activity Watch</span>
          <button className="text-gray-600 text-[1.4rem] leading-none rounded hover:bg-gray-100 px-2 py-1">
           <ChevronLeft />
          </button>
        </div>

        <nav>
          <ul className="space-y-2 px-4">
            <li>
              <Link
                to="/"
                className="flex items-center gap-2  p-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition">
               <LayoutDashboard className="w-2.6" />
                Dashboards
                
              </Link>
            </li>
            <li>
              <Link
                to="/timelines"
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              >
                <Timer className="w-2.6"/>
                Timelines
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              > 
              < Folder  className="w-2.6" />
                Categories
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="flex items-center gap-2 px-4 py-2 rounded-md hover:bg-gray-100 hover:text-blue-600 transition"
              > 
              <Settings className="w-2.9" />
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
