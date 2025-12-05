"use client"

import { Play, Square } from "lucide-react";
import { useState } from "react";

export default function TrackingCard() {

    const [isTracking, setIsTracking] = useState(false);
    const toggleTracking = () => {
        setIsTracking(!isTracking);
    }

    return (
        <div className="w-[90%] h-[500px] bg-white rounded-2xl shadow-lg p-7 border-b border-[#E5E7EB] flex flex-col items-center mt-7">
            <div className="relative w-full h-[320px] flex justify-center">
                <div className="w-[50px] h-[50px] rounded-full bg-[#A4E8D4] absolute right-75 shadow-xl flex justify-center items-center">
                    <img src="/img/star.png" className="w-[20px]"/>
                </div>
                <div className={`w-[300px] h-[300px] rounded-full bg-gradient-to-br 
                    ${isTracking ? "from-[#A4E8D4] to-[#7CC9E8]" : "from-[#B8A4E8] to-[#A4E8D4]"} 
                    flex justify-center items-center shadow-xl transition-all duration-500
                    ${isTracking ? "scale-110" : "scale-100"}
                `}>
                    <div className={`w-[91%] h-[270px] rounded-full bg-white flex flex-col justify-center items-center
                        transition-opacity duration-500 ${isTracking ? "opacity-70" : "opacity-100"}
                    `}>
                        <img src="/img/purple-moon.png" className="w-[40px]"/>
                        {!isTracking ? <p className="font-inter font-bold text-[22px] text-[#1F2937] mt-4 transition-all duration-500">Ready to Track</p> : <p className="font-inter font-bold text-[22px] text-[#1F2937] mt-4 transition-all duration-500">Tracking Sleep...</p>}
                        {!isTracking ? <p className="font-inter font-medium text-[14px] text-[#6B7280] mt-2 transition-all duration-500">Your sleep journey awaits</p> : <p className="font-inter font-medium text-[14px] text-[#6B7280] mt-2 transition-all duration-500">Monitoring your sleep cycle</p>}
                    </div>
                </div>
            </div>
            <div className={`w-[30%] h-[50px] rounded-xl mt-4 flex flex-row justify-center items-center cursor-pointer hover:scale-[1.05] transition-all duration-300 ${isTracking ? "bg-[#F3E8FF]" : "bg-gradient-to-br from-[#9B88D4] to-[#B8A4E8]"}`}  onClick={() => toggleTracking()}>
                {isTracking ? (
                    <>
                        <Square size={24} className="text-[#6B21A8] mr-3" />
                        <p className="font-inter font-medium text-[16px] text-[#6B21A8] text-center">
                            Stop Sleep Tracking
                        </p>
                    </>
                ) : (
                    <>
                        <Play size={24} className="text-white mr-3" />
                        <p className="font-inter font-medium text-[16px] text-white text-center">
                            Start Sleep Tracking
                        </p>
                    </>
                )}
            </div>
            <p className="font-inter font-medium text-[14px] text-[#6B7280] mt-3">Tap to begin monitoring your sleep quality</p>
        </div>
    );
}
