// import React from 'react'
// import CalenderCheck from '../assests/'



// const ListView = () => {
//   return (
//     <>
//       <div>ListView</div>

//       <div>
//         <div>
//         <img src={CalenderCheck} alt="Calendar Check" /> Dashboard
//         </div>
//         <div>   <img src={CalenderCheck} alt="Calendar Check" />  My Work Queue</div>
//         <div>    <img src={CalenderCheck} alt="Calendar Check" /> Update Requested </div>
//         <div>   <img src={CalenderCheck} alt="Calendar Check" /> Escalations </div>
//         <div>   <img src={CalenderCheck} alt="Calendar Check" /> Interviews  </div>
//         <div>   <img src={CalenderCheck} alt="Calendar Check" />  Final Review </div>
//         <div>    <img src={CalenderCheck} alt="Calendar Check" /> FAQ </div>
//         <div>

//           <div>My Work Queue</div>
//           <div>
//             <div> All</div>
//             <div> Certification</div>
//             <div> Re Certification</div>

//           </div>
//           <div>
//             <div>  <input type="text" />     <button>Filter</button>   </div>

//             <div>
//               <select></select>

//               <button>Card View</button>

//               <button>List View</button>
//             </div>
//           </div>
//           <div> Table </div>

//         </div>

//       </div>
//     </>

//   )
// }

// export default ListView

import * as React from "react";

import "./listView.css"
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../Compoenents/Sidebar";


const ListView = () => {


  return (
    <div className="justify-center bg-slate-100">


      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

        <Sidebar />

        <div className="flex flex-col ml-5 w-[81%] max-md:ml-0 max-md:w-full">
          <div className="flex flex-col max-md:max-w-full">
            <div className="flex flex-col justify-center p-8 max-md:px-5 max-md:max-w-full MyQueueBackground">
              <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex flex-col text-4xl font-semibold leading-10 text-white whitespace-nowrap">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b14f34cf07154ae824c9147e23cca5ac356ee54b88272ef7e83ee9e5e21818?"
                    className="w-5 aspect-square fill-slate-500"
                  />
                  <div className="mt-1">My Work Queue</div>
                </div>
                <div className="flex gap-5 justify-between self-start p-1">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/122bfeadedddc9b4680db1ed48ef4da803aa1759f9da94c8bee9ed2210a7ae3a?"
                    className="w-6 aspect-square"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/cb3a23ddc6ec7ac79609e1874129d380eb88802da6fc4a59023159f39777afa7?"
                    className="w-6 aspect-square"
                  />
                </div>
              </div>
            </div>


            <div className="flex flex-col px-10 py-8 text-sm max-md:px-5 max-md:max-w-full gap-4">
              <div className="flex flex-col justify-center items-start py-3.5 pr-16 font-medium tracking-normal text-center whitespace-nowrap border-b border-solid border-b-[color:var(--stroke-soft-200,#E2E4E9)] leading-[143%] text-slate-500 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div>All</div>
                  <div className="grow justify-center text-blue-800">
                    Certification
                  </div>
                  <div className="grow">Re-Certification</div>
                </div>
              </div>

              {/* <div className="flex gap-5 justify-between mt-6 w-full">
                <div className="flex gap-4 self-start text-blue-950 w-full">
                  <div className="flex gap-2 justify-between p-2 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4e3c105fd31a0027fade2b8186c46c06ee26c0976e3db8696aa83f483dc6c6?"
                      className="self-start w-4 aspect-square"
                    />
                    <input type="text" placeholder="Enter Keyword" />
                  </div>
                  <div className="flex gap-2 justify-between p-2 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/da3d8cdf2a322133c0ce6f4a3394fd4ec8bf927c044a0f7bdee36748ea415c07?"
                      className="self-start w-4 aspect-square"
                    />
                    <div>Filter</div>
                  </div>
                </div>
                <div className="flex gap-4 justify-between pl-20 whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="flex gap-2 self-start p-2 bg-white rounded-md leading-[120%] text-blue-950">


                    <select className="self-start px-2 py-1 rounded-md">
                      <option value="newlyAdded">Newly Added</option>
                      <option value="oldestAdded">Oldest Added</option>
                    </select>

                    
                  </div>
                  <div className="flex gap-1 justify-between p-1 font-medium tracking-normal bg-slate-50 leading-[143%]">
                    <div className="grow justify-center px-6 py-1 rounded-md bg-slate-50 text-slate-500 max-md:px-5">
                      Card View
                    </div>
                    <div className="grow justify-center px-7 py-1 bg-white rounded-md shadow-md text-gray-950 max-md:px-5">
                      List View
                    </div>
                  </div>

                </div>
              </div> */}

              <div className="header w-full flex justify-between items-center ">
                <div className="left w-[30%] flex justify-between items-center gap-4">
                  <div className="left bg-white rounded-lg min-h-min p-2.5 min-w-min flex justify-start items-center gap-4">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4e3c105fd31a0027fade2b8186c46c06ee26c0976e3db8696aa83f483dc6c6?"
                      className="self-start w-4 aspect-square"
                    />
                    <input className="h-full outline-none font-fa" placeholder="Enter a Keyword" />
                  </div>
                  <div className="right">
                    <button className="flex justify-start items-center gap-4 bg-white rounded-lg p-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/da3d8cdf2a322133c0ce6f4a3394fd4ec8bf927c044a0f7bdee36748ea415c07?"
                        className="self-start w-4 aspect-square"
                      />
                      <div>Filter</div>
                    </button>
                  </div>
                </div>
                <div className="right min-w-min flex justify-start items-center gap-2">
                  <select className="self-start px-2 py-1 rounded-md outline-none">
                    <option value="newlyAdded">Newly Added</option>
                    <option value="oldestAdded">Oldest Added</option>
                  </select>
                  <div className="flex gap-1 self-stretch text-sm font-medium tracking-normal leading-5 whitespace-nowrap bg-slate-50">
                    <div className="grow justify-center px-6 py-1 mt-1 rounded-md bg-slate-50 text-slate-500">
                      Card View
                    </div>
                    <div className="grow justify-center px-7 py-1 mt-1 bg-white rounded-md shadow-md text-gray-950">
                      List View
                    </div>
                  </div>
                </div>
              </div>

            </div>


            <div className="flex flex-col px-10 py-8 text-sm max-md:px-5 max-md:max-w-full">


              <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">



                  <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 header-font">
                    <tr>
                   

                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Application Name
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Certification Type
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Application Type
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Application Stage
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Date of Submission
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Days in Stage
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Days in Queue
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Total Days
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3" style={{ color: '#2c5282' }}>
                        {/* <span className="sr-only">Edit</span> */}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                      {/* <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        001
                      </th> */}
                      <td className="px-6 py-4">
                        001
                      </td>
                      {/* rgba(82, 88, 102, 1) */}
                      <td className="px-6 py-4 ">
                        ABC Corporation
                      </td>
                      <td className="px-6 py-4">
                        Laptop
                      </td>
                      <td className="px-6 py-4">
                        02/24/23
                      </td>
                      <td className="px-6 py-4">
                        MBE
                      </td>
                      <td className="px-6 py-4">
                        20
                      </td>
                      <td className="px-6 py-4">
                        20
                      </td>
                      <td className="px-6 py-4">
                        20
                      </td>
                      <td className="px-6 py-4 flex gap-2">
                        <button className="background-color-view rounded-lg">View</button>
                        {/* <button className="background-color-claim">Claim</button> */}
                      </td>


                    </tr>


                  </tbody>
                </table>
              </div>










            </div>
          </div>







        </div>
      </div>
    </div>
  );
}

export default ListView
