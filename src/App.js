import React, { useEffect } from "react";
import { Routes, Route, Router, BrowserRouter} from "react-router-dom";
import ReactGA from "react-ga";
//components
import Home from "../src/components/pages/Home"
import MenuBar from "../src/components/navigation/header/Header";

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
        <div className="md:container md:mx-auto">
          <Routes>
            {/*-------------Home-------------- */}
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
      

    </BrowserRouter>
  );
}
export default App;