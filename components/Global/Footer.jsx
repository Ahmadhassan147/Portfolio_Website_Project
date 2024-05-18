"use client";
import React from "react";
import Style from "./footer.module.css";

function Footer() {
  return (
    <div>
      <div className={Style.contianer}>
        <div className={Style.Wave}>
          <img src="/Images/FooterWave.svg" alt="" />
        </div>
        <div className={Style.footerArea}>
          <div className={Style.footerMenuArea}>
            <div className={Style.footertextArea}>
              <img src="/Images/footerPageLogo.svg" alt="" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                animi reprehenderit tempora odit. Ullam nobis quisquam vel,
                doloremque doloribus dolores fugiat enim aliquam!{" "}
              </p>
            </div>
            <div className={Style.footerMenu}>
              <div className={Style.quicklinks}>
                <h2>Quick Links</h2>
                <ul>
                  <li>
                    <a href="">Book a Meeting</a>
                  </li>
                  <li>
                    <a href="">Download CV's</a>
                  </li>
                  <li>
                    <a href="">Make a Offer</a>
                  </li>
                  <li>
                    <a href="">Terms and Services</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2>Adress</h2>
                <p>Jinnah Hall UAF, Faisalabad</p>
                <h2>Phone No</h2>
                <p>+92 343 4635812</p>
                <h2>Email</h2>
                <p>ahmad.hassan.hnd@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className={Style.CopyrightArea}>
          <div className={Style.innercopyRightMessage}>
            <p>
              Copyright © 2012 - 2024 Group 10 (Ahmad Hassan)®. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
