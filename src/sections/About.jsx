export default function About() {
  const timeline = [
    {
      year: "2025",
      title: "Internship – Chatbot Developer",
      place: "Pusat Inovasi Pengajaran & Pembelajaran (Unpad)",
      desc: "Developed IndoBERT-based chatbot integrated with FastAPI & Supabase.",
    },
    {
      year: "2025",
      title: "Virtual Intern – Data Scientist",
      place: "ID/X Partners x Rakamin",
      desc: "Built credit risk model (466k loans) with XGBoost, SMOTE, Optuna.",
    },
    {
      year: "2024",
      title: "Apprenticeship – Machine Learning Cohort",
      place: "Bangkit Academy (Google, Tokopedia, Gojek, Traveloka)",
      desc: "Completed projects in ML, NLP, and CV. Selected among top 7% of 55k+ applicants.",
    },
    {
      year: "2023",
      title: "Organization Experience",
      place: "Himatif Unpad – Staff Teknologi Informasi",
      desc: "Organized workshops, coding competitions, and internal tech support.",
    },
  ];

  return (
    <section id="about" className="py-10 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-800">
          About Me
        </h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Left: About Text */}
          <div className="md:w-1/2 text-lg text-gray-700 leading-relaxed">
            <p className="mb-4">
              Hi! I’m <span className="font-semibold">Sanjukin Ndube Pinem</span>, 
              a final-year Informatics student (GPA 3.73) with strong skills in 
              <span className="font-semibold"> Machine Learning, AI, and Data Science</span>. 
              I’ve worked on building and deploying ML models, handling NLP and predictive analytics, 
              and creating end-to-end solutions that don’t just work in code, but also deliver real insights.
            </p>

            <p className="mb-4">
              Beyond modeling, I’m comfortable with <span className="font-semibold">Excel and Power BI </span> 
              to turn raw data into dashboards and business stories. 
              I believe the real impact of data is not only in accuracy, 
              but in how clearly results can guide decision-making.
            </p>

            <p>
              I see myself not as someone who just “knows tools”, but as a problem-solver 
              who uses data to explain, predict, and create value. 
              That’s the mindset I bring into every project.
            </p>

            <div className="mt-6">
              <a
                href="mailto:sanju329121@gmail.com"
                className="inline-block bg-gray-800 text-white px-6 py-3 rounded-full font-semibold shadow-lg hover:bg-gray-700 transition"
              >
                Let’s Connect
              </a>
            </div>
          </div>


          {/* Right: Timeline */}
          <div className="md:w-1/2 relative">
            <div className="border-l-2 border-gray-600 pl-6">
              {timeline.map((item, idx) => (
                <div key={idx} className="mb-8 relative">
                  <div className="absolute -left-5 top-1 w-5 h-5 bg-gray-700 rounded-full border-2 border-white shadow"></div>
                  <h3 className="text-xl font-semibold text-gray-800 -left-5">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-500">
                    {item.place} • {item.year}
                  </p>
                  <p className="text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}