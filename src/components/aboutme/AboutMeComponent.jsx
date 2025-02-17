
import { motion } from "framer-motion";
import AboutMfonImage from '../../images/heroImages/IMG-20241114-WA0022.jpg';

const AboutMeComponent = () => {
  return (
    <div className='w-full h-full bg-[#0F172A] py-16'>
      <div className='items-center justify-center flex flex-col'>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white md:text-5xl text-3xl font-bold mb-12"
        >
          About Mfon
        </motion.h2>
      </div>

      <div className='container mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center justify-around gap-12'>
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center items-center"
        >
          <img
            className="rounded-lg w-80 h-80 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-yellow-500"
            src={AboutMfonImage}
            alt="Profile Pic"
          />
        </motion.div>

        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl text-center md:text-left"
        >
          <h3 className="text-white text-3xl font-bold mb-6">Full-Stack Developer</h3>
          <p className="text-white text-lg leading-relaxed mb-6">
            I am a passionate software engineer with over 2 years of experience in the tech industry. I specialize in building scalable and maintainable applications using modern technologies like Java, Spring Boot, JavaScript, React, and TypeScript.
          </p>
          <p className="text-white text-lg leading-relaxed mb-6">
            My expertise spans both frontend and backend development, and I thrive in creating seamless user experiences while ensuring robust and efficient systems.
          </p>
          <button className="px-8 py-3 bg-yellow-500 border-1 border-yellow text-white font-semibold rounded-lg hover:bg-yellow-600 transition-colors duration-300">
            Download Resume
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMeComponent;