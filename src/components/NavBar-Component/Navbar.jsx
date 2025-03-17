import React, { useState, useEffect } from 'react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/#Service' },
    { name: 'Use Cases', href: '/#Cases' },
    { name: 'Pricing', href: '/price' },
    { name: 'Blog', href: '/blog' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed w-full top-0 left-0 z-50 bg-white backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-neural' : ''} border-b border-gray-200/60`}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo Section with Border Accent */}
            <div className="flex items-center gap-3 relative group">
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              <div className="h-10 w-10 bg-[url(./assets/logo.png)] bg-center bg-cover rounded-full border-2 border-gray-900" />
              <a 
                href="/#Home" 
                className="text-3xl font-bold font-serif text-gray-900 hover:text-gray-700 transition-colors relative"
              >
                Codivora
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 opacity-70" />
              </a>
            </div>

            {/* Desktop Menu with Border Effects */}
            <div className="hidden md:flex items-center space-x-8">
              <ul className="flex space-x-8 text-lg font-medium">
                {menuItems.map((item) => (
                  <li key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-gray-600 hover:text-gray-900 transition-colors duration-300 px-2 py-1"
                    >
                      {item.name}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                  </li>
                ))}
              </ul>
              <button className="relative overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                <span className="relative">Chat Us Today</span>
              </button>
            </div>

            {/* Mobile Menu Button with Gradient Border */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100/50 transition-colors relative group"
            >
              <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                <span className="hamburger-top bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="hamburger-middle bg-gradient-to-r from-purple-500 to-blue-500" />
                <span className="hamburger-bottom bg-gradient-to-r from-purple-500 to-blue-500" />
              </div>
              <div className="absolute inset-0 border-2 border-gray-900/10 rounded-lg group-hover:border-gray-900/30 transition-all" />
            </button>
          </div>
        </div>

        {/* Mobile Menu with Futuristic Border */}
        <div
          className={`md:hidden fixed top-16 inset-x-0 bg-white/95 backdrop-blur-md border-t-2 border-gray-200/60 transform origin-top transition-all duration-300 ${
            isMenuOpen ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
          } shadow-neural`}
        >
          <div className="container mx-auto px-4">
            <ul className="flex flex-col items-center py-4 space-y-6 border-x-2 border-gray-200/60">
              {menuItems.map((item) => (
                <li key={item.name} className="relative group w-full text-center">
                  <a
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-lg font-medium transition-colors px-4 py-2 inline-block relative"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                    <span className="absolute left-1/2 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0" />
                  </a>
                </li>
              ))}
              <button className="relative overflow-hidden border-2 border-gray-900 px-8 py-2 rounded-xl text-lg font-medium hover:text-white transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-purple-500 before:to-blue-500 before:opacity-0 before:transition-opacity before:duration-300 hover:before:opacity-100">
                <span className="relative">Chat Us Today</span>
              </button>
            </ul>
          </div>
        </div>
      </nav>

      {/* Custom Animation Styles */}
      <style >{`
        .hamburger {
          position: relative;
          width: 30px;
          height: 24px;
          transition: all 0.3s;
        }

        .hamburger span {
          position: absolute;
          width: 100%;
          height: 2.5px;
          border-radius: 2px;
          transition: all 0.3s;
        }

        .hamburger-top {
          top: 0;
          transform: translateY(0);
        }

        .hamburger-middle {
          top: 50%;
          transform: translateY(-50%);
        }

        .hamburger-bottom {
          bottom: 0;
          transform: translateY(0);
        }

        .open .hamburger-top {
          transform: translateY(10px) rotate(45deg);
        }

        .open .hamburger-middle {
          opacity: 0;
        }

        .open .hamburger-bottom {
          transform: translateY(-10px) rotate(-45deg);
        }

        .shadow-neural {
          box-shadow: 0 4px 24px -2px rgba(106, 90, 205, 0.1);
        }
      `}</style>
    </>
  );
}

export default Navbar;