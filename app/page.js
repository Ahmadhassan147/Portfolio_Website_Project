import Footer from "@/components/Global/Footer";
import Navbar from "@/components/Global/Navbar";
import AboutGroup from "@/components/LandingPage/AboutGroup";
import Hero from "@/components/LandingPage/Hero";
import ProfilePageLeftImage from "@/components/LandingPage/ProfilePageLeftImage";
import TeamHeading from "@/components/LandingPage/TeamHeading";
import Projects from "@/components/Projects/Projects";
import Head from "next/head";
export const metadata = {
  title: "Home",
  description: "A Team of Developers",
};

export default function Home() {
  
  const data = [
    {
      name: "Ahmad Hassan",
      description:
        "Proficient in both front-end and back-end technologies, adept at creating seamless web applications from concept to deployment. Experienced in handling databases and implementing server-side logic to ensure optimal performance and functionality.",
      image: "/Images/AhmadImageCard.svg",
      skills: ["Full Stack Developer", "Python Programmer"],
      isReverse: true,
      id: "ahmad",
    },
    {
      name: "Atteeq Ur Rehman",
      description:
        "Skilled in Python development, with expertise in building applications, scripts, and algorithms to solve diverse challenges. Proficient in leveraging Python's extensive libraries and frameworks to streamline development processes and deliver efficient solutions.",
      image: "/Images/AtteeqProfileCard.svg",
      skills: [
        "Python programming language",
        "Application development and scripting",
      ],
      isReverse: false,
      id: "atteeq",
    },
    {
      name: "Eesha Ahmed",
      description:
        "Specializes in crafting intuitive user experiences through thoughtful design and prototyping, focusing on both UX and UI principles. Proficient in conducting user research, wireframing, and creating visually appealing interfaces that enhance usability and engagement.",
      image: "/Images/CardImageFemale.svg",
      skills: [
        "User experience (UX) design principles",
        "User interface (UI) design and prototyping",
      ],
      isReverse: true,
      id: "eesha",
    },
    {
      name: "Fiza Siddiqa",
      description:
        "Excels in analyzing large datasets, applying statistical methods, and developing machine learning models to extract valuable insights. Proficient in data manipulation and visualization techniques to communicate findings effectively and drive data-driven decision-making",
      image: "/Images/CardImageFemale.svg",
      skills: [
        "Statistical analysis and machine learning",
        "Data manipulation and visualization",
      ],
      isReverse: false,
      id: "faiza",
    },
    {
      name: "Fathima Farha",
      description:
        "Proficient in executing digital marketing campaigns across various channels, with a focus on driving engagement and maximizing ROI through data-driven strategies. Skilled in analyzing marketing data to optimize campaigns, improve targeting, and achieve business objectives.",
      image: "/Images/CardImageFemale.svg",
      skills: [
        "Digital marketing strategies (SEO, SEM, email, social media)",
        "Marketing data analysis and campaign optimization",
      ],
      isReverse: true,
      id: "farha",
    },
  ];
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutGroup />
      <TeamHeading />
      {data.map((val) => (
        <ProfilePageLeftImage val={val} />
      ))}
      <Footer />
    </div>
  );
}
