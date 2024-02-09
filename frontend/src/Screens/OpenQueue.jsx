







import * as React from "react";

import "./OpenQueue.css"
import "./listView.css"
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../Compoenents/Sidebar";


const OpenQueue = () => {


    return (
        <div className="justify-center bg-slate-100">


            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

                <Sidebar />

                <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col max-md:max-w-full">
                        {/* //max-md:px-5  */}
                        <div className="flex flex-col justify-center p-8 max-md:max-w-full MyQueueBackground border border-yellow-500">
                            <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
                                <div className="flex flex-col text-4xl font-semibold leading-10 text-white whitespace-nowrap">
                                    <img
                                        loading="lazy"
                                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0b14f34cf07154ae824c9147e23cca5ac356ee54b88272ef7e83ee9e5e21818?"
                                        className="w-5 aspect-square fill-slate-500"
                                    />
                                    <div className="mt-1">Open Queue</div>
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


                        <div className="flex flex-col py-8 text-sm max-md:px-5 max-md:max-w-full">


                            <div className="relative overflow-x-auto shadow-md ">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">



                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 header-font">
                                        <tr>
                                            <th scope="col" className="px-6 py-3">
                                                ID
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Company Name
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Date of Submission
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Certification Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Application Type
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Days in Stage
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Days Workeb
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Days Worked + Days in Queue
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                {/* <span className="sr-only">Edit</span> */}
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mt-2">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                001
                                            </th>
                                            <td className="px-6 py-4 row-font">
                                                ABC Corporation
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                02/24/23
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                MBE
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4 flex gap-2">
                                                <button className="background-color-view">View</button>
                                                <button className="background-color-claim">Claim</button>
                                            </td>


                                        </tr>




                                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 mb-2">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                001
                                            </th>
                                            <td className="px-6 py-4 row-font">
                                                ABC Corporation
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                Laptop
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                02/24/23
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                MBE
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4  row-font">
                                                20
                                            </td>
                                            <td className="px-6 py-4 flex gap-2">
                                                <button className="background-color-view">View</button>
                                                <button className="background-color-claim">Claim</button>
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

export default OpenQueue
