import { useState } from 'react';
import ThemeToggle from './ThemeToggle';
import { useScroll } from '../hooks/useScroll';
// import { FaBars, FaXmark } from 'react-icons/fa'; // Hamburger and close icons

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header
        className={`
          fixed w-full z-20 transition-all duration-300
          ${isScrolled ? 'py-2 bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-md' : 'py-4'}
        `}
      >
        <nav className="container mx-auto px-6 flex justify-between items-center">
          <a href="#home" className="text-xl font-bold">Shrivaths Shyam</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-500">{link.title}</a>
            ))}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4" aria-label="Open menu">
              {/* <FaBars size={24} /> */}
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-10 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            {/* <FaXmark size={28} /> */}
            <i className="fa-solid fa-times fa-2xl"></i>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map(link => (
            <a 
              key={link.href} 
              href={link.href} 
              className="text-3xl font-bold hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)} // Close menu on click
            >
              {link.title}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Header;