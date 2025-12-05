"use client";

import { useState } from "react";
import { ChartLine, Bed, Thermometer, TreePine, PanelLeftClose, PanelLeft } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname();
    const router = useRouter();
    const [collapsed, setCollapsed] = useState(false);

    return (
        <aside  className={`h-full bg-white flex flex-col shadow-lg p-5 transition-all duration-300
            ${collapsed ? "w-[5%]" : "w-[20%]"}`}>

            {/* Header */}
            <div className="flex flex-row items-center justify-between">
                {!collapsed && (
                    <div className="flex flex-row items-center">
                        <div className="w-[40px] h-[40px] bg-gradient-to-br from-[#A855F7] to-[#C084FC] rounded-xl mr-3 flex justify-center">
                            <img src="/img/moon.png" alt="Moon Icon" className="w-[12px] h-[14px] self-center"/>
                        </div>
                        <p className="font-inter font-bold text-[20px]">SleepWise</p>
                    </div>
                )}

                <button
                    className="p-2 rounded-lg hover:bg-gray-100"
                    onClick={() => setCollapsed(!collapsed)}
                >
                    {collapsed ? <PanelLeft size={20}/> : <PanelLeftClose size={20}/>}
                </button>
            </div>

            {/* Menu */}
            <div className="mt-8 flex flex-col gap-2">
                <SidebarItem
                    active={pathname === "/dashboard"}
                    label="Dashboard"
                    icon={<ChartLine size={20}/>}
                    collapsed={collapsed}
                    onClick={() => router.push("/dashboard")}
                />

                <SidebarItem
                    active={pathname === "/sleep-history"}
                    label="Sleep History"
                    icon={<Bed size={20}/>}
                    collapsed={collapsed}
                    onClick={() => router.push("/sleep-history")}
                />

                <SidebarItem
                    active={pathname === "/environment"}
                    label="Environment"
                    icon={<Thermometer size={20}/>}
                    collapsed={collapsed}
                    onClick={() => router.push("/environment")}
                />

                <SidebarItem
                    active={pathname === "/forest"}
                    label="Forest"
                    icon={<TreePine size={20}/>}
                    collapsed={collapsed}
                    onClick={() => router.push("/forest")}
                />
            </div>
        </aside >
    );
}

function SidebarItem({ active, label, icon, collapsed, onClick }: any) {
    return (
        <div
            onClick={onClick}
            className={`h-[48px] flex flex-row items-center p-5 rounded-lg gap-3 cursor-pointer transition-all duration-200
                ${active ? "bg-[#F3E8FF]" : "bg-white"}`}
        >
            <div className={`${active ? "text-[#A855F7]" : "text-[#4B5563]"}`}>
                {icon}
            </div>

            {!collapsed && (
                <p className={`font-inter font-medium text-[16px] 
                    ${active ? "text-[#A855F7]" : "text-[#4B5563]"}`}>
                    {label}
                </p>
            )}
        </div>
    );
}
