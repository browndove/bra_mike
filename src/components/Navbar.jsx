import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import logo1 from "../asset/2nd.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="relative">
      {/* Overlay */}
      {isMenuOpen && (
       <div
       className="fixed top-0 left-0 h-screen w-screen bg-white opacity-100 z-[999999] flex items-center justify-center transition-opacity duration-[800ms]"
       onClick={toggleMenu}
     >
       <div className="bg-white p-4 opacity-100">
         <ul className='text-black items-center justify-center flex flex-col gap-y-6'>
         <li className={location.pathname === '/' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>HOME</li>
           <li>ABOUT</li>
           <li>SAVANNAH REGION</li>
           <li>PROJECTS</li>
           <li>VOLUNTEER</li>
           <li>CONTACT</li>
         </ul>
       </div>
     </div>
     
      )}

      <div className="flex flex-row items-center justify-between py-[12px] bg-white px-4">
        {/* Logo */}
        <div>
          <img src={logo1} alt="Logo" className="w-34 h-12" />
        </div>

        {/* Hamburger Menu Icon (visible on mobile) */}
        <div className="block md:hidden">
          <button onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Navigation Links (visible on desktop) */}
        <div className="hidden md:block">
          <ul className="flex flex-row items-center space-x-6 text-gray-600 text-sm font-[600] cursor-pointer">
            <li className={location.pathname === '/' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>HOME</li>
            <li className={location.pathname === '/about' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>ABOUT</li>
            <li className={location.pathname === '/region' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>SAVANNAH REGION</li>
            <li className={location.pathname === '/projects' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>PROJECTS</li>
            <li className={location.pathname === '/volunteer' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>VOLUNTEER</li>
            <li className={location.pathname === '/contact' ? 'bg-[#111827] text-white px-2 py-1 rounded' : 'hover:bg-slate-600 hover:text-white px-2 py-1 rounded'}>CONTACT</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
