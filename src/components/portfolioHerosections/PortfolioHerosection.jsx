// import React from "react";
import { motion } from "framer-motion";
import MfonImage from "../../images/heroImages/IMG-20241114-WA0022.jpg";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa"; // Import icons

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col items-center justify-center text-white px-6 md:px-16 relative overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          className="w-[500px] h-[500px] bg-gradient-to-r from-yellow-500 to-yellow-700 rounded-full absolute opacity-30"
        />
      </div>
      <div className="relative z-10 text-center">
        <h1 className="text-4xl md:text-7xl font-bold">{`A Full-Stack Software Engineer`}</h1>
        <p className="text-lg md:text-2xl mt-4 w-[100%] md:w-[70%] mx-auto">{`Hey there! I'm Mfon Mfon. A Full-Stack Software Engineer Experienced Frontend and Backend Developer with over 2 years of expertise in Java, Springboot, Javascript, React and`}</p>
        <div className="mt-7 flex justify-center gap-6">
          <button className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white">Resume</button>
          <button className="px-6 py-3 border border-yellow-500 text-yellow-500 rounded-md hover:bg-yellow-500 hover:text-white">Hire Me</button>
        </div>
      </div>
      <div className="relative mt-10">
        <img src={MfonImage} alt="Mfon Mfon" className="w-[300px] h-[300px] rounded-full border-4 border-yellow-500 object-cover" />
      </div>

      <div className="absolute bottom-10 flex flex-wrap gap-4 justify-center">
        {["ReactJS", "NextJS", "Tailwind CSS", "JavaScript", "GraphQL", "Figma"].map((skill, index) => (
          <motion.div
            key={index}
            className="px-4 py-2 bg-gray-800 rounded-md text-sm shadow-lg"
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.3 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
      <div className="fixed left-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
        <motion.a
          href="https://github.com/mfonmfon"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          <FaGithub size={30} />

        </motion.a> 
        <a
          href="https://www.instagram.com/mrflowit/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaInstagram size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/mfon-mfon-571342263/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=100069500231284"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-500 transition-colors duration-300"
        >
          <FaFacebook size={30} />
        </a>
      </div>
    </div>
  );
};

export default HeroSection;