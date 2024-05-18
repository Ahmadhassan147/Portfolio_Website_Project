"use client";
import React from "react";
import Style from "./profilepageleftimage.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";

function ProfilePageLeftImage({ val }) {
  return (
    <div className={Style.container} id={val.id}>
      <div className={Style.cardWrapper}>
        <div
          className={Style.cardContentArea}
          style={{ flexDirection: val.isReverse ? "row-reverse" : "row" }}
        >
          <div className={Style.profileImage}>
            <img src={val.image} alt="" />
          </div>
          <div className={Style.mainCardBox}>
            <p className={Style.Greet}>Hi I am</p>
            <h2>{val.name}</h2>
            <p className={Style.personDescription}>{val.description}</p>
            <p className={Style.mainSkillsText}>Main Skills :</p>
            <ul>
              <li>{val.skills[0]}</li>
              <li>{val.skills[1]}</li>
            </ul>
            <div className={Style.btnProfileCard}>
              <button>Know More</button>
              <button>Hire Me</button>
            </div>
          </div>
        </div>
        <div className={Style.SocialBox}>
          <FaInstagram className={Style.Socialicons} />
          <FaLinkedin className={Style.Socialicons} />
          <MdAttachEmail className={Style.Socialicons} />
        </div>
      </div>
    </div>
  );
}

export default ProfilePageLeftImage;
