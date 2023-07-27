"use client";

import { useState } from "react";
import { AiFillHome, AiFillContacts } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";
import { FaNewspaper } from "react-icons/fa";
import Link from "next/link";
const page = () => {
  const [activeButton, setActiveButton] = useState("home");

  const handleButtonClick = (id) => {
    setActiveButton(id);
  };
  return (
    <div>
      <div className="sidebar">
        <ul className="controlls">
          <li
            className={`control control-1 ${
              activeButton === "home" ? "active-btn" : ""
            }`}
            data-id="home"
            onClick={() => handleButtonClick("home")}
          >
            <Link href="/">
              <AiFillHome />
            </Link>
          </li>
          <li
            className={`control control-2 ${
              activeButton === "about" ? "active-btn" : ""
            }`}
            data-id="about"
            onClick={() => handleButtonClick("about")}
          >
            <Link href="/about">
              <SiAboutdotme />
            </Link>
          </li>
          <li
            className={`control control-3 ${
              activeButton === "portfolio" ? "active-btn" : ""
            }`}
            data-id="portfolio"
            onClick={() => handleButtonClick("portfolio")}
          >
            <Link href="/projects">
              <FaNewspaper />
            </Link>
          </li>
          <li
            className={`control control-4 ${
              activeButton === "contact" ? "active-btn" : ""
            }`}
            data-id="contact"
            onClick={() => handleButtonClick("contact")}
          >
            <Link href="/contact">
              <AiFillContacts />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
