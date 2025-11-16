"use client"

import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import TrackingCard from "@/components/TrackingCard"
import { Droplet, Lightbulb, Sun, Thermometer, Volume2 } from "lucide-react"
import { dailyRecordData } from "../../../mock";

export default function Forest() {

  const environment = {
    humidity: dailyRecordData[dailyRecordData.length -1].averageHumidity,
    lightExposure: dailyRecordData[dailyRecordData.length -1].averageLightExposure,
    soundLevel: dailyRecordData[dailyRecordData.length -1].averageSoundLevel,
    temperature: dailyRecordData[dailyRecordData.length -1].averageTemperature,
  }

  return (
    <div className="w-[1425px] h-[1521px] flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-[80%] h-[1521px] ml-[20%]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-7 flex flex-col">
            <div className="flex flex-col items-center">
              <TrackingCard/>
            </div>
            <div className="flex flex-row items-center mt-10">
              <Lightbulb size={32} className="text-[#A855F7] ml-15"/>
              <p className="font-inter font-bold text-[18px] text-[#1E2A4A] ml-2">Real-time Environment Insights</p>
            </div>
            <div className="flex flex-row gap-7 mt-7 justify-center w-[90%] self-center">
               <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FFEDD5] rounded-xl flex justify-center items-center">
                    <Thermometer size={20} className="text-[#F97316]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Optimal</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Temperature</p>
                <p className="font-inter font-bold text-[34px]">{environment.temperature} °C</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#DBEAFE] rounded-xl flex justify-center items-center">
                    <Volume2 size={20} className="text-[#3B82F6]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Quiet</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Noise Level</p>
                <p className="font-inter font-bold text-[34px]">{environment.soundLevel} dB</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FEF9C3] rounded-xl flex justify-center items-center">
                    <Sun size={20} className="text-[#EAB308]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Dark</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Light Level</p>
                <p className="font-inter font-bold text-[34px]">{environment.lightExposure} lux</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#CCFBF1] rounded-xl flex justify-center items-center">
                    <Droplet size={20} className="text-[#14B8A6]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Perfect</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Humidity</p>
                <p className="font-inter font-bold text-[34px]">{environment.humidity}%</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};
