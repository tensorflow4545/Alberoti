"use client";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Image from "next/image";
import blogimg from "@/assets/blog.png";
import { CiCalendar } from "react-icons/ci";
import { TbLayoutSidebarLeftCollapse,TbLayoutSidebarRightCollapse } from "react-icons/tb";
import { useState } from "react";
export default function Hero(){
  const [collapse,setcollapse]=useState("true");
  const blog=[
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
    {
      head:"Company",
      data:"Integer porta scelerisque sagittis, nunc mattis sit convallis nulla ultricies fermentum et rhoncus egestas pretium tempor odio sed",
      date:"2 day ago"
    },
  ]
    return(
      <>
          <div className="w-full h-max">


            <div className="flex flex-row">
             <div className="lg:basis-1/6 sm:grid hidden"><Sidebar/></div>


            <div className="w-full lg:basis-5/6 bg-[#FAFAFB] lg:px-[50px] px-[20px] md:px-[30px] py-[40px]">
                
                {/* code here */}
                <div className="flex items-center justify-stretch mb-[40px]">
                  <div className="w-full basis-1/2 text-[26px] text-[#1B1D21] font-semibold mb-[30px] flex items-center justify-start">Blogs</div>
                  <div className="w-full basis-1/2 flex items-center justify-end gap-[20px]">
                     <button className="w-[137px] h-[46px] bg-[#FFFFFF] rounded-[12px] text-[16px] text-[#6C5DD3] flex items-center justify-center shadow-lg">Add New</button>
                     <button className="w-[137px] h-[46px] bg-[#6C5DD3] rounded-[12px] text-[16px] text-[#FFFFFF] flex items-center justify-center shadow-lg">Preview</button>
                  </div>
                </div>
                
                <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-[20px]">
                {blog.map((Element, index) => {
                  return (
                    <div key={index} className="w-full h-max bg-[#FFFFFF] rounded-[10px] px-[20px] py-[20px]">
                      <div className="w-full flex justify-center"><div className="lg:w-[166px] w-full h-[122px] relative mb-[30px]">
                        <Image src={blogimg} layout="fill" alt="Blog image" className="object-cover rounded-[10px]" />
                      </div></div>
                      <div className="text-[#1B1D21] text-[16px] font-semibold mb-[10px]">{Element.head}</div>
                      <div className="text-[#9D9DAA] text-[13px] font-semibold mb-[20px]">{Element.data}</div>
                      <div className="flex items-center justify-start gap-[5px] text-[10px] text-[#9D9DAA]"><CiCalendar />{Element.date}</div>
                    </div>
                  );
                })}
                </div>
            
            </div>
            </div>
          </div>
      </>
    )
};