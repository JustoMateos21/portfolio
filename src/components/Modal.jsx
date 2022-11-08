import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsCodeSlash } from "react-icons/bs";
import { MdOpenInNew } from "react-icons/md";

const Modal = (props) => {
  if (!props.open) return null;

  return (
    <div className="absolute  justify-center items-center flex h-full w-full md:pl-[25%] md:pr-[25%] bg-slate-500/[0.8]	">
      <div className="sm:w-11/12 flex-col p-6   bg-gray-700 rounded-md">
        <AiOutlineClose
          className="ml-[85%] justify-self-end mb-2 cursor-pointer"
          onClick={props.onClose}
          color="#fff"
          size={30}
        />
        <div className="grid md:grid-cols-3 md:grid-rows-1 sm:grid-rows-2 sm:grid-cols-2 gap-1 h-6/12 w-full">
          <img alt="project" className="" src={props.imgLinks.image1}></img>
          <img
            alt="project"
            className=""
            src={
              props.imgLinks.image2
                ? props.imgLinks.image2
                : props.imgLinks.image1
            }
          ></img>
          <div className=" flex md:flex-col sm:flex-row sm:w-full">
            <div
              className="cursor-pointer flex w-1/2 justify-evenly items-center	hover:scale-105 duration-200 px-6 py-3 m-4 rounded-md bg-gray-500
            "
            >
              <a
                href={props.demoLink}
                target="_blank"
                rel="noreferrer"
                className="
             "
              >
                Demo
              </a>
              <MdOpenInNew size={15} />
            </div>

            <div
              className="cursor-pointer flex w-1/2 justify-evenly items-center	hover:scale-105 duration-200 px-6 py-3 m-4 rounded-md bg-gray-500
            "
            >
              <a
                href={props.codeLink}
                target="_blank"
                rel="noreferrer"
                className="
             "
              >
                Code
              </a>
              <BsCodeSlash size={15} />
            </div>
          </div>
        </div>

        <h2 className="mt-4 text-xl font-semibold	">{props.title}</h2>
        <img src="" alt="" />

        <div className="mt-4">{props.description}</div>
      </div>
    </div>
  );
};

export default Modal;
