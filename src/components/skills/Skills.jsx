import skillsData from "./SkillsData";

const Skills = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">My Skills</h1>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {skillsData.map((skill, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10 p-6 flex flex-col items-center justify-center text-center"
          >
            {/* Skill Icon */}
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-12 h-12 mb-4 object-contain"
            />

            {/* Skill Name */}
            <h2 className="text-lg font-bold text-white">{skill.name}</h2>

            {/* Optional: Skill Level or Description */}
            {skill.level && (
              <p className="text-sm text-gray-300 mt-2">Level: {skill.level}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;