import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { FaDownload } from "react-icons/fa"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="fixed top-6 container z-50 bg-white shadow-sm  rounded-full max-md:rounded-xs max-sm:top-0">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between p-2">
          {/* Logo and Name */}
          <div className="flex items-center">
            <div className="flex-shrink-0 px-4  rounded-full">
                <p className='w-11 text-sm text-gray-900 font-bold'>Mário Matias</p>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center font-semibold space-x-8">
              <a href="#" className="text-blue-600 text-xs font-medium uppercase hover:text-blue-800">Home</a>
              <a href="#" className="text-gray-500 text-xs font-medium uppercase hover:text-blue-600">About</a>
              <a href="#" className="text-gray-500 text-xs font-medium uppercase hover:text-blue-600">Portfolio</a>
              <a href="#" className="text-gray-500 text-xs font-medium uppercase hover:text-blue-600">Contacts</a>
              <a href="#" className="text-gray-500 text-xs font-medium uppercase hover:text-blue-600">Blog</a>
            </div>
          </div>
          
          {/* Download CV Button */}
          <div className="hidden md:block">
            <button className="bg-white  hover:bg-blue-600 hover:duration-300 hover:text-white text-blue-600 font-medium text-xs py-2 px-4 border border-blue-600 rounded-full inline-flex items-center">
              DOWNLOAD CV
              <FaDownload className="ml-2 text-sm" />
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              {isMenuOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-blue-600 block px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">About</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Portfolio</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Contacts</a>
            <a href="#" className="text-gray-500 hover:text-blue-600 block px-3 py-2 text-base font-medium">Blog</a>
            <button className="mt-2 w-full bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 border border-gray-300 rounded-full inline-flex items-center justify-center">
              DOWNLOAD CV
              <ChevronDown className="ml-1 h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}