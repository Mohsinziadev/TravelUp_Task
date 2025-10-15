import React from "react";
import travelUpLogo from "../assets/images/websiteLogo.png";

function Footer() {
  return (
    <footer className=" border-t-[0.01rem] mt-20 font-tt-firs-neue">
      <div className="flex justify-center w-full">
        <div className="w-full  max-w-[1080px]">
          <div className="flex flex-col gap-5  md:gap-0 md:flex-row py-10 px-10 md:px-0">
            <div className="w-full md:w-1/4 flex justify-center items-center">
              <div className="flex flex-col items-center">
                <img
                  src={travelUpLogo}
                  className="object-contain h-[5rem] w-[6rem]"
                  alt="TravelUp Logo"
                />
                {/* <span className="text-lg font-bold text-primary mt-2">
                  TravelUp
                </span> */}
              </div>
            </div>
            <div className="w-full md:w-2/4 ">
              <div className="flex justify-center md:justify-start">
                <h3 className="font-bold text-2xl">About TravelUp</h3>
              </div>
              <p className="text-sm pr-10 text-justify mt-3 md:mt-0">
                TravelUp is your gateway to extraordinary travel experiences. We
                curate the finest travel products, adventures, and destinations
                to make your journey unforgettable. From luxury getaways to
                budget-friendly adventures, we have something for every
                traveler.
              </p>
              <div className="flex flex-col">
                <label htmlFor="" className="text-sm">
                  Contact us: &nbsp;
                  <span className="text-primary">support@travelup.com</span>
                </label>
                <label htmlFor="" className="text-sm">
                  Customer Service: &nbsp;
                  <span className="text-primary">+1 (555) 123-4567</span>
                </label>
              </div>
            </div>
            <div className="w-full md:w-1/4">
              <div className="flex flex-col">
                <div className="flex justify-center ">
                  <h1>Follow us</h1>
                </div>
                <div className="flex gap-4 cursor-pointer  justify-center mt-2 md:mt-0 text-xs text-primary">
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    Facebook
                  </div>
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    LinkedIn
                  </div>
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    Instagram
                  </div>
                </div>
                <div className="flex gap-4 cursor-pointer  justify-center mt-2 text-xs text-primary">
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    Twitter
                  </div>
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    YouTube
                  </div>
                  <div className="hover:text-[#3BA9CA] transition-colors">
                    TikTok
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-5 md:mt-10 bg-primary p-2 justify-center items-center">
        <div className="text-xs font-normal text-white">
          © 2024 TravelUp. All rights reserved. Designed and Developed for
          TravelUp.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
