"use client";
import React from "react";
import Style from "./carouselsingle.module.css";

function CarouselSingle() {
  return (
    <div className={Style.container}>
      <div className={Style.card}>
        <img src="/Images/Project01.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project02.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project03.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project04.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project01.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project01.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project01.jpg" alt="" />
      </div>
      <div className={Style.card}>
        <img src="/Images/Project01.jpg" alt="" />
      </div>
    </div>
  );
}

export default CarouselSingle;
