import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  const isScrolled = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { title: 'About', href: '#about' },
    { title: 'Experience', href: '#experience' },
    { title: 'Projects', href: '#projects' },
    { title: 'Skills', href: '#skills' },
    { title: 'Contact', href: '#contact' },
    { title: 'Resume', href: '/Shrivaths_Resume_June2025.pdf', download: true },
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
          <a href="#home" className="text-xl font-semibold">Shrivaths Shyam</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => 
              link.download ? (
                // Styled button for the download link
                <a 
                  key={link.title} 
                  href={link.href} 
                  download 
                  className="bg-blue-500 text-white px-3 py-1.5 rounded-md text-sm font-medium hover:bg-blue-600 transition-colors"
                >
                  {link.title}
                </a>
              ) : (
                // Regular text link
                <a key={link.title} href={link.href} className="hover:text-blue-500 font-normal">{link.title}</a>
              )
            )}
            <ThemeToggle />
          </div>
          
          {/* Mobile Menu Button... */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4" aria-label="Open menu">
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-30 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        <div className="flex justify-end p-6">
          <button onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
            <i className="fa-solid fa-times fa-2xl"></i>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center h-full -mt-16 space-y-8">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-3xl font-semibold hover:text-blue-500"
              onClick={() => setIsMenuOpen(false)}
              download={link.download} // Add download attribute here too
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