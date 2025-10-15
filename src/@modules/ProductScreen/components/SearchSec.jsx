import React, { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchSec = (props) => {
  const { search, setSearch } = props;

  return (
    <div className="flex p-10  md:px-32 py-10 w-full">
      <div className="bg-gray-200 py-10 px-5 gap-4 w-full flex flex-col rounded-md shadow-md">
        <div className="flex w-full ">
          <div className="flex flex-col md:flex-row w-full gap-6 md:gap-4 justify-between">
            <div className="relative w-full h-full">
              <input
                type="text"
                placeholder="Search travel products..."
                className="w-full px-2 transform transition  duration-500 hover:scale-y-110  py-2 rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-gradient-to-r from-[#3BA9CA]  to-[#ff7fce] focus:outline-none "
                onChange={(e) => setSearch(e.target.value)}
              />
              <MagnifyingGlassIcon className="absolute h-4 w-4 md:h-6 md:w-6 top-3 md:top-2 right-3" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSec;
