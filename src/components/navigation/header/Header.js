import React from "react";
import './Header.css'
import logo from "../../../images/logo.png"

const Header = () => {

  return (
    <nav className="header">
      <div className="nav-wrapper flex flex-row-reverse items-center justify-between">

        <div>
            <img src={logo} className="w-8"></img>
        </div>

        <ul className="menu rtl-size flex flex-col md:flex-row">
          <li className="w-10 h-10 md:h-auto md:w-auto">
            <a hrefLang="fa">
              Home
            </a>
          </li>
          <li className="w-16 h-10 md:h-auto md:w-auto">
            <a hrefLang="fa">
              Our projects
            </a>
          </li>
          <li className="w-16 h-10 md:h-auto md:w-auto">
            <a hrefLang="fa" href="https://hamdasti.pravsaas.com/">
              co-workers
            </a>
          </li>
        </ul>

        <div className="flex flex-row-reverse gap-x-4 w-28  md:w-auto">
          <button hrefLang="fa">
            <a href="https://app.pravsaas.com/form" className="text-white">sign-in</a>
          </button>
        </div>

      </div>

    </nav>
  );

};
export default Header;