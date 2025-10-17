import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import EnvironmentCard from "@/components/EnvironmentCard"
import SleepInsightsCard from "@/components/SleepInsightsCard"

export default function Environment() {
  return (
    <div className="w-[1425px] h-[1521px] flex flex-row">
      <Sidebar/>
        <div className="flex flex-col w-[80%] h-[1521px] ml-[20%]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-7">
            <div className="w-full h-[400px] flex flex-row gap-7">
              <div className="w-[40%]">
                <EnvironmentCard/>
              </div>
              <div className="w-[60%]">
                <SleepInsightsCard/>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
};
