import React from "react";

const Dropdown = (props) => {
  return (
    <div className="mb-6">
      <button
        id="dropdownDefaultButton"
        data-dropdown-toggle="dropdown"
        className="text-black hover:bg-blue-800 focus:ring-4 hover:text-white focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex justify-between items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 w-[48rem] border-2 border-cyan-500"
        type="button"
      >
        <span>{props?.title}</span>
        <span className="right-2">
          <svg
            className="w-2.5 h-2.5 ms-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Dropdown;
