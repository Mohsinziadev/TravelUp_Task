import { useEffect, useState } from "react";

import { Outlet } from "react-router-dom";
import Header from "./@components/Header";
import Footer from "./@components/Footer";
import backgroundImage from "./assets/images/BackgroundImage.webp";
import foregroundImage from "./assets/images/ForeGroundImage.webp";
import SplashScreen from "./@components/SplashScreen";

function App() {
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoadingApp(false), 5000);
  }, []);

  return (
    <div className="App w-full overflow-hidden">
      {loadingApp && <SplashScreen />}
      <div className="shadow-md">
        <Header />
      </div>
      <div>
        <div className="relative flex justify-center items-center">
          <img
            src={backgroundImage}
            className="w-full"
            alt="TravelUp Background"
          />
          <img
            src={foregroundImage}
            className="h-14 w-30 absolute"
            alt="TravelUp Foreground"
          />
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>

      <div className="flex w-full font-tt-firs-neue justify-center">
        <div className="max-w-[1080px] w-full">
          <Outlet />
        </div>
      </div>
      <div className="shadow-sm">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
