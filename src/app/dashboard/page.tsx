import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import { Brain, Clock, Heart, Moon } from "lucide-react"
import EnvironmentCard from "@/components/EnvironmentCard"
import SleepQualityTrendCard from "@/components/SleepQualityTrendCard"
import SleepInsightsCard from "@/components/SleepInsightsCard"

export default function Dashboard() {
  return (
    <div className="w-[1521px] h-[1521px] flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-[1265px] h-[1521px] ml-[256px]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-12">
            <div className="w-full h-[200px] flex flex-row gap-7">
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#EFF6FF] rounded-xl flex justify-center items-center">
                    <Clock size={20} className="text-[#2563EB]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">+15 min</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Total Sleep</p>
                <p className="font-inter font-bold text-[34px]">7h 45m</p>
              </div>
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FAF5FF] rounded-xl flex justify-center items-center">
                    <Moon size={20} className="text-[#9333EA]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Good</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Sleep Quality</p>
                <p className="font-inter font-bold text-[34px]">85%</p>
              </div>
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#EEF2FF] rounded-xl flex justify-center items-center">
                    <Brain size={20} className="text-[#4F46E5]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#2563EB]">4 cycles</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Deep Sleep</p>
                <p className="font-inter font-bold text-[34px]">2h 15m</p>
              </div>
              {/* <div className="w-[300px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#F0FDF4] rounded-xl flex justify-center items-center">
                    <Heart size={20} className="text-[#16A34A]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Normal</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Avg Heart Rate</p>
                <p className="font-inter font-bold text-[34px]">62 bpm</p>
              </div> */}
            </div>
            <div className="w-full h-[400px] flex flex-row mt-12 gap-7">
              <SleepQualityTrendCard/>
              <EnvironmentCard/>
            </div>
            <div className="w-full h-[400px] flex flex-row mt-12">
              <SleepInsightsCard/>
            </div>
          </div>
        </div>
    </div>
  )
};
