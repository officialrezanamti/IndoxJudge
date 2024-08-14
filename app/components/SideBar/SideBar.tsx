"use client";

import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import ToggleBtn from "../Togglebtn/page";
import { useRef, useState } from "react";
import SideBarItems from "./components/SideBarItems";

export default function SideBar() {


  const [isOpen , setIsOpen] = useState(false)
  const sideRef  = useRef<any>()
  const btnRef = useRef<any>()
  const btnRef2 = useRef<any>()
  const sizeSideRef = useRef<any>()
  const toggleBtnRef = useRef<any>()

  const openSideHandler = () =>{
    
    sideRef.current.classList.toggle('isOpen')
    btnRef.current.classList.toggle('close')
    sizeSideRef.current.classList.toggle('sizeSideFix')
    toggleBtnRef.current.classList.toggle('toggleBtn')
    setIsOpen(true)
  }
  const closeSideHandler = () =>{
    btnRef2.current.classList.toggle('close')
    sideRef.current.classList.toggle('isOpen')
    sizeSideRef.current.classList.toggle('sizeSideFix')
    toggleBtnRef.current.classList.toggle('toggleBtn')
    setIsOpen(false)
    
  }
  return (
    
    <>
    <div ref={sizeSideRef} className=" lg:w-[15%] h-full xl:w-[12%] sizeSide  dark:bg-[#212228] ">
     
      <div ref={sideRef} className="h-full w-full shadow-lg -translate-x-full sm:translate-x-0 duration-300 dark:bg-[#2c2d37]">
        
        <div className="flex justify-center items-center w-full overflow-hidden  h-[10%]  ">
          <h2 className="lg:text-xl text-lg  h-full flex justify-center items-center border-b  border-gray-300 w-full text-center">
            Indox Judge
          </h2>
          {isOpen === true ? <button ref={btnRef2} onClick={closeSideHandler} className="  relative right-1 text-lg sm:hidden"><AiOutlineClose /></button> : <button ref={btnRef} className="text-2xl absolute sm:hidden -right-8 " onClick={openSideHandler}><AiOutlineMenu /></button>  }           
        </div>
        <SideBarItems />
        
        <div ref={toggleBtnRef} className=" w-full flex justify-center hideToggleBtn  items-end   ">
          <ToggleBtn />
        </div>
    
      </div>
    </div>
    
</>
  );
}



       