/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */

import { FaBookOpen, FaDollarSign } from "react-icons/fa";
import "./Course.css";

const Course = ({ course, handleSelected }) => {
  const { name, img, description, price, duration } = course;
  return (
    <div className="relative flex backdrop-blur-xl  flex-col rounded-xl bg-white/30 text-white shadow-md">
      <div className="relative mx-4 mt-6  h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img
          src={img}
          alt="img-blur-shadow"
          className="w-full h-full"
          layout="fill"
        />
      </div>
      <div className="p-6">
        <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
          {name}
        </h5>
        <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
          {description}
        </p>
      </div>
      <div className="flex justify-between items-center ">
        <div className="pl-6 flex flex-1  items-center py-3">
          <span className="text-xl">
            <FaDollarSign />
          </span>
          <p className="">Price : {price}</p>
        </div>
        <div className="flex flex-1 items-center pl-6">
          <span className="text-xl ">
            <FaBookOpen />
          </span>
          <p className=" ml-2">Credit {duration}hr</p>
        </div>
      </div>
      <div className="p-6 w-full flex items-end overflow-hidden ">
        <button onClick={() => handleSelected(course)} className="sign w-full ">
          select
        </button>
      </div>
    </div>
  );
};

export default Course;
