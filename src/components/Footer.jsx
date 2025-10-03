export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        {/* Nama & Copyright */}
        <h3 className="text-2xl font-bold text-white mb-4">Sanjukin Ndube Pinem</h3>
        <p className="mb-6 text-gray-400">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="mailto:sanju329121@gmail.com"
            target="_blank"
            className="hover:text-white transition"
          >
            📧 Email
          </a>
          <a
            href="https://github.com/S4njuuu3291"
            target="_blank"
            className="hover:text-white transition"
          >
            💻 GitHub
          </a>
          <a  
            href="https://linkedin.com/in/sanjukin-pinem-55bb45330"
            target="_blank"
            className="hover:text-white transition"
          >
            🔗 LinkedIn
          </a>
        </div>

        {/* Mini CTA */}
        <p className="text-sm text-gray-500">
          Open for Internship opportunities in Data Science, AI, and Analytics.
        </p>
      </div>
    </footer>
  );
}