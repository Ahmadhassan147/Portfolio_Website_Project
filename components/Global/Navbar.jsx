"use client";
import React from "react";
import Style from "./Navbar.module.css";
import Link from "next/link";
const Navbar = () => {
  return (
    <div className={Style.Navbar}>
      <div className={Style.conatiner}>
        <h1>
          <img src="/Images/MainLogo.svg" alt="" />
        </h1>
        <ul>
          <Link href={"/"}>
            <li>
              <a href="">Home</a>
            </li>
          </Link>
          <Link href={"/projects"}>
            <li>
              <a href="">Projects</a>
            </li>
          </Link>
          <button className={Style.Navarbtn}>Hire Us</button>
        </ul>
        <div className={Style.responsiveForMobile}>
          <input type="checkbox" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
