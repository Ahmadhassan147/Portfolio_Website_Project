"use client";
import React, { useState } from "react";
import Style from "./Hero.module.css";
import { TypeAnimation } from "react-type-animation";
const Hero = () => {
  const [textColor, setTextColor] = useState("black");
  function GoTo(id) {
    const ab = document.getElementById(id);
    window.scrollTo({
      top: ab.offsetTop-20,
      behavior: "smooth",
    });
  }
  return (
    <div>
      <div className={Style.container}>
        <div className={Style.mainwrapper}>
          <div className={Style.contentArea}>
            <p>Hello</p>
            <h2>
              We are
              <br />
              <span
                className={Style.animatedText}
                style={{
                  color: textColor,
                }}
              >
                <TypeAnimation
                  sequence={[
                    "Web Developers",
                    800,
                    () => setTextColor("#FDC435"),

                    800,
                    () => setTextColor("black"),
                    "Graphic Designer",
                    1000,
                    () => setTextColor("#FDC435"),
                  ]}
                  repeat={Infinity}
                />
              </span>
            </h2>
            <p>Group Members</p>
            <ul className={Style.list}>
              <li onClick={() => GoTo("ahmad")}>
                Ahmad Hassan <span className={Style.colredDashes}>---</span>{" "}
                2021-ag-8004
              </li>
              <li onClick={() => GoTo("atteeq")}>
                Atteq ur Rehman <span className={Style.colredDashes}>---</span>{" "}
                2021-ag-8001
              </li>
              <li onClick={() => GoTo("eesha")}>
                Eesha Ahmed <span className={Style.colredDashes}>---</span>{" "}
                2021-ag-7921
              </li>
              <li onClick={() => GoTo("faiza")}>
                Fiza Siddiqa <span className={Style.colredDashes}>---</span>{" "}
                2021-ag-7937
              </li>
              <li onClick={() => GoTo("farha")}>
                Fathima Farha <span className={Style.colredDashes}>---</span>{" "}
                2021-ag-9822
              </li>
            </ul>
          </div>
        </div>
        <div className={Style.pictureArea}>
          <img src="/Images/HeroSectionColorImage.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
