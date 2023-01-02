import React, { useEffect } from "react";
import { Routes, Route, Router, BrowserRouter} from "react-router-dom";
import ReactGA from "react-ga";
//components
import Home from "../src/components/pages/Home"
import MenuBar from "../src/components/navigation/header/Header";
import Footer from "./components/navigation/footer/Footer";
//styles
import "./App.css";
function App() {
  //change tabBar name
  useEffect(() => {
    window.scrollTo(0, 0);
    ReactGA.initialize("UA-237395014-1");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <BrowserRouter>
      
        <div className="body-wrap z-50">
        {/*-------------Menubar-------------- */}
        <div className="fixed z-50 w-full nav-container">
          <MenuBar />
        </div>
        {/*------------------------------Routes----------------------------- */}
        <div className="w-full">
          <Routes>
            {/*-------------Home-------------- */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        {/*-------------Footer-------------- */}
        <div className="z-50 w-full">
          <Footer />
        </div>
      </div>
      

    </BrowserRouter>
  );
}
export default App;