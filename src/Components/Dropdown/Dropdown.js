import React, { useState } from 'react';

function Dropdown({ options,text }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="relative inline-block text-left" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full  text-white shadow-sm  px-4 py-2 text-2xl		 font-medium   hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          onClick={toggleDropdown}
        >
          {text}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-full mt-2  rounded-md drop-shadow-xl ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a href="#" key={index} className="block px-4 py-2 text-lg text-white hover:text-indigo-500" role="menuitem" tabIndex="-1" id={`menu-item-${index}`}>{option}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
