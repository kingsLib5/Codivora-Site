import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route, Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Services from './components/Services';
import UseCases from './components/UseCases';
import Pricing from './components/Pricing';
import Blog from './components/Blog';
import About from './components/About';
import NotFound from './components/NotFound';
import ServerError from './components/ServerError';
import './index.css';

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
    <Services />
    <UseCases />
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