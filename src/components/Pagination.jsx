import "./Pagination.css";
const Pagination = () => {
  return (
    <div className="flex items-center justify-center gap-10 h-16">
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none  text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none mr-12"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.591 4.59365C24.2024 3.19562 22.5509 2.08626 20.7315 1.32955C18.9122 0.572829 16.9611 0.183719 14.9906 0.184648C6.69794 0.184648 0 6.90135 0 15.194C0 23.4867 6.69794 30.2034 14.9906 30.2034C21.9887 30.2034 27.8236 25.4192 29.4934 18.9464H25.591C24.8181 21.1406 23.3834 23.0409 21.4847 24.3851C19.586 25.7293 17.317 26.4511 14.9906 26.4511C8.78049 26.4511 3.73358 21.4042 3.73358 15.194C3.73358 8.9839 8.78049 3.93699 14.9906 3.93699C18.1051 3.93699 20.8818 5.23155 22.9081 7.27658L16.8668 13.3179H30V0.184648L25.591 4.59365Z"
              fill="url(#paint0_linear_1_169)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_169"
                x1="15"
                y1="0.184647"
                x2="15"
                y2="30.2034"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06286E" />
                <stop offset="1" stopColor="#164EC0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-3xl border  text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none paginationBg"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </span>
      </button>
      <p className="block font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
        <strong className="text-gray-900">01</strong> /{" "}
        <strong className="text-gray-900">10</strong>
      </p>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-3xl border  text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none paginationBg"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </span>
      </button>
      <button
        className="relative h-8 max-h-[32px] w-8 max-w-[32px] select-none text-center align-middle font-sans text-xs font-medium uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none ml-12"
        type="button"
      >
        <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
          <svg
            width="30"
            height="31"
            viewBox="0 0 30 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.28571 10.9083H0V0.194031H10.7143V4.47974H4.28571V10.9083ZM0 19.4797H4.28571V25.9083H10.7143V30.194H0V19.4797ZM25.7143 25.9083H19.2857V30.194H30V19.4797H25.7143V25.9083ZM19.2857 4.47974V0.194031H30V10.9083H25.7143V4.47974H19.2857Z"
              fill="url(#paint0_linear_1_174)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_174"
                x1="15"
                y1="0.194031"
                x2="15"
                y2="30.194"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#06286E" />
                <stop offset="1" stopColor="#164EC0" />
              </linearGradient>
            </defs>
          </svg>
        </span>
      </button>
    </div>
  );
};

export default Pagination;
