import Image from "next/image";
import Logo from "@/assets/logo.png";
import avatar from "@/assets/avtaar.png";
import { AiOutlineLeft } from "react-icons/ai";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowDropdown } from "react-icons/io";
export default function Navbar(){
    return(
        <>   
            {/* Desktop and tab view */}
            <div className="sm:grid hidden">
            <div className="w-full h-[94px] z-[40] top-0 lg:px-[50px] md:px-[30px] px-[20px] lg:py-[20px] md:py-[20px] py-[20px] bg-[#FFFFFF]">

            <div className="flex flex-row">
              <div className="basis-1/2 flex items-center justify-start gap-[100px]">
               {/* logo */}
               <div className="lg:w-[105px] md:w-[100px] w-[80px] lg:h-[30px] md:h-[30px] h-[20px] relative">
                <Image src={Logo} alt="Logo Image" fill></Image>
               </div>
               <div className="relative">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-4 py-2 lg:w-[225px] md:-w-[200px] h-[46px] rounded-[15px] border bg-[#FAFAFB] border-[#646464] absolute lg:grid hidden"
                />
              <IoIosArrowDropdown className="relative mt-[15px] ml-[190px] lg:grid hidden" />
              </div>
              <div className="flex gap-[10px] items-center justify-center">
                <div className="text-[12px] text-[#9D9DAA] font-light">Scenario</div>
                <div className="text-[12px] text-[#676E7E] font-norrmal">Default</div>
                <IoIosArrowDropdown/>
              </div>
              </div>
              <div className="basis-1/2">
                 <div className="flex items-center justify-end gap-[20px]">
                   <div className="flex items-center justify-center gap-[5px] text-[14px] text-[#9D9DAA] font-medium">
                   <CiSearch />
                   Search....
                   </div>
                   <div className="flex items-center justify-center gap-[20px]">
                     <div className="lg:w-[46px] md:w-[46px] w-[46px] lg:h-[46px] md:h-[46px] h-[46px] rounded-full relative"><Image src={avatar} fill alt="Avatar image"></Image></div>
                     <div className="flex flex-col gap-[5px]">
                       <div className="text-[14px] text-[#676E7E] font-medium">Robert Fox</div>
                       <div className="text-[14px] text-[#676E7E] font-light">Finance Manager</div>
                     </div>
                   </div>
                 </div>
              </div>
            </div>

            </div>
            </div>

            {/* mobile view */}
            <div className="sm:hidden w-full h-max px-[10px] py-[20px] bg-white">
               <div className="flex items-center justify-between">
                 <div className="text-[#6C5DD3] text-[20px] font-bold"><AiOutlineLeft /></div> 
                 {/* logo */}
                 <div className="w-[75px] h-[21px] relative">
                   <Image src={Logo} alt="Logo Image" fill></Image>
                 </div>
                 <div className="flex items-center justify-center gap-[10px]">
                 <div className="flex items-center justify-center text-[18px] text-[#9D9DAA] font-medium">
                   <CiSearch />
                 </div>
                 <div className="lg:w-[46px] md:w-[46px] w-[46px] lg:h-[46px] md:h-[46px] h-[46px] rounded-full relative"><Image src={avatar} fill alt="Avatar image"></Image></div>
                 </div>
               </div>
               <div className="flex flex-row items-center justify-between mt-[20px]">
                <input
                  type="text"
                  placeholder="Afterglow"
                  className="px-4 py-2 w-[181px] h-[36px] rounded-[15px] border bg-[#FAFAFB] border-[#646464]"
                />
                <div className="flex gap-[10px] items-center justify-center">
                 <div className="text-[12px] text-[#9D9DAA] font-light">Scenario</div>
                 <div className="text-[12px] text-[#676E7E] font-norrmal">Default</div>
                 <IoIosArrowDropdown/>
                </div>
               </div>
            </div>
        </>
    )
}