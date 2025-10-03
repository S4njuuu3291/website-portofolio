import { motion } from "framer-motion";
import { experiences } from "../data/experience";

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-indigo-600">
          Experience
        </h2>

        <div className="relative border-l-4 border-indigo-400 pl-8">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
            >
              {/* Dot */}
              <span className="absolute -left-4 top-2 w-6 h-6 bg-indigo-500 rounded-full border-4 border-white shadow-md"></span>

              {/* Content */}
              <h3 className="text-xl font-semibold text-gray-800">{exp.title}</h3>
              <p className="text-sm text-gray-500">
                {exp.place} • {exp.year}
              </p>
              <p className="text-gray-600 mt-2">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}