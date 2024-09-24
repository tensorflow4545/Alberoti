"use client";
import { useState } from "react";
import { IoHomeOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { BsArrowLeftCircle } from "react-icons/bs";
import { RiBloggerLine } from "react-icons/ri";
import { BiBarChartSquare } from "react-icons/bi";
import { BiChart } from "react-icons/bi";
import Link from "next/link";
export default function Sidebar(){
    const [drop,setdrop]=useState(1);
    return(
        <>
           <div className="sm:grid md:grid hidden">
           <aside className="h-screen">
             <nav className="h-screen w-[max] bg-[#FFFFFF] shadow-sm py-[10px] pr-[20px]">
               <div className="flex flex-col gap-[200px]">
                 <div className="basis-1/2 flex flex-col gap-[25px]">
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(1)}><span className={`w-[4px] h-[52px] ${drop==1?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><IoHomeOutline /><p className="md:grid hidden">Dashboard</p></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(2)}><span className={`w-[4px] h-[52px] ${drop==2?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><RiBloggerLine /><p className="md:grid hidden">Blogs</p></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(3)}><span className={`w-[4px] h-[52px] ${drop==3?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><BiBarChartSquare /><p className="md:grid hidden">Finances</p></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(4)}><span className={`w-[4px] h-[52px] ${drop==4?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><BiChart /><p className="md:grid hidden">Pitches</p></button>
                 </div>
                 <div className="basis-1/2 flex flex-col justify-end gap-[25px] ml-[30px]">
                    <div className="flex items-center justify-start gap-[8px] text-[#9D9DAA] text-[16px] font-normal"><IoSettingsOutline />Settings</div>
                    <div className="flex items-center justify-start gap-[8px] text-[#9D9DAA] text-[16px] font-normal"><BsArrowLeftCircle />Log out</div>
                 </div>
               </div>
             </nav>
           </aside>
           </div>

            {/* mobile view */}
           <div className="sm:hidden fixed">
           <aside className="w-screen h-[86px]">
             <nav className="w-screen h-[86px] bg-[#FFFFFF] py-[10px]">
               <div className="flex flex-row">
                 <div className="flex flex-row gap-[25px]">
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(1)}><span className={`w-[4px] h-[52px] ${drop==1?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><IoHomeOutline /></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(2)}><span className={`w-[4px] h-[52px] ${drop==2?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><RiBloggerLine /></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(3)}><span className={`w-[4px] h-[52px] ${drop==3?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><BiBarChartSquare /></button>
                    <button className="flex items-center justify-start gap-[14px] text-[#9D9DAA] text-[16px] font-normal" onClick={() => setdrop(4)}><span className={`w-[4px] h-[52px] ${drop==4?"bg-[#6C5DD3]":"bg-white"} rounded-[5px]`}></span><BiChart /></button>
                 </div>
               </div>
             </nav>
           </aside>
           </div>
        </>
    )
}