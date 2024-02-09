

import * as React from "react";

import "./listView.css"
import { Link, useLocation } from 'react-router-dom';
import Sidebar from "../Compoenents/Sidebar";


const CardView = () => {


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




  
{/* //builder.io */}

    <div className="flex flex-col self-stretch px-10 py-8 max-md:px-5">
    
      <div className="flex gap-5 justify-between mt-6 w-full text-sm leading-4 text-blue-950 max-md:flex-wrap max-md:max-w-full">
      
        <div className="flex gap-2 justify-between p-2 whitespace-nowrap bg-white rounded-md">
          <div className="grow">Sort By: Newly Added</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/9de4f91b3015e698f4866dec813d5d7ee9834fa761dd5a06ac0557747507ff31?"
            className="self-start w-4 aspect-square"
          />
        </div>
      </div>
      <div className="flex gap-5 justify-between mt-8 w-full max-md:flex-wrap max-md:max-w-full">
        <div className="flex gap-5 justify-between pr-20 my-auto max-md:flex-wrap max-md:max-w-full">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5092b1a9f9d2df47d8efa4659a9020b9def46bbf04c72437184d3c362beca19f?"
            className="w-6 aspect-square"
          />
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/413ceb24ab28e738b578674f1cdc70509675c6b5e71f588789a0d9f2c2232216?"
            className="my-auto w-5 aspect-square"
          />
        </div>
        <div className="flex gap-2 justify-between px-5 py-2.5 text-base font-medium leading-5 text-white whitespace-nowrap bg-lime-500">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/82a0b698f464d61f14a798f46b1aa2e587029e9adcf295c24c1a4f0ebc41d0a1?"
            className="w-4 aspect-square"
          />
          <div className="my-auto">Claim</div>
        </div>
      </div>
      <div className="flex gap-2 justify-between mt-8 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cccac482ad0871f18678bc03d0e10b8a2b2922e33a7f0ce1ff05668d1fc54573?"
          className="self-start w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 border border-solid border-[color:var(--Red,#DD4F22)] max-md:max-w-full">
          <div className="py-6 pr-2 pl-6 bg-white max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow whitespace-nowrap max-md:mt-10">
                  <div className="flex gap-5 justify-between px-0.5 leading-[120%]">
                    <div className="flex gap-3 justify-between">
                      <div className="text-base font-medium text-blue-950">
                        001
                      </div>
                      <div className="flex-auto text-sm text-orange-600">
                        Overdue
                      </div>
                    </div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af40117499319ac78407c245161d19f965fe66d0bcbc3de7b79ab41281e9b5a?"
                      className="my-auto w-3.5 aspect-square"
                    />
                  </div>
                  <div className="mt-1 text-2xl font-medium leading-7 text-blue-950">
                    Saint Lorenzo Corporation
                  </div>
                  <div className="flex gap-5 justify-between mt-14 max-md:mt-10">
                    <div className="flex flex-col flex-1">
                      <div className="text-base leading-5 text-neutral-400">
                        Application Status
                      </div>
                      <div className="flex gap-0 justify-between py-1 mt-2.5 text-sm font-medium leading-4 text-center text-gray-600 bg-slate-50 rounded-[999px]">
                        <div className="h-5 w-[18px]" />
                        <div className="flex-auto my-auto">Paused</div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-2 leading-[120%]">
                      <div className="text-base text-neutral-400">
                        Date of Submission
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        02/23/2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col leading-[120%] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-6 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Certification Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">MBE</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-9 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Application Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Re-Certification
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Application Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Interview
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-14 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days in Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Days Worked
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-4 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days Worked+Days in Queue
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 text-sm leading-4 text-gray-600 bg-white border-t border-solid border-t-[color:var(--stroke-soft-200,#E2E4E9)] max-md:max-w-full">
            <div className="flex gap-1 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-1 justify-between whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebf679306885bd8e986a16748c82faf1cf8924679afa169b0a7f79d2d0fb78a?"
                  className="w-5 aspect-square"
                />
                <div className="grow my-auto">Note for Escalation:</div>
              </div>
              <div className="flex-auto my-auto max-md:max-w-full">
                The particular section has a misinformation. I am unable to
                pinpoint this particular informations, please verify.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cccac482ad0871f18678bc03d0e10b8a2b2922e33a7f0ce1ff05668d1fc54573?"
          className="self-start w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <div className="py-6 pr-2 pl-6 bg-white max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex gap-5 justify-between px-0.5 text-base font-medium leading-5 whitespace-nowrap text-blue-950">
                    <div>001</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af40117499319ac78407c245161d19f965fe66d0bcbc3de7b79ab41281e9b5a?"
                      className="my-auto w-3.5 aspect-square"
                    />
                  </div>
                  <div className="mt-1 text-2xl font-medium leading-7 text-blue-950">
                    McCarthy & Tims Associates Pvt. Ltd.
                  </div>
                  <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                    <div className="flex flex-col flex-1">
                      <div className="text-base leading-5 text-neutral-400">
                        Application Status
                      </div>
                      <div className="flex gap-0 justify-between py-1 mt-2.5 text-sm font-medium leading-4 text-center text-amber-900 bg-red-200 rounded-[999px]">
                        <div className="h-5 w-[18px]" />
                        <div className="flex-auto my-auto">In-Review</div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-2 leading-[120%]">
                      <div className="text-base text-neutral-400">
                        Date of Submission
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        02/23/2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col leading-[120%] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-6 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Certification Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">MBE</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-9 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Application Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Re-Certification
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Application Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Interview
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-14 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days in Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Days Worked
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-4 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days Worked+Days in Queue
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>





          <div className="flex flex-col justify-center p-4 text-sm leading-4 text-gray-600 bg-white border-t border-solid border-t-[color:var(--stroke-soft-200,#E2E4E9)] max-md:max-w-full">
            <div className="flex gap-1 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-1 justify-between whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebf679306885bd8e986a16748c82faf1cf8924679afa169b0a7f79d2d0fb78a?"
                  className="w-5 aspect-square"
                />
                <div className="grow my-auto">Note for Escalation:</div>
              </div>
              <div className="flex-auto my-auto max-md:max-w-full">
                The particular section has a misinformation. I am unable to
                pinpoint this particular informations, please verify.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-2 justify-between mt-6 max-md:flex-wrap max-md:max-w-full">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/cccac482ad0871f18678bc03d0e10b8a2b2922e33a7f0ce1ff05668d1fc54573?"
          className="self-start w-6 aspect-square"
        />
        <div className="flex flex-col flex-1 max-md:max-w-full">
          <div className="py-6 pr-2 pl-6 bg-white max-md:pl-5 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
              <div className="flex flex-col w-[31%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow max-md:mt-10">
                  <div className="flex gap-5 justify-between px-0.5 text-base font-medium leading-5 whitespace-nowrap text-blue-950">
                    <div>001</div>
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/7af40117499319ac78407c245161d19f965fe66d0bcbc3de7b79ab41281e9b5a?"
                      className="my-auto w-3.5 aspect-square"
                    />
                  </div>
                  <div className="mt-1 text-2xl font-medium leading-7 text-blue-950">
                    McCarthy & Tims Associates Pvt. Ltd.
                  </div>
                  <div className="flex gap-5 justify-between mt-6 whitespace-nowrap">
                    <div className="flex flex-col flex-1">
                      <div className="text-base leading-5 text-neutral-400">
                        Application Status
                      </div>
                      <div className="flex gap-0 justify-between py-1 mt-2.5 text-sm font-medium leading-4 text-center text-emerald-800 bg-emerald-100 rounded-[999px]">
                        <div className="h-5 w-[18px]" />
                        <div className="flex-auto my-auto">Accepted</div>
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 pb-2 leading-[120%]">
                      <div className="text-base text-neutral-400">
                        Date of Submission
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        02/23/2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[69%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col leading-[120%] max-md:mt-10 max-md:max-w-full">
                  <div className="flex gap-5 justify-between max-md:flex-wrap max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-6 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Certification Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">MBE</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-9 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Application Type
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Re-Certification
                      </div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Application Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">
                        Interview
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-5 justify-between mt-14 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
                    <div className="flex flex-col flex-1 pr-14 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days in Stage
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1">
                      <div className="text-base text-neutral-400">
                        Days Worked
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                    <div className="flex flex-col flex-1 pr-4 whitespace-nowrap">
                      <div className="text-base text-neutral-400">
                        Days Worked+Days in Queue
                      </div>
                      <div className="mt-1.5 text-xl text-blue-950">12</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center p-4 text-sm leading-4 text-gray-600 bg-white border-t border-solid border-t-[color:var(--stroke-soft-200,#E2E4E9)] max-md:max-w-full">
            <div className="flex gap-1 justify-between max-md:flex-wrap max-md:max-w-full">
              <div className="flex gap-1 justify-between whitespace-nowrap">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1ebf679306885bd8e986a16748c82faf1cf8924679afa169b0a7f79d2d0fb78a?"
                  className="w-5 aspect-square"
                />
                <div className="grow my-auto">Note for Escalation:</div>
              </div>
              <div className="flex-auto my-auto max-md:max-w-full">
                The particular section has a misinformation. I am unable to
                pinpoint this particular informations, please verify.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




          </div>







        </div>
      </div>
    </div>
  );
}

export default CardView
