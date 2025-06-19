import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/logo-example.png';
import { Link } from 'react-router-dom';

type HeaderProps = {
  layout?: 'centered' | 'end';
};

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact', href: '/contact' },
];

const Header = ({ layout = 'centered' }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-center z-50 py-5 px-6 md:px-14 lg:px-12">
      <div className="max-w-[95%] md:max-w-[90%] lg:max-w-[90%] flex items-center justify-between w-full">

        {/* Logo */}
        <div>
          <img src={logo} alt="Logo" className="h-8 md:h-10 lg:h-12" />
        </div>

        {/* 🔒 Menú para desktop */}
        <div className="hidden lg:flex items-center gap-6">
          {layout === 'centered' ? (
            <>
              <nav className="flex space-x-8 text-white font-medium text-sm">
                {navItems.map(({ label, href }) => (
                  <Link key={href} to={href} className="hover:text-orange-300 transition">
                    {label}
                  </Link>
                ))}
              </nav>
              <button className="border text-base border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
              Call Us
              </button>
            </>
          ) : (
            <>
              <nav className="flex space-x-6 text-white font-medium text-sm">
                {navItems.map(({ label, href }) => (
                  <Link key={href} to={href} className="hover:text-orange-300 transition">
                    {label}
                  </Link>
                ))}
              </nav>
              <button className="border text-base border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
              Call Us
              </button>
            </>
          )}
        </div>

        {/* 🍔 Botón hamburguesa para móvil/tablet */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(true)} className="text-white text-2xl">
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        {/* Menú lateral animado */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3 }}
              className="fixed top-0 right-0 w-64 h-screen bg-[#2d384b] text-white z-[999] p-6 flex flex-col gap-8"
            >
              {/* Botón cerrar */}
              <div className="flex justify-end">
                <button onClick={() => setIsOpen(false)} className="text-white text-2xl">
                  <FontAwesomeIcon icon={faTimes} />
                </button>
              </div>

              {/* Navegación */}
              <nav className="flex flex-col gap-4 text-lg font-medium mt-4">
                {navItems.map(({ label, href }) => (
                  <Link key={href} to={href} className="hover:text-orange-300 transition">
                    {label}
                  </Link>
                ))}
              </nav>

              {/* Botón Contact también en el menú */}
              <button className="mt-auto border text-base border-white text-white px-6 py-2 rounded-full hover:bg-white hover:text-black transition duration-300">
                Call Us
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
