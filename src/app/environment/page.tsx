import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import EnvironmentCard from "@/components/EnvironmentCard"
import SleepInsightsCard from "@/components/SleepInsightsCard"

export default function Environment() {
  return (
    <div className="w-[1521px] h-[1521px] flex flex-row">
      <Sidebar/>
        <div className="flex flex-col w-[1265px] h-[1521px] ml-[256px]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-12">
            <div className="w-full h-[400px] flex flex-row gap-7">
              <EnvironmentCard/>
              <SleepInsightsCard/>
            </div>
          </div>
        </div>
    </div>
  )
};
