export default function Hero() {
  return (
    <section
      id="home"
      className="relative bg-gradient-to-r from-gray-800 to-gray-900 text-white py-24 px-6 md:py-32 flex items-center min-h-screen"
    >
      <div className="container mx-auto px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
        
        {/* Text Area */}
        <div className="text-center md:text-left mb-12 md:mb-0 md:w-1/2">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-up">
            Hello, I'm <span className="text-yellow-300">Sanju</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up delay-200">
            Final-year Informatics Student • Aspiring Data Scientist & AI Engineer
          </p>

          {/* Counters */}
          <div className="flex gap-8 justify-center md:justify-start mb-8">
            <div>
              <h3 className="text-3xl font-bold">6+</h3>
              <p className="text-sm opacity-80">Projects</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">2</h3>
              <p className="text-sm opacity-80">Internships</p>
            </div>
            <div>
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm opacity-80">Certificates</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start animate-fade-in-up delay-400">
            <a
              href="/resume.pdf"
              download
              className="btn-primary bg-white text-gray-800 rounded-full text-lg shadow-lg px-6 py-3 font-semibold hover:bg-gray-100 transition"
            >
              Download Resume
            </a>
            <a
              href="#projects"
              className="btn-primary bg-gray-800 text-white rounded-full text-lg shadow-lg px-6 py-3 font-semibold hover:bg-gray-700 transition"
            >
              See My Projects
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end animate-fade-in-right">
          <img
            src="src\assets\profile.png"
            alt="Sanju Profile Picture"
            className="rounded-full shadow-2xl border-4 border-white object-cover w-64 h-64 md:w-80 md:h-80"
          />
        </div>
      </div>
    </section>
  );
}