import { useState } from "react";
import { motion } from "framer-motion";
import { experiences, certificates } from "../data/career";

export default function CareerJourney() {
  const [showCV, setShowCV] = useState(false);

  const cvs = [
    { label: "AI/ML Engineer", file: "/cv/resume-ai.pdf" },
    { label: "Data Analyst", file: "/cv/resume-da.pdf" },
    { label: "Business Intelligence", file: "/cv/resume-bi.pdf" },
  ];

  return (
    <section id="career" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Career Journey
        </h2>

        <div className="mb-20">
          <h3 className="text-2xl font-semibold text-center text-gray-800 mb-12">
            Experience
          </h3>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gray-400"></div>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8">
              {experiences.map((exp, idx) => (
                <div key={idx} className="relative flex-1">
                  {/* Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 w-6 h-6 bg-gray-700 rounded-full border-4 border-white shadow-md z-10"></div>

                  {/* Card */}
                  <div className="bg-white border border-gray-200 rounded-lg shadow-md p-6 mt-6 text-center hover:shadow-lg transition">
                    <h4 className="text-lg font-semibold text-gray-800">{exp.title}</h4>
                    <p className="text-sm text-gray-500 mb-2">
                      {exp.place} • {exp.year}
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CV Download */}
        <div className="text-center mb-20">
          <button
            onClick={() => setShowCV(!showCV)}
            className="bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition"
          >
            Download My Resume
          </button>

          {showCV && (
            <div className="mt-6 flex flex-col gap-3 items-center">
              {cvs.map((cv, idx) => (
                <a
                  key={idx}
                  href={cv.file}
                  download
                  className="text-gray-800 hover:text-gray-700 font-medium"
                >
                  {cv.label}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Certificates */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8">Certificates</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                className="bg-gray-50 p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <img src={cert.logo} alt={cert.issuer} className="mb-4 w-20 h-20 object-contain" />
                <h4 className="text-lg font-semibold text-gray-800">{cert.title}</h4>
                <p className="text-sm text-gray-500 mt-2">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}