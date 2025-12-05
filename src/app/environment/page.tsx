"use client"
import Sidebar from "@/components/Sidebar"
import Topbar from "@/components/Topbar"
import EnvironmentCard from "@/components/EnvironmentCard"
import SleepInsightsCard from "@/components/SleepInsightsCard"
import { useState, useEffect } from "react";
import { SessionRecords, HourlyRecords } from "../../../interface"
import axios from "axios"

export default function Environment() {
  const [dailyRecordData, setDailyRecordData] = useState<SessionRecords>();
  const [hourlyRecordData, setHourlyRecordData] = useState<HourlyRecords[]>([]);
  const [isOn, setIsOn] = useState(false);
  const [loading, setLoading] = useState(false);
  function loadData(){
      setLoading(true)
      axios
      .get("/api/daily-report") //urgent: ?date=2025-11-29
      .then(response => {  
        setDailyRecordData(response.data.response.data.sleepReport)
        setHourlyRecordData(response.data.response.data.hourlyData)
      })
      .catch(err => {
        console.error(err)
      })
      axios
      .get("/api/current-status")
      .then(response => {  
        console.log(response.data.response.data)
        if(response.data.response.data.type == 'START') {setIsOn(true)}
        else {setIsOn(false)}
      })
      .catch(err => {
        console.error(err)
      })
      setLoading(false)
  }

  useEffect(() => {
    loadData()
  }, []);
  const environment = {
    humidity: dailyRecordData?.averageHumidity ? dailyRecordData?.averageHumidity : 0,
    lightExposure: dailyRecordData?.averageLightExposure ? dailyRecordData?.averageLightExposure : 0,
    soundLevel: dailyRecordData?.averageSoundLevel ? dailyRecordData?.averageSoundLevel : 0,
    temperature: dailyRecordData?.averageTemperature ? dailyRecordData?.averageTemperature : 0,
  }

  return (
    <div className="w-full h-[1521px] flex flex-row">
            <div className="flex flex-col w-full h-[1521px]">
              <Topbar/>
              <div className="w-full h-[1441px] bg-[#F3F4F6] mt-[80px] p-7">
            <div className="w-full h-[400px] flex flex-row gap-7">
              <div className="w-[40%]">
                <EnvironmentCard environment={environment}/>
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
