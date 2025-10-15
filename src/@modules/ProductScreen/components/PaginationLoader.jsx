import React from "react";

const PaginationLoader = () => {
  return (
    <div>
      <div className="w-full flex justify-center items-center">
        <div className="flex rounded-[5px] w-fit  border p-2 border-primaryOpacity items-end gap-[10px]">
          <div className="animate-pulse xs:w-[70px] w-[100px]  xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]"></div>
          <div className="animate-pulse xs:w-[30px] w-[40px] xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]"></div>
          <div className="animate-pulse xs:w-[30px] w-[40px] xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]"></div>
          <div className="animate-pulse xs:w-[30px] w-[40px] xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]"></div>
          <div className="animate-pulse xs:w-[70px] w-[100px] xs:h-[30px] h-[40px] bg-primaryOpacity rounded-[5px]"></div>
        </div>
      </div>
    </div>
  );
};

export default PaginationLoader;
