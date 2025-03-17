import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/NavBar-Component/Navbar';
import Footer from './components/Footer-Component/Footer';
import Hero from './components/Home-Components/Hero';
import Media from './components/Home-Components/Media';
import Services from './components/Home-Components/Services';
import UseCases from './components/Home-Components/UseCases';
import Pricing from './Pages/Pricing';
import Blog from './Pages/Blog';
import About from './Pages/About';
import NotFound from './utilis/NotFound';
import ServerError from './utilis/ServerError';
import './index.css';
import Testimonials from './components/Home-Components/Testimonials';
import Proposal from './components/Home-Components/Proposal';

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 md:pt-24" role="main">
        <ErrorBoundary FallbackComponent={ServerError}>
          <AnimatePresence mode='wait'>
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </ErrorBoundary>
      </main>

      <Footer />
    </div>
  );
};

const Home = () => (
  <>
    <Hero />
    <Media />
    <Services />
    <Proposal/>
    <UseCases />
    <Testimonials/>
  </>
);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="price" element={<Pricing />} />
          <Route path="blog" element={<Blog />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);