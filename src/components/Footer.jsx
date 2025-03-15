import React, { useEffect, useState } from 'react';
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Link, useLocation, useNavigate } from 'react-router-dom';

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showScrollButton, setShowScrollButton] = useState(false);

  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Show/hide scroll button
  const checkScrollTop = () => {
    if (window.scrollY > 300) {
      setShowScrollButton(true);
    } else {
      setShowScrollButton(false);
    }
  };

  // Footer reveal animation
  useEffect(() => {
    const handleScroll = () => {
      const footer = document.querySelector('.footer-animate');
      if (!footer) return;
      
      const footerPosition = footer.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.1;

      if (footerPosition < screenPosition) {
        footer.classList.add('footer-active');
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', checkScrollTop);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', checkScrollTop);
    };
  }, []);

  // Handle anchor links and navigation
  useEffect(() => {
    const handleHashScroll = (hash) => {
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          const navbarHeight = 100; // Match your navbar height
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    // If we're on home page with hash
    if (location.pathname === '/' && location.hash) {
      handleHashScroll(location.hash);
    }

    // Cleanup hash on unmount
    return () => {
      if (location.hash) {
        navigate(location.pathname, { replace: true });
      }
    };
  }, [location, navigate]);

  return (
    <footer className="bg-[white] text-white footer-animate relative">
      {/* Scroll to top button */}
      {showScrollButton && (
        <button 
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#96ce73] p-3  rounded-full shadow-lg hover:bg-[#7db356] transition-colors z-50"
          aria-label="Scroll to top"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6 text-white" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M5 15l7-7 7 7" 
            />
          </svg>
        </button>
      )}

      <div className="max-w-7xl mx-auto bg-[#1a1a24] rounded-t-4xl px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-[url(./assets/logo.jpg)] bg-cover bg-center rounded-full" />
            <h1 className="text-2xl font-bold font-serif">Codivora</h1>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {['About', 'Service', 'Cases', 'Price', 'Blog'].map((item) => {
              const isAnchor = item === 'Service' || item === 'Cases';
              const path = isAnchor ? `/#${item.toLowerCase()}` : `/${item.toLowerCase()}`;
              
              return (
                <Link
                  key={item}
                  to={path}
                  className="text-gray-300 hover:text-white transition-colors underline-hover"
                >
                  {item}
                </Link>
              );
            })}
          </nav>

          {/* Social Links */}
          <div className="flex gap-6 text-2xl">
            <a href="#" className="social-icon">
              <FaFacebook />
            </a>
            <a href="#" className="social-icon">
              <FaInstagram />
            </a>
            <a href="#" className="social-icon">
              <FaTiktok />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col lg:flex-row gap-8 mb-12">
          {/* Contact Info */}
          <div className="lg:w-1/3 space-y-4">
            <h3 className="text-xl text-[#96ce73] font-semibold">Contact Us</h3>
            <p>Email: codivora1@gmail.com</p>
            <p>Phone: 09018115555</p>
            <p>Address: petrolcam Abuladu,<br />City: Lagos, Country: Nigeria</p>
          </div>

          {/* Newsletter */}
          <div className="lg:w-2/3 bg-[#2a2a32] p-6 rounded-xl">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your Email"
                className="flex-1 px-4 py-3 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#96ce73]"
              />
              <button className="bg-[#b9ff66] text-black px-8 py-3 rounded-lg font-semibold hover:bg-[#a2e657] transition-colors">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© Copyright codivora 2025. All rights reserved</p>
        </div>
      </div>

      <style jsx>{`
        html {
          scroll-padding-top: 100px; /* Match navbar height */
        }

        .footer-animate {
          opacity: 0;
          transform: translateY(20px);
          transition: all 0.6s ease-out;
        }

        .footer-active {
          opacity: 1;
          transform: translateY(0);
        }

        .underline-hover {
          position: relative;
        }

        .underline-hover:after {
          content: '';
          position: absolute;
          width: 0;
          height: 2px;
          bottom: -4px;
          left: 0;
          background-color: #96ce73;
          transition: width 0.3s ease;
        }

        .underline-hover:hover:after {
          width: 100%;
        }

        .social-icon {
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #96ce73;
          transform: translateY(-2px);
        }
      `}</style>
    </footer>
  );
}

export default Footer;