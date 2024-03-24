import React, { useState } from 'react';

function Dropdown({ options,text }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          className="inline-flex justify-center w-full  text-white shadow-sm  px-4 py-2 text-2xl		 font-medium   hover:text-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 "
          onClick={toggleDropdown}
        >
          {text}
          {/* <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a2 2 0 100-4 2 2 0 000 4z"
            />
          </svg> */}
        </button>
      </div>
      {isOpen && (
        <div className="origin-top-right absolute right-0 w-full mt-2  rounded-md drop-shadow-xl

ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
          <div className="py-1" role="none">
            {options.map((option, index) => (
              <a href="#" key={index} className="block px-4 py-2 text-lg	text-white hover:text-indigo-500" role="menuitem" tabIndex="-1" id={`menu-item-${index}`}>{option}</a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
