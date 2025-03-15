import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from './Hero';
import Services from './Services';
import UseCases from './UseCases';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const targetId = location.hash.replace('#', '');
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        const navbarHeight = 100; // Adjust to match your navbar height
        const targetPosition = targetElement.offsetTop - navbarHeight;
        
        // Use 'auto' scroll for initial page load, 'smooth' for in-app navigation
        const behavior = location.state?.fromNavigation ? 'smooth' : 'auto';
        
        window.scrollTo({
          top: targetPosition,
          behavior: behavior
        });
      }
    }
  }, [location.hash, location.state]);

  return (
    <>
      <Hero />
      <section id="service">
        <Services />
      </section>
      <section id="cases">
        <UseCases />
      </section>
    </>
  );
};

export default Home;