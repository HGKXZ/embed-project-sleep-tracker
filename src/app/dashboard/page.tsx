import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import { Brain, Clock, Heart, Moon } from "lucide-react"
import EnvironmentCard from "@/components/EnvironmentCard"
import SleepQualityTrendCard from "@/components/SleepQualityTrendCard"
import SleepInsightsCard from "@/components/SleepInsightsCard"

export default function Dashboard() {

  const dailyRecordData = [
    { date: "Oct 9, 2025", day: "Tuesday", minutes: 495, sleepQuality: 80, deepSleep: 110 },
    { date: "Oct 10, 2025", day: "Wednesday", minutes: 405, sleepQuality: 76, deepSleep: 85 },
    { date: "Oct 11, 2025", day: "Thursday", minutes: 330, sleepQuality: 78, deepSleep: 70 },
    { date: "Oct 12, 2025", day: "Friday", minutes: 500, sleepQuality: 87, deepSleep: 130 },
    { date: "Oct 13, 2025", day: "Saturday", minutes: 430, sleepQuality: 56, deepSleep: 80 },
    { date: "Oct 14, 2025", day: "Sunday", minutes: 375, sleepQuality: 75, deepSleep: 95 },
    { date: "Oct 15, 2025", day: "Monday", minutes: 475, sleepQuality: 90, deepSleep: 120 },
  ];

  return (
    <div className="w-[1521px] h-[1521px] flex flex-row">
        <Sidebar/>
        <div className="flex flex-col w-[1265px] h-[1521px] ml-[256px]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-12">
            <div className="w-full h-[200px] flex flex-row gap-7">
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#EFF6FF] rounded-xl flex justify-center items-center">
                    <Clock size={20} className="text-[#2563EB]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">+15 min</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Total Sleep</p>
                <p className="font-inter font-bold text-[34px]">7h 45m</p>
              </div>
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
                <div className="w-full h-[55px] flex flex-row justify-between items-center mb-6">
                  <div className="w-[55px] h-[55px] bg-[#FAF5FF] rounded-xl flex justify-center items-center">
                    <Moon size={20} className="text-[#9333EA]"/>
                  </div>
                  <p className="font-inter font-medium text-[16px] text-[#16A34A]">Good</p>
                </div>
                <p className="font-inter font-medium text-[16px] text-[#4B5563] mb-2">Sleep Quality</p>
                <p className="font-inter font-bold text-[34px]">85%</p>
              </div>
              <div className="w-[400px] h-full bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] p-6 flex flex-col hover:scale-[1.05] transition-all duration-300">
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
            <div className="w-full h-[450px] flex flex-row mt-8 gap-7">
              <SleepQualityTrendCard dailyRecordData={dailyRecordData}/>
              <EnvironmentCard/>
            </div>
            <div className="w-full h-[400px] flex flex-row mt-8">
              <SleepInsightsCard/>
            </div>
          </div>
        </div>
    </div>
  )
};
