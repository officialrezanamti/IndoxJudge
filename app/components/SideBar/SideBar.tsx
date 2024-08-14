"use client";
import Link from "next/link";
import { AiOutlineRadarChart } from "react-icons/ai"; // Radar chart icon
import { AiOutlineBarChart } from "react-icons/ai"; // Bar chart icon
import { MdOutlineScatterPlot } from "react-icons/md"; // Scatter Plot
import { VscGraphLine } from "react-icons/vsc"; //Line plot icon
import { PiGauge } from "react-icons/pi"; //Gauge plot icon
import { RxTable } from "react-icons/rx"; // Table icon
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";
import ToggleBtn from "../Togglebtn/page";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useRef, useState } from "react";

export default function SideBar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [isOpen , setIsOpen] = useState(false)
  const sideRef  = useRef<any>()
  const btnRef = useRef<any>()
  const btnRef2 = useRef<any>()

  const openSideHandler = () =>{
    
    sideRef.current.classList.toggle('isOpen')
    btnRef.current.classList.toggle('close')
    setIsOpen(true)
  }
  const closeSideHandler = () =>{
    btnRef2.current.classList.toggle('close')
    sideRef.current.classList.toggle('isOpen')
    setIsOpen(false)
    
  }
  return (
    // dark:bg-[#2c2d37]
    <>
    <div className=" lg:w-[15%] h-full xl:w-[12%] dark:bg-[#212228] ">
     
      <div ref={sideRef} className="h-full w-full shadow-lg -translate-x-full sm:translate-x-0 duration-300  dark:bg-[#2c2d37]">
        {/* Title section */}
        <div className="flex justify-center items-center w-full overflow-hidden  h-[10%]  ">
          <h2 className="lg:text-xl text-lg  h-full flex justify-center items-center border-b  border-gray-300 w-full text-center">
            Indox Judge
          </h2>
          {isOpen === true ? <button ref={btnRef2} onClick={closeSideHandler} className="  relative right-1 text-lg sm:hidden"><AiOutlineClose /></button> : <button ref={btnRef} className="text-2xl absolute sm:hidden -right-8 " onClick={openSideHandler}><AiOutlineMenu /></button>  }
            
        </div>
        {/* Title section */}

         {/* Item section */}
         <div className=" w-full h-[80%] overflow-hidden text-sm md:text-base pt-4">
          <ul className="flex flex-col w-full ">
            <Link href={"/radar-chart"}>
              <div
                className={`${
                  pathname === "/radar-chart"
                    ? `${
                        resolvedTheme === "light"
                          ? "active w-full hover:bg-[#cecfcf] px-3 lg:px-5  cursor-pointer  dark:hover:bg-[#4b4b4b]"
                          : " px-3 lg:px-5 w-full hover:bg-[#cecfcf]   cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                      }`
                      : "w-full px-3 lg:px-5 hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className="py-2 flex items-center gap-1">
                  <AiOutlineRadarChart />
                  <p className="flex"> Radar Chart</p>
                </li>
              </div>
            </Link>
            <Link href={"/bar-chart"}>
              <div
                className={`${
                  pathname === "/bar-chart"
                    ? `${
                        resolvedTheme === "light"
                          ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          : "  px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                      }`
                    : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className="py-2 flex items-center gap-1">
                  <AiOutlineBarChart />
                  <p>Bar Chart</p>
                </li>
              </div>
            </Link>
            <Link href={"/scatter-plot"}>
              <div
                className={`${
                  pathname === "/scatter-plot"
                    ? `${
                        resolvedTheme === "light"
                          ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          : " px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                      }`
                    : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className="py-2 flex items-center gap-1 ">
                  <MdOutlineScatterPlot />
                  <p>Scatter Plot</p>
                </li>
              </div>
            </Link>
            <Link href={"/line-plot"}>
              <div
                className={`${
                  pathname === "/line-plot"
                    ? `${
                        resolvedTheme === "light"
                        ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          : "  px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          }`
                          : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className=" py-2 flex items-center gap-1">
                  <VscGraphLine />
                  <p>Line Plot</p>
                </li>
              </div>
            </Link>
            <Link href={"/heatmap"}>
              <div
                className={`${
                  pathname === "/heatmap"
                  ? `${
                        resolvedTheme === "light"
                          ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          : "  px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                      }`
                      : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                      }`}
              >
                <li className=" py-2 flex items-center gap-1">
                  <Image
                    src="/images/heatmap-icon2.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    className="dark:text-white"
                    />
                  <p>Heatmap</p>
                </li>
              </div>
            </Link>
            <Link href={"/violin-plot"}>
              <div
                className={`${
                  pathname === "/violin-plot"
                  ? `${
                    resolvedTheme === "light"
                          ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          : "px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 dark:hover:bg-[#4b4b4b]"
                          }`
                          : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
                >
                <li className=" py-2 flex items-center gap-1 ">
                  <Image
                    src="/images/chart-violin-plot-svgrepo-com.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    />
                  <p>Violin Plot</p>
                </li>
              </div>
            </Link>
            <Link href={"/gauge-chart"}>
              <div
                className={`${
                  pathname === "/gauge-chart"
                  ? `${
                    resolvedTheme === "light"
                    ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 "
                    : " px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 "
                    }`
                    : "px-3 lg:px-5 w-full  hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                    }`}
                    >
                <li className="py-2 flex items-center gap-1">
                  <PiGauge />
                  <p>Gauge Chart</p>
                </li>
              </div>
            </Link>
            <Link href="table">
              <div
                className={`${
                  pathname === "/table"
                  ? `${
                    resolvedTheme === "light"
                    ? "active px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 "
                    : "px-3 lg:px-5 w-full hover:bg-[#cecfcf]  cursor-pointer duration-300 "
                      }`
                    : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className=" py-2 flex items-center gap-1 ">
                  <RxTable />
                  <p>Table</p>
                </li>
              </div>
            </Link>
          </ul>
        </div>
        {/* Item section */}


        {/* btn */}
        <div className=" w-full  flex justify-center items-end ">
          <ToggleBtn />
        </div>
        {/* btn */}
      </div>
    </div>
    
</>
  );
}



       