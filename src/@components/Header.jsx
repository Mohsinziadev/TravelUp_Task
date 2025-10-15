import React from "react";
import {
  BellAlertIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/solid";
import travelUpLogo from "../assets/images/websiteLogo.png";

const Header = () => {
  return (
    <div className="w-full font-tt-firs-neue flex flex-col justify-center">
      <div className="flex justify-center items-center bg-primary">
        <div className="max-w-[1080px] w-full">
          <div className="flex justify-between items-center">
            <div className="text-white text-xs">
              <a className="transition-colors font-medium">Dubai</a>
            </div>
            <div className="flex items-center gap-4 text-xs  p-1 text-white">
              <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                <span className="font-medium">TravelUp App</span>
              </div>

              <a className=" transition-colors font-medium">Login</a>
              <a className=" transition-colors font-medium">About Us</a>

              <div className="hidden lg:flex items-center">
                <span className="font-medium text-lg">
                  <a href="tel:01189707574">0118 970 7574</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="max-w-[1080px] w-full">
          <div className="py-0 p-4 md:px-0 ">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <img
                  src={travelUpLogo}
                  className="object-contain h-[5rem] w-[6rem]"
                  alt="TravelUp Logo"
                />
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="hidden md:flex items-center gap-2 cursor-pointer hover:text-primary transition-colors">
                  <span className="font-medium"> Hotels </span>
                </div>

                <a className="hidden md:block hover:text-primary cursor-pointer transition-colors font-medium">
                  My Bookings
                </a>
                <a className="hidden md:block hover:text-primary cursor-pointer transition-colors font-medium">
                  Help
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
