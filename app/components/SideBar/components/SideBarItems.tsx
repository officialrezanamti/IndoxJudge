import Link from "next/link";
import { AiOutlineRadarChart } from "react-icons/ai"; // Radar chart icon
import { AiOutlineBarChart } from "react-icons/ai"; // Bar chart icon
import { MdOutlineScatterPlot } from "react-icons/md"; // Scatter Plot
import { VscGraphLine } from "react-icons/vsc"; //Line plot icon
import { PiGauge } from "react-icons/pi"; //Gauge plot icon
import { RxTable } from "react-icons/rx"; // Table icon
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function SideBarItems(){
    const pathname = usePathname();
    const { resolvedTheme, setTheme } = useTheme();
    return(
        <div className=" w-full h-[80%] overflow-hidden text-sm md:text-base pt-4">
          <ul className="flex flex-col w-full ">
            <Link href={"/radar-chart"}>
              <div
                className={`${
                  pathname === "/radar-chart"
                    ? `${
                        resolvedTheme === "light"
                          ? "active  w-full  px-3 lg:px-5  cursor-pointer "
                          : " dark-active px-3 lg:px-5 w-full cursor-pointer duration-300 "
                      }`
                      : "w-full px-3 lg:px-5 hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
              >
                <li className="py-2 flex items-center gap-1 w-[150px]">
                  <AiOutlineRadarChart />
                  <p className="" > Radar Chart</p>
                </li>
              </div>
            </Link>
            <Link href={"/bar-chart"}>
              <div
                className={`${
                  pathname === "/bar-chart"
                    ? `${
                        resolvedTheme === "light"
                          ? "active px-3 lg:px-5 w-full   cursor-pointer duration-300 "
                          : " dark-active px-3 lg:px-5 w-full  cursor-pointer duration-300 "
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
                          ? "active px-3 lg:px-5 w-full cursor-pointer duration-300 "
                          : " dark-active px-3 lg:px-5 w-full cursor-pointer duration-300 "
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
                        ? "active px-3 lg:px-5 w-full cursor-pointer duration-300"
                          : " dark-active px-3 lg:px-5 w-full  cursor-pointer duration-300"
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
                          ? "active px-3 lg:px-5 w-full cursor-pointer duration-300 "
                          : " dark-active px-3 lg:px-5 w-full  cursor-pointer duration-300 "
                      }`
                      : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                      }`}
              >
                <li className=" py-2 flex items-center gap-1">
                  {resolvedTheme ==='dark' ? <Image
                    src="/images/heatMapWhite.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    />: <Image
                    src="/images/heatMapBlack.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    />}
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
                          ? "active px-3 lg:px-5 w-full   cursor-pointer duration-300 "
                          : " dark-active px-3 lg:px-5 w-full cursor-pointer duration-300 "
                          }`
                          : "px-3 lg:px-5 w-full hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                }`}
                >
                <li className=" py-2 flex items-center gap-1 ">
                  {resolvedTheme ==='dark' ? <Image
                    src="/images/violinWhite.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    
                    /> : <Image
                    src="/images/violinBlack.svg"
                    width={17}
                    height={18}
                    alt="violin plot icon"
                    />}
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
                    ? "active px-3 lg:px-5 w-full  cursor-pointer duration-300 "
                    : " dark-active px-3 lg:px-5 w-full  cursor-pointer duration-300 "
                    }`
                    : "px-3 lg:px-5 w-full  hover:bg-[#cecfcf] dark:hover:bg-[#4b4b4b]  cursor-pointer duration-300"
                    }`}
                    >
                <li className="py-2 flex items-center gap-1  w-[150px]">
                  <PiGauge />
                  <p className="">Gauge Chart</p>
                </li>
              </div>
            </Link>
            <Link href="table">
              <div
                className={`${
                  pathname === "/table"
                  ? `${
                    resolvedTheme === "light"
                    ? "active px-3 lg:px-5 w-full  cursor-pointer duration-300 "
                    : "dark-active px-3 lg:px-5 w-full cursor-pointer duration-300 "
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
    )
}