"use client";
import React from "react";
import Projects from "./Projects";
import Style from "./projectlist.module.css";
const data = [
  {
    projectTitle: "Automated Data Manipulation Pipeline using Python Scripting",
    projectDescription:
      "Streamline data workflows with Python scripts, automating tasks from extraction to transformation, ensuring data integrity and efficiency.",
    image: "/Images/ProjectImage.png",
    tags: ["Developement", "Python"],
  },
  {
    projectTitle: "Enhancing UX Design with Machine Learning Predictive Models",
    projectDescription:
      "Integrate predictive algorithms into UX design processes to personalize user experiences, leveraging machine learning insights for dynamic interface optimization.",
    image: "/Images/Project01.jpg",
    tags: ["Python", "scripting"],
  },
  {
    projectTitle: "Interactive UI Design for Marketing Analysis Dashboards",
    projectDescription:
      "Develop visually engaging UIs for marketing analysts, enabling intuitive data exploration and insightful visualization for effective decision-making.",
    image: "/Images/Project02.jpg",
    tags: ["UX design", "UI design"],
  },
  {
    projectTitle: "Machine Learning-driven Marketing Analysis Toolkit",
    projectDescription:
      "Harness the power of Python scripting to automate repetitive marketing tasks, optimizing campaigns, and maximizing ROI with streamlined workflows.",
    image: "/Images/Project03.jpg",
    tags: ["Machine learning", "Data manipulation"],
  },
  {
    projectTitle: "Python Scripting for Marketing Strategies Automation",
    projectDescription:
      "Empower marketers with advanced analytics tools powered by machine learning, facilitating in-depth insights, trend identification, and predictive modeling for strategic decision support.",
    image: "/Images/Project04.jpg",
    tags: ["Marketing strategies", "Marketing analysis"],
  },
];
const ProjectList = () => {
  return (
    <div>
      {data.map((val, index) => (
        <Projects key={index} val={val} index={index} />
      ))}
    </div>
  );
};

export default ProjectList;
