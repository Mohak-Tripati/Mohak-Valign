import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import NMSDC from "../assests/image 80.png"

const Sidebar = () => {


    const location = useLocation();

    // Define an object to map URL paths to corresponding classNames
    const pathToClassName = {
      '/work-queue': 'text-blue-800',
      '/update-request': 'text-blue-800',
      // Add more URL paths and classNames as needed
    };
  
    // Get the className for the current URL path
    const className = pathToClassName[location.pathname] || '';


    return (

        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">

            <div className="flex flex-col grow justify-between px-4 py-4 mx-auto w-full font-medium bg-white">
                <img
                    loading="lazy"
                    srcSet={NMSDC}
                    className="max-w-full aspect-[1.59] w-[118px]"
                />

                <Link to="/dashboard" className={`flex gap-5 justify-between px-3 py-2 mt-2 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-slate-50 ${className}`}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02df01e0cfc101d3a258cb6e15e685ad201745197a8ffc8fcfbb40195dd7a941?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Dashboard</div>
                </Link>


                <Link to="/dashboard" className={`flex gap-5 justify-between px-3 py-2 mt-2 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-slate-50 ${className}`}>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/02df01e0cfc101d3a258cb6e15e685ad201745197a8ffc8fcfbb40195dd7a941?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Team Dashboard</div>
                </Link>

                <Link to="/work-queue" className={`flex gap-5 justify-between px-3 py-2 mt-2 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-slate-50 ${className}`}>
                    <div className="flex gap-2 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a7e6cc42e21f24371dfcb990331e9dd77c5383ebfffadd96d9b4e06a42802c?"
                            className="w-5 aspect-square"
                        />
                        <div className="grow">My Work Queue</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/910e2deb522bcbb4b5dd5ae4436e0e72b59b363819b3dd8ed0270d7e9d6f04ab?"
                        className="w-5 aspect-square"
                    />
                </Link>

                <Link to="/work-queue" className={`flex gap-5 justify-between px-3 py-2 mt-2 w-full text-sm tracking-normal leading-5 whitespace-nowrap bg-slate-50 ${className}`}>
                    <div className="flex gap-2 justify-between">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/78a7e6cc42e21f24371dfcb990331e9dd77c5383ebfffadd96d9b4e06a42802c?"
                            className="w-5 aspect-square"
                        />
                        <div className="grow">Desk Audit</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/910e2deb522bcbb4b5dd5ae4436e0e72b59b363819b3dd8ed0270d7e9d6f04ab?"
                        className="w-5 aspect-square"
                    />
                </Link>


                <Link to="/update-request" className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 bg-white text-slate-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c776481b25e2388371c131fc4b5b79aa6643a55f767db8bd798c68158c07b8?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Update Requested</div>
                </Link>


                <Link to="/escalations" className="flex gap-5 justify-between px-3 py-2 mt-2 w-full whitespace-nowrap bg-white">
                    <div className="flex gap-2 justify-between text-sm tracking-normal leading-5 text-slate-500">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f55e8265083041835774c608180f6892e73bd975b4972f43511d07caed144271?"
                            className="w-5 aspect-square"
                        />
                        <div className="grow">Escalations</div>
                    </div>
                    {/* <div className="justify-center items-center px-0.5 my-auto h-4 text-xs tracking-wide leading-3 text-center text-gray-600 uppercase rounded-sm aspect-square bg-slate-50">
      2
    </div> */}
                </Link>

                <Link to="/interviews" className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 whitespace-nowrap bg-white text-slate-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/68bb7cbd989489bddd423b490dd86a3b8b1e7c66f7a0e23e8daf00478c6d9aa4?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Interviews</div>
                </Link>


                <Link to="/final-review" className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 bg-white text-slate-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e188248c1874cd69018d150db1a0f96fbffb158074575c3d2b4d1946f5d54c8?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Final Review</div>
                </Link>

                <Link to="/final-review" className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 bg-white text-slate-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e188248c1874cd69018d150db1a0f96fbffb158074575c3d2b4d1946f5d54c8?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">Reports</div>
                </Link>



                <Link to="/faq" className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 whitespace-nowrap bg-white text-slate-500">
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/0969079433534900bc627a0192094fc43bbf04980896b2a498a00d8f4853f944?"
                        className="w-5 aspect-square"
                    />
                    <div className="flex-auto">FAQs</div>
                </Link>



                <Link to="/profile" className="flex gap-5 justify-between pr-1.5 w-full text-lg leading-5 whitespace-nowrap mt-[550px] text-slate-500 max-md:mt-10">
                    <div className="flex gap-2 justify-between px-2 py-1 rounded-xl">
                        <img
                            loading="lazy"
                            src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e5b15d7c4e7b9ad8ed1418575ccc3a06be50f212f72aa12a8cee5f42693f671?"
                            className="w-6 aspect-square"
                        />
                        <div className="grow">Mohak Tripathi</div>
                    </div>
                    <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e568e2842ec43d1d61eb7171361ec9d826a1ab61c30f35b5f5472626373026c?"
                        className="my-auto w-4 aspect-square"
                    />
                </Link>

            </div>
        </div>
    )
}

export default Sidebar



