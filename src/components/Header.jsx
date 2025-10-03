import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Career", href: "#career" },
  ];

  return (
    <header className="bg-white shadow-sm py-4 px-6 md:px-12 fixed w-full z-20">
      <nav className="container mx-auto flex justify-between items-center">
        {/* Branding */}
        <a
          href="#home"
          className="text-2xl font-bold text-gray-800 rounded-md p-2 hover:bg-gray-100 transition duration-300"
        >
          Sanjukin Pinem
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 hover:text-gray-800 font-medium transition duration-300 rounded-md p-2 hover:bg-gray-100"
            >
              {link.name}
            </a>
          ))}
          <a
            href="https://github.com/S4njuuu3291"
            target="_blank"
            className="text-gray-700 hover:text-gray-800 font-medium transition duration-300 rounded-md p-2 hover:bg-gray-100"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sanjukin-pinem-55bb45330"
            target="_blank"
            className="text-gray-700 hover:text-gray-800 font-medium transition duration-300 rounded-md p-2 hover:bg-gray-100"
          >
            LinkedIn
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 hover:text-gray-800 focus:outline-none"
          onClick={() => setIsOpen(true)}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-95 z-30 flex flex-col items-center justify-center space-y-6">
          <button
            className="absolute top-6 right-6 text-gray-700 hover:text-gray-800"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-2xl text-gray-700 hover:text-gray-800 font-medium transition duration-300"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}