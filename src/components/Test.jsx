import React from 'react'

function Test() {
  return (
    <>
<div className="bg-white w-full h-screen flex items-center justify-center">
  {/* <!-- Inner div with red background --> */}
  <div className="flex justify-between items-center  bg-blue-600 h-96  max-w-3xl p-6  border border-gray-200 rounded-3xl shadow">
    {/* <!-- Centered content --> */}
    <div className="absolute inset-0 flex items-center justify-center text-2xl font-bold tracking-tight text-white dark:text-white">
     9 + 6 + 7x - 2x - 3
    </div>

    {/* <!-- Top-left content --> */}
    <div className="absolute top-0 left-0">
      Top Left Content
    </div>

    {/* <!-- Top-right content --> */}
    <div className="absolute top-0 right-0">
      Top Right Content
    </div>
  </div>
</div> 

{/* <a
            href="#"
            className="flex flex-col justify-between items-center  bg-blue-600 h-96  max-w-3xl p-6  border border-gray-200 rounded-3xl shadow"
          >
              <div className="absolute top-0 left-0 p-4 bg-red-400"></div>
              <div className="absolute top-0 right-0 p-4 bg-yellow-400"></div>
              <h5 className="flex justify-center items-center h-full text-2xl font-bold tracking-tight text-white dark:text-white ">
              9 + 6 + 7x - 2x - 3
            </h5>
          </a> */}
          </>
  
  )
}

export default Test
