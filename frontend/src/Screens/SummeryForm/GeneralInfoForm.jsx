


import * as React from "react";
import "./GeneralInfoForm.css";
import CaretLeft from "../../assests/CaretLeft.png"
import Bell from "../../assests/Bell.png"
import UserCircle from "../../assests/UserCircle.png"
import CaretDown from "../../assests/CaretDown.png"
import { Link } from "react-router-dom"

const GeneralInfoForm = () => {
  return (
    <>
      <div className="border border-red-300 h-[20vh] flex flex-col p-32 items-start gap-64 self-stretch Header-background">


        <div className="flex justify-between items-start self-stretch">
          <div className="flex">
            <img src={CaretLeft} />
            <span> Exit Audit</span>
          </div>


          <div className="flex gap-3">
            <img src={Bell} />
            <div className="w-[1px] h-[32px] bg-[#668294]">  </div>
            <div className="flex gap-2">
              <img className="w-[24px]" src={UserCircle} />
              <p>John Doe</p>
            </div>

            <img className="w-[16px]" src={CaretDown} />

          </div>
        </div>

        <div>


        </div>

      </div>

      <div className="w-full flex h-[80vh] border border-yellow-300">



        <div className=" w-[20%] flex flex-col self-stretch px-4 pt-4 pb-12 text-sm tracking-normal leading-5 text-gray-600 whitespace-nowrap bg-white">
          <div className="flex gap-2.5 justify-between px-2 py-3 font-medium text-blue-800 bg-blue-50 shadow-sm">
            <div className="grow">Summary Form</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0a7276d620287be0e18bf68db434021f2409e4c5ff87487cb77c696793683937?"
              className="w-5 aspect-square"
            />
          </div>
          <div className="shrink-0 mt-4 h-px bg-neutral-300" />
          <div className="flex flex-col px-2 py-3 mt-4">
            <div>General Information</div>
            <div className="mt-8">Business Information</div>
            <div className="mt-8">Management & Controls</div>
            <div className="mt-8">Business Description</div>
            <div className="mt-8">References</div>
          </div>
          <div className="shrink-0 mt-4 h-px bg-neutral-300" />
          <div className="flex flex-col px-2 py-3 mt-4">
            <div>Assessment</div>
            <div className="mt-8">Documents</div>
            <div className="mt-8">Comment Log</div>
          </div>
        </div>

        <div className="w-[70%] border border-green-300 p-4">

          <div className="flex justify-between items-center gap-2">

            <div className="flex gap-4">
              <Link to="/general-info-form/form" > Form </Link>
              <Link to="/general-info-form/doc" > Documents </Link>
            </div>

            <div className="flex gap-1.5 justify-center p-1.5 text-sm font-medium tracking-normal leading-5 text-center text-blue-800 whitespace-nowrap border border-solid shadow-sm border-[color:var(--Main-blue,#0045AC)]">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/af36900af28ff83ac5f6e97230e74734cc186c3d997edd99c7caf60db02c148e?"
                className="w-5 aspect-square"
              />
              <div className="grow">Print Summary Form</div>
            </div>


          </div>

        </div>
      </div>
    </>
  );
}





export default GeneralInfoForm
