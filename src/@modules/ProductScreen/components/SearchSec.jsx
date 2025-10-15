import React, { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const categories = [
  "Adventure",
  "Luxury",
  "Budget",
  "Cultural",
  "Beach",
  "Mountain",
];

const SearchSec = (props) => {
  const { search, setSearch, selectedCategory, setSelectedCategory } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const selectFunc = (data) => {
    setSelectedCategory(data);
    setIsOpen(false);
  };
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
            <div className="relative min-w-fit w-full md:w-[10rem]">
              <div className="flex relative flex-col gap-2">
                <button
                  className="flex items-center w-full md:w-[10rem] gap-4 justify-between min-w-fit   px-4 py-2 text-white bg-[#3BA9CA] rounded-md hover:bg-gradient-to-r from-[#3BA9CA]  to-[#ff7fce] focus:outline-none focus:ring-2 focus:[#3BA9CA] focus:ring-offset-2"
                  onClick={toggleDropdown}
                >
                  {selectedCategory || "All"}
                  <ChevronDownIcon className="h-5 w-5 " />
                </button>
                <label
                  htmlFor=""
                  className="text-[0.6rem] absolute -bottom-6 font-light text-black "
                >
                  Filter Products
                </label>
              </div>
              {isOpen && (
                <div className="absolute z-10 w-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <ul className="py-1">
                    {categories.map((category, index) => {
                      return (
                        <li key={index} onClick={() => selectFunc(category)}>
                          <button className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            {category}
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSec;
