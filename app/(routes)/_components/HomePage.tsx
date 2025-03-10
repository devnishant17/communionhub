import { Search } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <div className="text-white text-7xl font-bold my-[5rem] space-y-8 ml-24 font-battambang">
        <div>Explore the</div>
        <div>Unexplored Event in India</div>
      </div>

      <div className="p-2 bg-white shadow-xl rounded-full flex items-center w-3/5 mx-auto border border-gray-300">
        <div className="flex-1 flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
          <div className="flex flex-col w-full">
            <label
              htmlFor="where"
              className="text-sm font-semibold text-gray-700"
            >
              Where
            </label>
            <input
              type="text"
              placeholder="Search destinations"
              className="outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
          <div className="flex flex-col w-full">
            <label
              htmlFor="checkIn"
              className="text-sm font-semibold text-gray-700"
            >
              Start In
            </label>
            <input
              type="date"
              className="outline-none bg-transparent text-sm text-gray-600 appearance-none placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
          <div className="flex flex-col w-full">
            <label
              htmlFor="checkOut"
              className="text-sm font-semibold text-gray-700"
            >
              End at
            </label>
            <input
              type="date"
              className="outline-none bg-transparent text-sm text-gray-600 appearance-none placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="flex-1 flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full">
          <div className="flex flex-col w-full">
            <label
              htmlFor="who"
              className="text-sm font-semibold text-gray-700"
            >
              Who
            </label>
            <input
              type="text"
              placeholder="Add guests"
              className="outline-none bg-transparent text-sm text-gray-600 placeholder-gray-400 w-full"
            />
          </div>
        </div>

        <div className="bg-teal-500 p-4 rounded-full cursor-pointer flex items-center justify-center mx-3">
          <Search className="text-white text-xl " />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
