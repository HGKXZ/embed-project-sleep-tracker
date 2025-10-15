import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"

export default function Environment() {
  return (
    <div className="w-[1521px] h-[1521px] flex flex-row">
      <Sidebar/>
        <div className="flex flex-col w-[1265px] h-[1521px] ml-[256px]">
          <Topbar/>
          <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px]">
            </div>
          </div>
    </div>
  )
};
