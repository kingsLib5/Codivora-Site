import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Hero from '../components/Home-Components/Hero';
import Media from '../components/Home-Components/Media';
import Services from '../components/Home-Components/Services';
import Proposal from '../components/Home-Components/Proposal';
import UseCases from '../components/Home-Components/UseCases';
import Testimonials from '../components/Home-Components/Testimonials';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleHashNavigation = () => {
      const hash = location.hash;
      if (hash) {
        const targetId = hash.replace('#', '');
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
          // Calculate navbar height dynamically
          const navbar = document.querySelector('nav');
          const navbarHeight = navbar ? navbar.offsetHeight : 100;
          
          const targetPosition = targetElement.offsetTop - navbarHeight;
          
          // Smooth scroll with timeout to ensure component rendering
          setTimeout(() => {
            window.scrollTo({
              top: targetPosition,
              behavior: 'smooth'
            });
          }, 100);
        } else {
          // If element doesn't exist, remove invalid hash from URL
          navigate(location.pathname, { replace: true });
        }
      }
    };

    // Handle initial load
    handleHashNavigation();

    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, [location, navigate]);

  return (
    <>
      <Hero />
      <Media/>
      <section id="Service">  
        <Services />
      </section>
      <Proposal/>
      <section id="Cases">  
        <UseCases />
      </section>
      <Testimonials/>
    </>
  );
};

export default Home;