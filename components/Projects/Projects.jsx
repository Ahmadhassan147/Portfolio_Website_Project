"use client";
import React from "react";
import Style from "./projects.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import Link from "next/link";
function Projects({ val, index }) {
  console.log({ index });
  return (
    <div
      className={Style.container}
      style={{ marginTop: index === 0 ? "100px" : "0px" }}
    >
      <div className={Style.cardWrapper}>
        <div className={Style.cardContentArea}>
          <div className={Style.profileImage}>
            <img className={Style.projectCover} src={val.image} alt="" />
          </div>
          <div className={Style.mainCardBox}>
            <h2>{val.projectTitle}</h2>
            <p className={Style.personDescription}>{val.projectDescription}</p>
            <div className={Style.skillsUsed}>
              <p className={Style.mainSkillsText}>Project Tags :</p>
              <ul>
                <li>{val.tags[0]}</li>
                <li>{val.tags[1]}</li>
              </ul>
            </div>
            <div className={Style.btnProfileCard}>
            <Link href={"/project-single"}>  <button>Read More</button> </Link>
              <div className={Style.SocialBox}>
                <FaInstagram className={Style.Socialicons} />
                <FaLinkedin className={Style.Socialicons} />
                <MdAttachEmail className={Style.Socialicons} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
