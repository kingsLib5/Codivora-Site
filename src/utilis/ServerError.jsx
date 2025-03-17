import { Link } from 'react-router-dom';

export default function ServerError() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-900 to-rose-900 p-8">
      <div className="max-w-4xl w-full text-center relative">
        <div className="relative z-10 bg-white/5 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-white/10 shadow-2xl">
          <h1 className="text-9xl md:text-[180px] font-bold bg-gradient-to-r from-red-400 to-rose-400 bg-clip-text text-transparent mb-4">
            500
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-100 mb-6">
            Server Meltdown Detected
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Our engineers are working frantically to contain the digital explosion. 
            Please try again later or return to safety.
          </p>
          <Link
            to="/"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-500 to-rose-500 text-white rounded-2xl font-semibold hover:scale-105 transform transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Emergency Evacuation
          </Link>
        </div>
      </div>
    </div>
  );
}