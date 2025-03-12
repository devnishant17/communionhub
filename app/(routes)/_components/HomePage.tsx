import { Search } from "lucide-react";
import React from "react";

const HomePage = () => {
  return (
    <div>
<div className="text-white text-4xl md:text-6xl lg:text-7xl w-full font-bold my-10 md:my-16 space-y-4 md:space-y-6 lg:space-y-8 ml-6 md:ml-12 lg:ml-24 font-battambang">
  <div>Connecting People</div>
  <div>Across Faiths & Interests</div>
</div>


      <div className="p-2 bg-white shadow-xl rounded-full flex justify-between mx-auto border border-gray-300">
        <div className=" flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
          <div className="flex  flex-col w-full">
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

        <div className="flex-1 hide-head flex items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
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

        <div className="flex-1 flex hide-head items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full border-r border-gray-300">
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

        <div className="flex-1 flex hide-head items-center gap-2 px-6 py-3 hover:bg-gray-100 hover:rounded-full">
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

        <div className="bg-teal-500 p-6 rounded-full cursor-pointer flex items-center justify-center mx-3 me-0">
          <Search className="text-white text-xl " />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
