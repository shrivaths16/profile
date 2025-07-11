import { useState } from 'react';
import { useScroll } from '../hooks/useScroll';
import ThemeToggle from './ThemeToggle'; // 1. Import the component

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
          <a href="#home" className="text-xl font-semibold">Shrivaths Shyam</a>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="hover:text-blue-500 font-normal">{link.title}</a>
            ))}
            <ThemeToggle /> {/* 2. Add toggle to desktop menu */}
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle /> {/* 3. Add toggle to mobile menu */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="ml-4" aria-label="Open menu">
              <i className="fa-solid fa-bars fa-xl"></i>
            </button>
          </div>
        </nav>
      </header>
      
      {/* Mobile Menu Overlay... (no changes needed here) */}
      <div 
        className={`
          fixed inset-0 z-10 bg-white dark:bg-gray-900 transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
        `}
      >
        {/* ... */}
      </div>
    </>
  );
};

export default Header;