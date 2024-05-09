const Nav = () => {
  return (
    <>
      <nav>
        {/* <nav className="bg-gray-100"> */}
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              <div>
                <a
                  href="#"
                  className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
                >
                  <img
                    className="h-6 w-auto sm:h-6"
                    src="/assets/logo.png"
                    alt=""
                  />
                  {/* <span className="font-bold">Reverie Visuals</span> */}
                </a>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3">
                Home
              </a>
              <a href="#" className="py-5 px-3">
                Flashcard
              </a>
              <a href="#" className="py-5 px-3">
                Contact
              </a>
              <a href="#" className="py-5 px-3">
                FAQ
              </a>
              <a
                href="#"
                className=" text-white rootColor font-medium rounded-full text-sm py-2 px-5  text-center my-2"
              >
                Login
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
