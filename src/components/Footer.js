import React from "react";
import logo from "../img/logo.png";
import alchemy from "../img/alchemy.png";
const Footer = () => {
  return (
    <footer className="p-4 flex flex-row justify-between space-x-4 bottom-0">
      <div className="flex flex-row place-items-center">
        <p className="text-xs text-white">Developed by</p>
        <a
          href="https://linkedin.com/in/petermazzocco"
          rel="noreferrer"
          target="_blank"
        >
          <img src={logo} className="w-14 pl-2" alt="logo" />
        </a>
      </div>
      <div>
        <a
          href="https://alchemy.com"
          rel="noreferrer"
          target="_blank"
          className="flex flex-row place-items-center"
        >
          <p className="text-xs text-white">Alchemy University</p>
          <img src={alchemy} className="w-10 pl-2" alt="logo" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
