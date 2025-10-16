import Sidebar from "@/components/Sidebar"
import SleepQualityTrendCard from "@/components/SleepQualityTrendCard"
import Topbar from "@/components/Topbar"
import { TriangleAlert, Trophy } from "lucide-react";

export default function SleepHistory() {

  const dailyRecordData = [
    { date: "Oct 9, 2025", day: "Tuesday", minutes: 495, sleepQuality: 80, deepSleep: 110 },
    { date: "Oct 10, 2025", day: "Wednesday", minutes: 405, sleepQuality: 76, deepSleep: 85 },
    { date: "Oct 11, 2025", day: "Thursday", minutes: 330, sleepQuality: 78, deepSleep: 70 },
    { date: "Oct 12, 2025", day: "Friday", minutes: 500, sleepQuality: 87, deepSleep: 130 },
    { date: "Oct 13, 2025", day: "Saturday", minutes: 430, sleepQuality: 56, deepSleep: 80 },
    { date: "Oct 14, 2025", day: "Sunday", minutes: 375, sleepQuality: 75, deepSleep: 95 },
    { date: "Oct 15, 2025", day: "Monday", minutes: 475, sleepQuality: 90, deepSleep: 120 },
  ];

  const getQualityBackgroundColor = (quality: number) => {
    if (quality >= 80) return "#4ADE80" 
    else if (quality >= 60) return "#FACC15"; 
    else return "#F87171"; 
  };

  const getQualityTextColor = (quality: number) => {
    if (quality >= 80) return "#16A34A" 
    else if (quality >= 60) return "#CA8A04"; 
    else return "#DC2626"; 
  };

  const formatTime = (minutes: number) => {
    const h = Math.floor(minutes / 60);
    const m = minutes % 60;
    return `${h}h ${m}m`;
  };
  
  const getAverageSleepTime = () => {
    const totalMinutes = dailyRecordData.reduce((sum, record) => sum + record.minutes, 0);
    const averageMinutes = totalMinutes / dailyRecordData.length;
    return formatTime(Math.round(averageMinutes));
  }

  const getAverageQuality = () => {
    const totalQuality = dailyRecordData.reduce((sum, record) => sum + record.sleepQuality, 0);
    return Math.round(totalQuality / dailyRecordData.length);
  }

  const getAverageDeepSleep = () => {
    const totalDeepSleep = dailyRecordData.reduce((sum, record) => sum + record.deepSleep, 0);
    const averageDeepSleep = totalDeepSleep / dailyRecordData.length;
    return formatTime(Math.round(averageDeepSleep));
  }

  const getBestNight = () => {
    const bestRecord = dailyRecordData.reduce((best, record) => record.sleepQuality > best.sleepQuality ? record : best, dailyRecordData[0]);
    return `${bestRecord.date} (${bestRecord.sleepQuality}%)`;
  }

  const getWorstNight = () => {
    const worstRecord = dailyRecordData.reduce((worst, record) => record.sleepQuality < worst.sleepQuality ? record : worst, dailyRecordData[0]);
    return `${worstRecord.date} (${worstRecord.sleepQuality}%)`;
  }

  return (
    <div className="w-[1521px] h-[1521px] flex flex-row">
      <Sidebar/>
      <div className="flex flex-col w-[1265px] h-[1521px] ml-[256px]">
        <Topbar/>
        <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-12 flex flex-row gap-10">
          <div className="flex flex-col w-[800px] h-full">
            <SleepQualityTrendCard dailyRecordData={dailyRecordData}/>
             <div className="flex flex-col w-[800px] mt-7">
              <p className="font-inter font-semibold text-[20px] text-[#1E293B]">Daily Sleep Records</p>
              {dailyRecordData.reverse().map((data: any) => (
                <div key={data.date} className="w-[800px] h-[100px] bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] flex flex-row p-7 hover:scale-[1.05] transition-all duration-300 mt-5 items-center">
                  <div className="w-[18px] h-[18px] rounded-full" style={{ backgroundColor: getQualityBackgroundColor(data.sleepQuality) }}></div>
                  <div className="flex flex-col w-[300px] ml-6">
                    <p className="font-inter font-semibold text-[18px] text-[#1E293B]">{data.date}</p>
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">{data.day}</p>
                  </div>
                  <div className="flex flex-col w-[100px] ml-6">
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">Total Sleep</p>
                    <p className="font-inter font-semibold text-[18px] text-[#1E293B]">{formatTime(data.minutes)}</p>
                  </div>
                  <div className="flex flex-col w-[100px] ml-6">
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">Quality</p>
                    <p className={`font-inter font-semibold text-[18px] text-[${getQualityTextColor(data.sleepQuality)}]`}>{data.sleepQuality}%</p>
                  </div>
                  <div className="flex flex-col w-[100px] ml-6">
                    <p className="font-inter font-regular text-[16px] text-[#4B5563]">Deep Sleep</p>
                    <p className="font-inter font-semibold text-[18px] text-[#1E293B]">{formatTime(data.deepSleep)}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col w-[400px] h-full gap-7">
            <div className="w-full h-[300px] bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] flex flex-col p-7 hover:scale-[1.05] transition-all duration-300">
              <p className="font-inter font-semibold text-[20px] text-[#1E293B]">Weekly Summary</p>
              <div className="flex flex-row mt-4">
                <p className="font-inter font-regular text-[18px] text-[#4B5563]">Average Sleep Time</p>
                <p className="font-inter font-semibold text-[18px] text-[#1E293B] ml-auto">{getAverageSleepTime()}</p>
              </div>
              <div className="flex flex-row mt-4">
                <p className="font-inter font-regular text-[18px] text-[#4B5563]">Average Quality</p>
                <p className="font-inter font-semibold text-[18px] text-[#6366F1] ml-auto">{getAverageQuality()}%</p>
              </div>
              <div className="flex flex-row mt-4">
                <p className="font-inter font-regular text-[18px] text-[#4B5563]">Deep Sleep Avg</p>
                <p className="font-inter font-semibold text-[18px] text-[#1E293B] ml-auto">{getAverageDeepSleep()}</p>
              </div>
            </div>
            <div className="w-full h-[400px] bg-white rounded-2xl shadow-lgp-6 border-b border-[#E5E7EB] flex flex-col p-7 hover:scale-[1.05] transition-all duration-300">
              <p className="font-inter font-semibold text-[20px] text-[#1E293B]">Weekly Statistic</p>
              <div className="w-full h-[80px] bg-[#F0FDF4] rounded-2xl mt-4 flex flex-row items-center p-5">
                <div className="w-[35px] h-[35px] bg-[#22C55E] rounded-full flex justify-center items-center">
                  <Trophy size={20} color="white"/>
                </div>
                <div className="flex flex-col w-[150px] ml-6">
                  <p className="font-inter font-medium text-[16px] text-[#166534]">Best Night</p>
                  <p className="font-inter font-regular text-[14px] text-[#16A34A]">{getBestNight()}</p>
                </div>
              </div>
              <div className="w-full h-[80px] bg-[#FEF2F2] rounded-2xl mt-4 flex flex-row items-center p-5">
                <div className="w-[35px] h-[35px] bg-[#EF4444] rounded-full flex justify-center items-center">
                  <TriangleAlert size={20} color="white"/>
                </div>
                <div className="flex flex-col w-[150px] ml-6">
                  <p className="font-inter font-medium text-[16px] text-[#991B1B]">Needs Improvement</p>
                  <p className="font-inter font-regular text-[14px] text-[#DC2626]">{getWorstNight()}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};
