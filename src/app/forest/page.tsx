"use client"

import Topbar from "@/components/Topbar";
import { Droplet, Lightbulb, Sun, Thermometer, Volume2 } from "lucide-react";
import { useEffect, useState } from "react";

import DiffuserCard from "@/components/DiffuserCard";
import axios from "axios";
import { toHumidityQuality, toLightQuality, toSoundQuality, toTempQuality } from "../utils/qualityUtil";

export default function Forest() {
  const [dailyRecordData, setDailyRecordData] = useState<any>();

  async function loadData() {
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - 7);

    axios
      .get(`/api/current-sensor`)
      .then(response => {
        const raw = response.data.response.data;
        setDailyRecordData(raw);
      })
      .catch(err => {
        console.error(err);
      }); 
  }

  useEffect(() => {
      loadData()
    }, []);

  const environment = {
    humidity: dailyRecordData?.humidity,
    lightExposure: dailyRecordData?.light,
    soundLevel: dailyRecordData?.sound_level,
    temperature: dailyRecordData?.temperature,
  }

  return (
    <div className="w-full h-[1521px] flex flex-row">
            <div className="flex flex-col w-full h-[1521px]">
              <Topbar/>
              <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-7">
            <div className="flex flex-col items-center">
              <DiffuserCard/>
            </div>
            <div className="flex flex-row items-center mt-10">
              <Lightbulb size={32} className="text-[#A855F7] ml-15"/>
              <p className="font-inter font-bold text-[18px] text-[#1E2A4A] ml-2">Real-time Environment Insights</p>
            </div>
            <div className="flex flex-row gap-7 mt-7 justify-center w-[90%] mx-auto">
               <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FFEDD5] rounded-xl flex justify-center items-center">
                    <Thermometer size={20} className="text-[#F97316]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">{toTempQuality(environment.temperature)}</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Temperature</p>
                <p className="font-inter font-bold text-[34px]">{environment.temperature} °C</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#DBEAFE] rounded-xl flex justify-center items-center">
                    <Volume2 size={20} className="text-[#3B82F6]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">{toSoundQuality(environment.soundLevel)}</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Noise Level</p>
                <p className="font-inter font-bold text-[34px]">{environment.soundLevel} dB</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FEF9C3] rounded-xl flex justify-center items-center">
                    <Sun size={20} className="text-[#EAB308]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">{toLightQuality(environment.lightExposure)}</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Light Level</p>
                <p className="font-inter font-bold text-[34px]">{environment.lightExposure} lux</p>
              </div>
              <div className="w-[25%] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#CCFBF1] rounded-xl flex justify-center items-center">
                    <Droplet size={20} className="text-[#14B8A6]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">{toHumidityQuality(environment.humidity)}</p>
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
