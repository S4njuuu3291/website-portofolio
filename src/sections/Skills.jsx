import { useState } from "react";
import { motion } from "framer-motion";

const skills = {
  Programming: [
    { name: "Python", level: 90, icon: "https://simpleicons.org/icons/python.svg", desc: "Pandas, NumPy, Scikit-learn, TensorFlow" },
    { name: "SQL", level: 80, icon: "https://simpleicons.org/icons/postgresql.svg", desc: "PostgreSQL, Supabase, Query Optimization" },
    { name: "Git & GitHub", level: 75, icon: "https://simpleicons.org/icons/github.svg", desc: "Version Control, Collaboration" },
  ],
  "ML & AI": [
    { name: "NLP", level: 85, icon: "https://simpleicons.org/icons/apacheairflow.svg", desc: "BERT, IndoBERT, Transformers" },
    { name: "Computer Vision", level: 65, icon: "https://simpleicons.org/icons/opencv.svg", desc: "CNN, Image Classification" },
    { name: "Recommender Systems", level: 65, icon: "https://simpleicons.org/icons/streamlit.svg", desc: "Hybrid Models, Streamlit Deployment" },
  ],
  Visualization: [
    { name: "Power BI", level: 75, icon: "https://simpleicons.org/icons/powerbi.svg", desc: "DAX, Dashboarding" },
    { name: "Matplotlib & Seaborn", level: 80, icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg", desc: "Data Visualization" },
    { name: "Streamlit", level: 75, icon: "https://simpleicons.org/icons/streamlit.svg", desc: "Interactive Apps" },
  ],
  Tools: [
    { name: "FastAPI", level: 80, icon: "https://simpleicons.org/icons/fastapi.svg", desc: "REST API Development" },
    { name: "Docker", level: 65, icon: "https://simpleicons.org/icons/docker.svg", desc: "Containerization" },
    { name: "Selenium", level: 70, icon: "https://simpleicons.org/icons/selenium.svg", desc: "Web Scraping Automation" },
  ],
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");

  // ambil skill sesuai filter
  const filteredSkills =
    activeCategory === "All"
      ? Object.values(skills).flat()
      : skills[activeCategory] || [];

  const categories = ["All", ...Object.keys(skills)];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Skills
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Skills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSkills.map((skill, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <div className="flex flex-col items-center text-center">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  className="mb-4 w-16 h-16 object-contain"
                />
                <h4 className="text-lg font-semibold text-gray-800">{skill.name}</h4>
                <p className="text-gray-600 text-sm mt-2">{skill.desc}</p>

                {/* Progress bar */}
                <div className="w-full bg-gray-200 rounded-full h-3 mt-4">
                  <div
                    className="bg-gray-800 h-3 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-sm text-gray-500 mt-1">{skill.level}%</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
