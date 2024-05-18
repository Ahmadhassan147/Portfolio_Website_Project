"use client";
import React from "react";
import Style from "./projectsingle.module.css";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";
import CarouselSingle from "./CarouselSingle";

function ProjectSingle() {
  const val = {
    projectTitle: "Automated Data Manipulation Pipeline using Python Scripting",
    projectDescription:
      "Streamline data workflows with Python scripts, automating tasks from extraction to transformation, ensuring data integrity and efficiency.",
    image: "/Images/ProjectImage.png",
    tags: ["Developement", "Python"],
  };
  return (
    <div className={Style.container}>
      <div className={Style.cardWrapper}>
        <h2>{val.projectTitle}</h2>
        <div className={Style.cardContentArea}>
          <div className={Style.profileImage}>
            <img className={Style.projectCover} src={val.image} alt="" />
          </div>
          <div className={Style.mainCardBox}>
            <div className={Style.skillsUsed}>
              <ul className={Style.mainSkillsText}>
                <li>{val.tags}</li>
                <li>{val.tags}</li>
              </ul>
            </div>
            <h3>Project Developed by: Ahmad Hassan </h3>
            <p className={Style.personDescription}>{val.projectDescription}</p>
            <div className={Style.btnProfileCard}>
              <div className={Style.SocialBox}>
                <FaInstagram className={Style.Socialicons} />
                <FaLinkedin className={Style.Socialicons} />
                <MdAttachEmail className={Style.Socialicons} />
              </div>
            </div>
            <div className={Style.rating}>
              <h4>Rate this Project: </h4>
              <input type="radio" id="star5" name="rating" value="5" />
              <label for="star5"></label>
              <input type="radio" id="star4" name="rating" value="4" />
              <label for="star4"></label>
              <input type="radio" id="star3" name="rating" value="3" />
              <label for="star3"></label>
              <input type="radio" id="star2" name="rating" value="2" />
              <label for="star2"></label>
              <input type="radio" id="star1" name="rating" value="1" />
              <label for="star1"></label>
            </div>
          </div>
        </div>
        <div className={Style.projectBodyText}>
          <h3>Project Details</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut culpa
            minima eaque obcaecati praesentium harum blanditiis sequi ullam
            delectus placeat nostrum suscipit laboriosam nemo enim ratione
            maiores, cum magni nulla! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Voluptatum vero ut porro, sapiente labore dolores,
            minus, eius fugiat delectus eaque necessitatibus sequi neque ipsa
            possimus voluptas expedita. Veritatis, inventore labore! Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Nemo consequuntur ad
            recusandae culpa cupiditate laborum similique perferendis cumque
            ipsa ducimus! Mollitia illo possimus molestias maiores alias
            adipisci nesciunt odio voluptatibus! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Doloremque dolor architecto sapiente,
            doloribus fugiat beatae natus velit accusantium, atque vero rerum
            dicta mollitia aut? Doloribus aspernatur eveniet cum labore quo.l
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Id et
            fugiat itaque soluta minima ratione natus fugit molestias nobis
            officiis animi ullam enim similique, ea reprehenderit magnam tempora
            in sint! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Temporibus similique pariatur laboriosam quaerat molestiae
            distinctio nobis, cupiditate eum in, earum libero ut eaque
            repudiandae, explicabo maiores eius exercitationem beatae alias!
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus aperiam officia mollitia cumque repudiandae ea
            nostrum doloremque temporibus accusamus vero, placeat
            exercitationem, sit sed, dolorem dolor delectus est earum rerum?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
            iusto beatae eos error, quas perspiciatis amet. Beatae quis
            perspiciatis itaque dignissimos minima nemo at, harum similique rem
            dolores, ullam assumenda. Lorem, ipsum dolor sit amet consectetur
            adipisicing elit. Atque, non voluptate excepturi modi consequatur
            reprehenderit ipsum. Quibusdam minus nam ipsam exercitationem,
            optio, inventore, sit modi eius mollitia quisquam eos temporibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab modi
            exercitationem aliquid sunt dicta commodi at beatae earum, optio
            debitis excepturi possimus animi fugit. <br /> Odio quaerat dignissimos et
            possimus quidem? Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Repudiandae cumque cupiditate minima quod inventore in
            excepturi praesentium iure perspiciatis! Molestiae eos vel dolorem
            fugit unde omnis tenetur facere fugiat vero! Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Consequuntur animi nostrum
            delectus corporis beatae praesentium est voluptatibus magni
            doloribus numquam quae molestiae quia earum perspiciatis deserunt
            vel saepe, modi reprehenderit. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Ad corrupti nulla nostrum reiciendis
            ab iste ipsum suscipit exercitationem placeat maxime vero itaque
            nesciunt quo, velit at quisquam minus non veniam. Lorem ipsum dolor,
            sit amet consectetur adipisicing elit.  <br />Sapiente natus id
            dignissimos, eligendi quibusdam voluptas voluptates molestiae fugiat
            quidem nesciunt modi temporibus repellendus praesentium nisi quia
            facere culpa nulla quis! Lorem ipsum, dolor sit amet consectetur
            adipisicing elit. Quaerat voluptas explicabo praesentium, nobis quas
            cum voluptatem voluptate aspernatur excepturi, eum obcaecati
            laboriosam, recusandae sunt esse adipisci! Nam consectetur eligendi
            laboriosam. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Voluptates recusandae ipsam sunt excepturi laborum et animi
            hic minus inventore maxime consectetur, possimus deleniti modi atque
            debitis voluptate! Libero, ratione tempora!
          </p>
        </div>
        <CarouselSingle />
        <div className={Style.CommentArea}>
          <h2>Comment</h2>
          <textarea name="" id=""></textarea>
          <button>Comment</button>
        </div>
      </div>
    </div>
  );
}

export default ProjectSingle;
