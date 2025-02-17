import { motion } from "framer-motion";  
import {FaClipboardList } from "react-icons/fa"; 

const ExperienceComponent = () => {   
  const cardVariants = {  
    offscreen: {  
      y: 50,  
      opacity: 10,  
    },  
    onscreen: {  
      y: 0,  
      opacity: 1,  
      transition: {  
        type: "spring",  
        bounce: 0.4,  
        duration: 0.8,  
      },  
    },  
  };  


  const experiences = [  
    {  
      company: "Semicolon Africa",  
      role: "Software Engineer Trainee",  
      duration: "January 2024 - February 2025",  
      responsibilities: [  
        "Gained comprehensive knowledge in both backend and frontend development.",  
        "Built RESTful APIs using Java Spring Boot.",  
        "Developed frontend designs with React, HTML5, CSS3, and Tailwind.",  
        "Implemented CI/CD practices using Render, Heroku, and GitHub Actions.",  
        "Worked with PostgreSQL, MySQL, and MongoDB for data management.",  
        "Wrote unit and integration tests using JUnit.",  
        "Documented APIs using Postman.",  
      ],  
    },  
    // {  
    //   company: "Tech Innovators Inc.",  
    //   role: "Frontend Developer Intern",  
    //   duration: "June 2023 - December 2023",  
    //   responsibilities: [  
    //     "Developed responsive user interfaces using React and Tailwind CSS.",  
    //     "Collaborated with the design team to implement UI/UX designs.",  
    //     "Optimized web applications for performance and accessibility.",  
    //     "Integrated RESTful APIs for dynamic data fetching.",  
    //   ],  
    // },  
    {  
      company: "SkyStudio",  
      role: "Frontend Developer Intern",  
      duration: "Novermber 2024 - December 2023",  
      responsibilities: [  
        "Built scalable backend systems using Node.js and Express.", 
        "Designed and implemented database schemas using MongoDB.",  
        "Deployed applications on AWS and managed cloud infrastructure.",  
        "Wrote automated tests to ensure code quality.",  
      ],  
    },  
  ];  

  return (  
    <div className="w-full min-h-screen bg-gray-900 py-20">  
      <h1 className="text-5xl font-bold text-center text-white mb-20">  
        Experience  
      </h1>  
 
      <div className="w-full flex flex-col items-center space-y-15">  
        {experiences.map((exp, index) => (  
          <motion.div  
            key={index}  
            className="w-full md:w-4/5 bg-black-600 p-8 rounded-lg shadow-lg border border-yellow-500 transition-transform transform hover:scale-105"  
            initial="offscreen"  
            whileInView="onscreen"  
            viewport={{ once: true, amount: 0.5 }}  
            variants={cardVariants}  
          >  
           
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">  
              <div>  
                <h2 className="text-3xl font-bold text-white mb-1">{exp.company}</h2>  
                <p className="text-lg text-gray-300">{exp.role}</p>  
              </div>  
              <p className="text-lg text-gray-400 mt-2 md:mt-0">{exp.duration}</p>  
            </div>  

            <ul className="list-disc list-inside space-y-2">  
              {exp.responsibilities.map((responsibility, i) => (  
                <li key={i} className="flex items-center text-gray-300">  
                  <FaClipboardList className="mr-2 text-yellow-300" />  
                  {responsibility}  
                </li>  
              ))}  
            </ul>  
          </motion.div>  
        ))}  
      </div>  
    </div>  
  );  
};  

export default ExperienceComponent;