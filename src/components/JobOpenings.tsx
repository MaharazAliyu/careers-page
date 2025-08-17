import React from 'react';

interface JobPosition {
  title: string;
  department: string;
  location: string;
  type: string;
  requirements: string[];
}

const currentOpenings: JobPosition[] = [
  {
    title: "Administrative Officer",
    department: "Administration",
    location: "Dubai, UAE",
    type: "Full-time",
    requirements: [
      "Bachelor's degree in Business Administration or related field",
      "Minimum 3 years of administrative experience",
      "Excellent communication skills in English",
      "Knowledge of Arabic is a plus",
    ],
  },
  {
    title: "Visa Processing Officer",
    department: "Consular Services",
    location: "Dubai, UAE",
    type: "Full-time",
    requirements: [
      "Bachelor's degree in relevant field",
      "2+ years experience in visa processing",
      "Strong attention to detail",
      "Proficiency in MS Office Suite",
    ],
  },
  {
    title: "IT Support Specialist",
    department: "Information Technology",
    location: "Dubai, UAE",
    type: "Full-time",
    requirements: [
      "Bachelor's degree in IT or Computer Science",
      "3+ years of IT support experience",
      "Knowledge of network administration",
      "Experience with help desk software",
    ],
  },
];

interface JobOpeningsProps {
  onSelectJob: (job: string) => void;
  selectedJob: string;
}

export default function JobOpenings({ onSelectJob, selectedJob }: JobOpeningsProps) {
  return (
    <section className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-green-900 mb-4">Current Openings</h2>
          <p className="text-lg text-gray-600">Explore our available positions and join our team</p>
        </div>

        <div className="grid gap-6">
          {currentOpenings.map((position, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl border border-green-100"
            >
              <div className="p-6 grid md:grid-cols-[2fr,3fr,auto] gap-6 items-center">
                <div>
                  <h3 className="text-xl font-semibold text-green-900 mb-2">{position.title}</h3>
                  <p className="text-green-700 mb-3">{position.department}</p>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-600">
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {position.type}
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-medium text-gray-900">Key Requirements:</h4>
                  <ul className="list-disc list-inside text-gray-600 grid gap-1">
                    {position.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center">
                  <button
                    onClick={() => {
                      onSelectJob(position.title);
                      document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className={`whitespace-nowrap py-2 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-2 ${
                      selectedJob === position.title
                        ? 'bg-green-700 text-white'
                        : 'bg-green-600 text-white hover:bg-green-700'
                    }`}
                  >
                    <span>{selectedJob === position.title ? 'Selected' : 'Apply Now'}</span>
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
