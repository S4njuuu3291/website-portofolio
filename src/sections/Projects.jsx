import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../data/projects";

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "ML", "NLP", "Dashboard"];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          My Projects
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-gray-800 text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((proj, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-50 rounded-lg shadow-md overflow-hidden hover:shadow-xl transform hover:-translate-y-2 transition duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                  {proj.title}
                </h3>
                <p className="text-gray-700 mb-4 text-sm">{proj.desc}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {proj.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="bg-gray-200 text-gray-700 text-xs font-semibold px-2.5 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex justify-between items-center mt-4">
                  <a
                    href={proj.github}
                    target="_blank"
                    className="text-gray-600 hover:text-gray-800 font-medium flex items-center"
                  >
                    GitHub
                  </a>
                  {proj.demo && (
                    <a
                      href={proj.demo}
                      target="_blank"
                      className="text-gray-800 hover:text-gray-700 font-medium flex items-center"
                    >
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}