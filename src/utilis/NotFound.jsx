import { Link } from 'react-router-dom';

export default function NotFound() {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 p-8">
        <div className="max-w-4xl w-full text-center relative">
          {/* Animated floating sphere */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2">
            <div className="relative w-48 h-48">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float opacity-30 blur-xl" />
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full animate-float" />
            </div>
          </div>
  
          {/* Main content */}
          <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
            <h1 className="text-9xl md:text-[180px] font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent mb-4 animate-text-glow">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6">
              Oops! You've wandered into the digital wilderness
            </h2>
            
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              The page you're looking for has either been abducted by aliens or never existed. 
              Let's beam you back to safety.
            </p>
  
            <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="relative inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-2xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl z-20"
            >
              Back to Homebase
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2 animate-bounce-horizontal"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
          </div>
  
            {/* Grid pattern background */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden z-0">
              <div className="absolute inset-0 bg-grid-white/[0.05] [mask-image:linear-gradient(180deg,transparent,rgba(0,0,0,0.8))]" />
            </div>
          </div>
        </div>
  
        {/* Add this to your index.css */}
        {/* <style jsx>{`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-20px); }
          }
          
          @keyframes text-glow {
            0%, 100% { text-shadow: 0 0 20px rgba(168,85,247,0.5); }
            50% { text-shadow: 0 0 40px rgba(168,85,247,0.8); }
          }
  
          @keyframes bounce-horizontal {
            0%, 100% { transform: translateX(0); }
            50% { transform: translateX(4px); }
          }
  
          .animate-float {
            animation: float 6s ease-in-out infinite;
          }
  
          .animate-text-glow {
            animation: text-glow 3s ease-in-out infinite;
          }
  
          .animate-bounce-horizontal {
            animation: bounce-horizontal 1s ease-in-out infinite;
          }
  
          .bg-grid-white\/\[0\.05\] {
            background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='rgb(255 255 255 / 0.05)'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e");
          }
        `}</style> */}
      </div>
    );
  }