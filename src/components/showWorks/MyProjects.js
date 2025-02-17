import WorkNextFirstImage from "../../assets/project/WorkNextFirstImage.png"
import WorkNextSecondImage from "../../assets/project/WorkNextSecondImage.png"
import MedAIpicture from "../../assets/project/MedAiThirdImge.png"
import MedAiSecondImage from "../../assets/project/MedAiSecondImage.png"


const projectsData = [
  {
    id:0,
    projectName: "WorkNext - ",
    gitHubRepositoryLink: "https://github.com/mfonmfon/worknext.git",
    projectDuration:"January 2024",
    projectImage: WorkNextFirstImage, WorkNextSecondImage,
    liveLink: "https://worknext.vercel.app/",
    description: "WorkNext is a job searching app that helps users find and apply for jobs more efficiently. It's built using React.js and Tailwind CSS. for the frontend and spring Boot for the backend.",
    technologies: ["Tailwind CSS ", " React ", " JavaScript ", " Java","SpringBoot ", " MySQL ", " GitHub "],
  },
  {
    id:0,
    projectName: "Medreca - ",
    gitHubRepositoryLink: "https://github.com/mfonmfon/mediipalAi.git",
    projectDuration:"January 27 2025",
    projectImage: MedAIpicture,
    liveLink: "https://medreca.netlify.app/",
    description: "An AI powered system that can store medical big data and used AI to predict future health issues.",
    technologies: [" Tailwind CSS  ", "  React ", "   Java ","  SpringBoot ", "  MySQL "],
  },
  {
    id:0,
    projectName: "Solcon - ",
    gitHubRepositoryLink: "https://github.com/mfonmfon/solcoon.git",
    projectDuration:"December 27 2025",
    projectImage:  MedAiSecondImage ,
    liveLink: "https://solcon.vercel.app/",
    description: "A marketplace that connect solar technicians with customers who use solar system.",
    technologies: ["Tailwind CSS", "React", "JavaScript", "Java","SpringBoot", "MySQL", "GitHub"],
  },

]
export default projectsData;