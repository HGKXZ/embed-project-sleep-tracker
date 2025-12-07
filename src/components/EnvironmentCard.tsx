"use client"

import { roundTo } from "@/app/utils/math";
import { toHumidityQuality, toLightQuality, toSoundQuality, toTempQuality } from "@/app/utils/qualityUtil";
import { Droplet, Sun, Thermometer, Volume2 } from "lucide-react";
import { useState } from "react";

interface EnvironmentCardProps {
   environment: {
    humidity?: number;
    lightExposure?: number;
    soundLevel?: number;
    temperature?: number;
  };
}

export default function EnvironmentCard({ environment }: EnvironmentCardProps) {
    return (
        <div className="w-full h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] flex flex-col p-7 hover:scale-[1.03] transition-all duration-300">
            <p className="font-inter font-bold text-[23px] text-[#1E2A4A]">Average Environment</p>
            <div className="w-full h-[50px] flex flex-row mt-5 items-center">
                <div className="w-[45px] h-[45px] rounded-xl bg-[#FEFCE8] justify-center items-center flex flex-col mr-4">
                    <Sun size={20} className="text-[#CA8A04]"/>
                </div>
                <div className="flex flex-col">
                    <p className="font-inter font-medium text-[18px] text-[#1E2A4A]">Light Level</p>
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">{toLightQuality(environment.lightExposure ?? 0)}</p>
                </div>
                <p className="font-inter font-bold text-[21px] text-[#1E2A4A] ml-auto">{roundTo(environment.lightExposure ?? 0)} lux</p>
            </div>
            <div className="w-full h-[50px] flex flex-row mt-5 items-center">
                <div className="w-[45px] h-[45px] rounded-xl bg-[#FEF2F2] justify-center items-center flex flex-col mr-4">
                    <Thermometer size={20} className="text-[#DC2626]"/>
                </div>
                <div className="flex flex-col">
                    <p className="font-inter font-medium text-[18px] text-[#1E2A4A]">Temperature</p>
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">{toTempQuality(environment.temperature ?? 0)}</p>
                </div>
                <p className="font-inter font-bold text-[21px] text-[#1E2A4A] ml-auto">{roundTo(environment.temperature ?? 0)} °C</p>
            </div>
            <div className="w-full h-[50px] flex flex-row mt-5 items-center">
                <div className="w-[45px] h-[45px] rounded-xl bg-[#EFF6FF] justify-center items-center flex flex-col mr-4">
                    <Droplet size={20} className="text-[#2563EB]"/>
                </div>
                <div className="flex flex-col">
                    <p className="font-inter font-medium text-[18px] text-[#1E2A4A]">Humidity</p>
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">{toHumidityQuality(environment.humidity ?? 0)}</p>
                </div>
                <p className="font-inter font-bold text-[21px] text-[#1E2A4A] ml-auto">{roundTo(environment.humidity ?? 0)} %</p>
            </div>
            <div className="w-full h-[50px] flex flex-row mt-5 items-center">
                <div className="w-[45px] h-[45px] rounded-xl bg-[#F9FAFB] justify-center items-center flex flex-col mr-4">
                    <Volume2 size={20} className="text-[#4B5563]"/>
                </div>
                <div className="flex flex-col">
                    <p className="font-inter font-medium text-[18px] text-[#1E2A4A]">Noise Level</p>
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">{toSoundQuality(environment.soundLevel ?? 0)}</p>
                </div>
                <p className="font-inter font-bold text-[21px] text-[#1E2A4A] ml-auto">{roundTo(environment.soundLevel ?? 0)} dB</p>
            </div>
        </div>
    )
};