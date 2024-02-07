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
import NMSDC from "../assests/image 80.png"
import "./listView.css"
import { Link } from 'react-router-dom';


const ListView = (props) => {

  return (
    <div className="justify-center bg-slate-100">


      <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">

        <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">

          <div className="flex flex-col grow justify-between px-4 py-4 mx-auto w-full font-medium bg-white">
            <img
              loading="lazy"
              srcSet={NMSDC}
              className="max-w-full aspect-[1.59] w-[118px]"
            />

            <Link  to="/dashboard"  className="flex gap-2 justify-between px-3 py-2 mt-4 text-sm tracking-normal leading-5 whitespace-nowrap bg-white text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/02df01e0cfc101d3a258cb6e15e685ad201745197a8ffc8fcfbb40195dd7a941?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto">Dashboard</div>
            </Link>


             <Link to="/work-queue" className="flex gap-5 justify-between px-3 py-2 mt-2 w-full text-sm tracking-normal leading-5 text-blue-800 whitespace-nowrap bg-slate-50">
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


            <Link  to="/update-request"  className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 bg-white text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/67c776481b25e2388371c131fc4b5b79aa6643a55f767db8bd798c68158c07b8?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto">Update Requested</div>
            </Link>


            <Link  to="/escalations"  className="flex gap-5 justify-between px-3 py-2 mt-2 w-full whitespace-nowrap bg-white">
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

            <Link  to="/interviews"  className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 whitespace-nowrap bg-white text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/68bb7cbd989489bddd423b490dd86a3b8b1e7c66f7a0e23e8daf00478c6d9aa4?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto">Interviews</div>
            </Link>


            <Link  to="/final-review"  className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 bg-white text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/6e188248c1874cd69018d150db1a0f96fbffb158074575c3d2b4d1946f5d54c8?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto">Final Review</div>
            </Link>


            <Link  to="/faq"  className="flex gap-2 justify-between px-3 py-2 mt-2 text-sm tracking-normal leading-5 whitespace-nowrap bg-white text-slate-500">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0969079433534900bc627a0192094fc43bbf04980896b2a498a00d8f4853f944?"
                className="w-5 aspect-square"
              />
              <div className="flex-auto">FAQs</div>
            </Link>



            <Link  to="/profile"  className="flex gap-5 justify-between pr-1.5 w-full text-lg leading-5 whitespace-nowrap mt-[550px] text-slate-500 max-md:mt-10">
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




            <div className="flex flex-col px-10 py-8 text-sm max-md:px-5 max-md:max-w-full">
              <div className="flex flex-col justify-center items-start py-3.5 pr-16 font-medium tracking-normal text-center whitespace-nowrap border-b border-solid border-b-[color:var(--stroke-soft-200,#E2E4E9)] leading-[143%] text-slate-500 max-md:pr-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between">
                  <div>All</div>
                  <div className="grow justify-center text-blue-800">
                    Certification
                  </div>
                  <div className="grow">Re-Certification</div>
                </div>
              </div>

              <div className="flex gap-5 justify-between mt-6 w-full max-md:flex-wrap max-md:max-w-full">
                <div className="flex gap-4 self-start leading-[120%] text-blue-950">
                  <div className="flex gap-2 justify-between p-2 bg-white rounded-md">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/8e4e3c105fd31a0027fade2b8186c46c06ee26c0976e3db8696aa83f483dc6c6?"
                      className="self-start w-4 aspect-square"
                    />
                    {/* <div className="flex-auto">Enter Keyword</div> */}
                    <input type="text" placeholder="Enter Keyword" />
                  </div>
                  <div className="flex gap-2 justify-between p-2 whitespace-nowrap bg-white rounded-md">
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
                    {/* <div className="grow">Sort By: Newly Added</div> */}


                    <select className="self-start px-2 py-1 rounded-md">
    <option value="newlyAdded">Newly Added</option>
    <option value="oldestAdded">Oldest Added</option>
    {/* Add more options as needed */}
  </select>
                    
                    {/* <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/9de4f91b3015e698f4866dec813d5d7ee9834fa761dd5a06ac0557747507ff31?"
                      className="self-start w-4 aspect-square"
                    /> */}
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
              </div>
              <div className="flex gap-5 justify-between px-3 py-2 mt-8 w-full tracking-normal border-b border-solid bg-stone-50 border-b-slate-500 border-b-opacity-40 text-blue-950 max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto leading-[143%]">
                  Application Name & No.
                </div>
                <div className="flex gap-5 justify-between leading-5 max-md:flex-wrap max-md:max-w-full">
                  <div>Certification Type</div>
                  <div>Application Type</div>
                  <div>Application Stage</div>
                  <div>Date of Submission</div>
                  <div>Days in Stage</div>
                  <div>Days in Queue</div>
                  <div>Total Days</div>
                  <div className="grow my-auto leading-[143%]">Status</div>
                </div>
              </div>
              <div className="flex gap-5 justify-between py-2.5 pr-7 pl-3 mt-2 w-full text-gray-600 bg-white leading-[143%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto tracking-normal">
                  001 | Nimbus Technology
                </div>
                <div className="flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-stretch my-auto tracking-normal">
                    MBE
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Certification
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Update Re...
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    02/12/23
                  </div>
                  <div className="self-stretch my-auto tracking-normal">10</div>
                  <div className="self-stretch my-auto tracking-normal">14</div>
                  <div className="self-stretch my-auto tracking-normal">20</div>
                  <div className="grow justify-center self-stretch px-5 py-1.5 font-medium text-center text-amber-900 whitespace-nowrap bg-red-200 leading-[114%] rounded-[999px]">
                    In Review
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between p-2.5 mt-1 w-full text-gray-600 bg-white leading-[143%] max-md:flex-wrap max-md:max-w-full">
                <div className="flex-auto my-auto tracking-normal">
                  001 | Nimbus Technology
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-stretch my-auto tracking-normal">
                    MBE
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Re-Cert.
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Escalation
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    02/12/23
                  </div>
                  <div className="self-stretch my-auto tracking-normal">10</div>
                  <div className="self-stretch my-auto tracking-normal">14</div>
                  <div className="self-stretch my-auto tracking-normal">20</div>
                  <div className="grow justify-center self-stretch px-5 py-1.5 font-medium text-center text-cyan-900 bg-sky-200 leading-[114%] rounded-[999px]">
                    Final Review
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between items-center px-3.5 py-2.5 mt-1 text-gray-600 whitespace-nowrap bg-white leading-[143%] max-md:flex-wrap max-md:max-w-full">
                <div className="grow self-stretch my-auto tracking-normal">
                  001 | Cyrus & Cyprus Technology Pvt...{" "}
                </div>
                <div className="self-stretch my-auto tracking-normal">MBE</div>
                <div className="self-stretch my-auto tracking-normal">
                  Re-Cert...
                </div>
                <div className="self-stretch my-auto tracking-normal">
                  Escalation
                </div>
                <div className="self-stretch my-auto tracking-normal">
                  02/12/23
                </div>
                <div className="self-stretch my-auto tracking-normal">10</div>
                <div className="self-stretch my-auto tracking-normal">14</div>
                <div className="self-stretch my-auto tracking-normal">20</div>
                <div className="justify-center self-stretch px-5 py-1.5 font-medium text-center bg-violet-300 leading-[114%] rounded-[999px] text-violet-950">
                  Update Re..
                </div>
              </div>
              <div className="flex gap-5 justify-between py-2.5 pr-7 pl-3 mt-1 w-full text-gray-600 bg-white leading-[143%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto tracking-normal">
                  001 | Nimbus Technology
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-stretch my-auto tracking-normal">
                    MBE
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Re-Cert.
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Escalation
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    02/12/23
                  </div>
                  <div className="self-stretch my-auto tracking-normal">10</div>
                  <div className="self-stretch my-auto tracking-normal">14</div>
                  <div className="self-stretch my-auto tracking-normal">20</div>
                  <div className="grow justify-center self-stretch px-5 py-1.5 font-medium text-center text-amber-900 bg-red-200 leading-[114%] rounded-[999px]">
                    In Review
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between py-2.5 pr-7 pl-3 mt-1 w-full text-gray-600 bg-white leading-[143%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto tracking-normal">
                  001 | Nimbus Technology
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-stretch my-auto tracking-normal">
                    MBE
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Re-Cert.
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Escalation
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    02/12/23
                  </div>
                  <div className="self-stretch my-auto tracking-normal">10</div>
                  <div className="self-stretch my-auto tracking-normal">14</div>
                  <div className="self-stretch my-auto tracking-normal">20</div>
                  <div className="grow justify-center self-stretch px-5 py-1.5 font-medium text-center bg-blue-200 leading-[114%] rounded-[999px] text-blue-950">
                    Interview
                  </div>
                </div>
              </div>
              <div className="flex gap-5 justify-between py-2.5 pr-7 pl-3 mt-1 w-full text-gray-600 bg-white leading-[143%] max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
                <div className="flex-auto my-auto tracking-normal">
                  001 | Nimbus Technology
                </div>
                <div className="flex gap-5 justify-between items-center whitespace-nowrap max-md:flex-wrap max-md:max-w-full">
                  <div className="grow self-stretch my-auto tracking-normal">
                    MBE
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Re-Cert.
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    Escalation
                  </div>
                  <div className="self-stretch my-auto tracking-normal">
                    02/12/23
                  </div>
                  <div className="self-stretch my-auto tracking-normal">10</div>
                  <div className="self-stretch my-auto tracking-normal">14</div>
                  <div className="self-stretch my-auto tracking-normal">20</div>
                  <div className="grow justify-center self-stretch px-5 py-1.5 font-medium text-center text-amber-900 bg-red-200 leading-[114%] rounded-[999px]">
                    In Review
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

export default ListView
