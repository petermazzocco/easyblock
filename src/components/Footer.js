import React from "react";
import logo from "../img/logo.png";

const Footer = () => {
  return (
    <footer className="p-4 flex flex-row space-x-4 fixed bottom-0">
      <p className="text-xs text-white">Developed by</p>
      <a
        href="https://linkedin.com/in/petermazzocco"
        rel="noreferrer"
        target="_blank"
      >
        <img src={logo} className="w-14" alt="logo" />
      </a>
    </footer>
  );
};

export default Footer;
