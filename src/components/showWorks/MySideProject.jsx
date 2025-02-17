import projectsData from "./MyProjects";

const MySideProject = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">My Side Projects</h1>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {projectsData.map((project, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
          >
            {/* Project Image */}
            <img
              src={project.projectImage}
              alt="project"
              className="w-full h-40 object-cover"
            />

            {/* Project Details */}
            <div className="p-4">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-lg font-bold text-white">{project.projectName}</h2>
                <p className="text-sm text-orange-500 font-semibold">{project.projectDuration}</p>
              </div>

              {/* Project Description */}
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>

              {/* Buttons */}
              <div className="flex justify-between items-center">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  Live
                </a>
                <a
                  href={project.gitHubRepositoryLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MySideProject;