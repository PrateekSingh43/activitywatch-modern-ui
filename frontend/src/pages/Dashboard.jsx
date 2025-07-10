import { useState } from "react";
import { useActivityData } from "../hooks/useActivityData";
import TopAppsChart from "../components/TopAppsChart";


// Utility function to change date by offset
function shiftDate(dateStr, offset) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() + offset);
  return date.toISOString().slice(0, 10);
}

export default function Dashboard() {
  const [selectDate, setSelectDate] = useState(
    new Date().toISOString().slice(0, 10)
  );
  const { totalActive, totalIdle, topApps } = useActivityData(selectDate);

  const minutes = Math.floor(totalActive / 60);
  const hours = Math.floor(minutes / 60);
  const remMin = minutes % 60;

  const idleMinutes = Math.floor(totalIdle / 60);
  const idleHours = Math.floor(idleMinutes / 60);
  const idleRemMin = idleMinutes % 60;

  return (
    <>
      <main>
        <div className="flex justify-between items-center  mb-4">
          <header>
            <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>{" "}
          </header>
          <div className="bg-white shadow-sm rounded-md px-4 py-2 flex items-center space-x-2 w-fit">
            <button
              onClick={() => setSelectDate(shiftDate(selectDate, -1))}
              className="px-2 py-1 rounded hover:bg-gray-100 text-gray-600"
            >
              &larr;
            </button>

            <input
              type="date"
              value={selectDate}
              onChange={(e) => setSelectDate(e.target.value)}
              className="border border-gray-300 text-sm rounded px-2 py-1 focus:outline-none focus:ring-1 focus:ring-indigo-500"
            />

            <button
              onClick={() => setSelectDate(shiftDate(selectDate, 1))}
              className="px-2 py-1 rounded hover:bg-gray-100 text-gray-600"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="flex justify-between gap-4">
          <div className="bg-white shadow-sm rounded-sm p-6 w-[320px] h-[120px] flex flex-col justify-between">
            <p className="text-sm text-gray-500">Total Active Time</p>
            <h3 className="text-xl font-bold text-gray-900">
              {hours}h {remMin}m
            </h3>
          </div>
          <div className="bg-white shadow-sm rounded-sm p-6 w-[320px] h-[120px] flex flex-col justify-between">
            <p className="text-sm text-gray-500">Idle Time</p>
            <h3 className="text-xl font-bold text-gray-900">
              {idleHours}h {idleRemMin}m
            </h3>
          </div>
          <div className="bg-white shadow-sm rounded-sm p-6 w-[320px] h-[120px] flex flex-col justify-between">
            <p className="text-sm text-gray-500">Top Category</p>
            <h3 className="text-xl font-bold text-gray-900">N/A</h3>
          </div>
        </div>

        <div className="flex justify-between items-center mt-10  ">
          <div className="bg-white rounded-md shadow-sm  p-5  w-[590px] h-[300px] flex flex-col justify-between">
            <div>
              <h3 className=" border-b border-gray-200 pb-3 text-md  px-2 font-semibold text-gray-800">
                Top 5 Apps
              </h3>
             <TopAppsChart topApps={topApps} />
            </div>
          </div>

          <div className="bg-white rounded-md shadow-sm  p-5  w-[590px] h-[300px] flex flex-col justify-between">
            <div className="">
              <h3 className=" border-b border-gray-200 pb-3 text-md  px-2 font-semibold text-gray-800">
                Category Distribution
              </h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
