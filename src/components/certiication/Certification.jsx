import certificationsData from "../CertificationData";

const Certifications = () => {
  return (
    <div className="min-h-screen bg-[#0F172A] px-4 sm:px-6 lg:px-8 py-10">
      {/* Title */}
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-5xl font-bold text-white">My Certifications</h1>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {certificationsData.map((certification, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 border border-white/10"
          >
            {/* Certification Image (Badge or Logo) */}
            <img
              src={certification.badgeImage}
              alt="certification badge"
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              {/* Certification Name and Issuing Organization */}
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">
                  {certification.certificationName}
                </h2>
                <p className="text-sm text-orange-500 font-semibold">
                  {certification.issuingOrganization}
                </p>
              </div>

              {/* Certification Date */}
              <p className="text-sm text-gray-300 mb-4">
                Issued: {certification.issueDate}
              </p>

              {/* Certification Description (Optional) */}
              {certification.description && (
                <p className="text-sm text-gray-300 mb-6">
                  {certification.description}
                </p>
              )}

              {/* Buttons */}
              <div className="flex justify-between items-center gap-4">
                <a
                  href={certification.certificateLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  View Certificate
                </a>
                <a
                  href={certification.credentialLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 text-center text-white bg-gray-700 hover:bg-gray-800 px-4 py-2 rounded-md text-sm font-semibold transition-colors duration-300"
                >
                  Verify Credential
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certifications;