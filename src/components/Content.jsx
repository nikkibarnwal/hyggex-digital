import Card from "./Card";
import "./Content.css";
import ContentNav from "./ContentNav";
import Faq from "./Faq";
import Pagination from "./Pagination";
const Content = () => {
  return (
    <main className="container">
      <h2 className={`px-20 mt-8 pageTitle text-3xl`}>
        Relations and Functions ( Mathematics )
      </h2>
      <div className="flex justify-center items-center">
        <div className="h-[485.1px] w-[712px] mb-8">
          <ContentNav />
          <Card />
          <Pagination />
        </div>
      </div>
      <div className="flex px-20 my-20 w-full relative">
        <div className="absolute">
          <button
            type="button"
            className="inline-flex bg-white hover:bg-gray-100   focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center  items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            <span className="flex flex-col items-center">
              <span className="bg-white  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 text-white  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-3 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <img
                  alt=""
                  src="./assets/hyggex.jpeg"
                  width="46"
                  className="mt-1"
                  height="46"
                />
              </span>
            </span>
            <div>
              <span className="text-xs font-normal top-0">Published By</span>
              <br />
              <span className="text-2xl textColorBlue font-normal">Hyggex</span>
            </div>
          </button>
        </div>
        <div className="right-5 absolute">
          <button
            type="button"
            className="text-gray-900 bg-white hover:bg-gray-100   focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2"
          >
            <span className="text-white rootColor hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-bold rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="white"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="white"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </span>
            <span className="text-2xl textColorBlue font-normal">
              Create Flash card
            </span>
          </button>
        </div>
      </div>
      <Faq />
    </main>
  );
};
export default Content;
