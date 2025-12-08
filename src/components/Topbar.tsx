"use client"

import { useRouter } from "next/navigation";

export default function Topbar() {

    const router = useRouter();

    return (
        <div className="w-full h-[89px] bg-white border-b border-[#E5E7EB] flex flex-row items-center px-8 fixed z-10">
            <div className="w-[80%] flex flex-col">
                <p className="font-inter font-bold text-[24px]">Good Morning</p>
                <p className="font-inter font-regular text-[16px] text-[#4B5563]">Here's your sleep summary for last night</p>
            </div>
            <div className="w-[20%] flex flex-row gap-7 items-center"/>\
        </div>
    )
};