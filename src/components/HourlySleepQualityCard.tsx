"use client";

import { HourlyRecords } from "../../interface";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

interface HourlySleepQualityCardProps {
  timestamp: any; // Firestore Timestamp or JS Date
  hourlyRecordData: HourlyRecords[];
}

function toJsDate(ts: any): Date | null {
  if (!ts) return null;
  if (typeof ts.toDate === "function") return ts.toDate();
  if (typeof ts.seconds === "number") {
    return new Date(ts.seconds * 1000 + ts.nanoseconds / 1e6);
  }

  return new Date(ts);
}

export default function HourlySleepQualityCard({
  timestamp,
  hourlyRecordData,
}: HourlySleepQualityCardProps) {
  const jsDate = toJsDate(timestamp);

  function formatHour(timestamp: string | number | Date): string {
    const date = toJsDate(timestamp) ?? new Date(timestamp);
    return date.toLocaleTimeString("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: "Asia/Bangkok",
    });
  }

  function formatDate(date: Date): string {
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      timeZone: "Asia/Bangkok",
    });
  }

  return (
    <div className="w-full h-[450px] bg-white rounded-2xl shadow-lg p-7 border-b border-[#E5E7EB] flex flex-col">
      <div className="w-full flex flex-row justify-between mb-2 px-3 items-center">
        <p className="font-inter font-bold text-[23px] text-[#1E2A4A]">
          Enviroment Sleep Score
        </p>

        <p className="font-inter font-regular text-[18px] text-[#4B5563]">
          {jsDate ? formatDate(jsDate) : "loading..."}
        </p>
      </div>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={hourlyRecordData.map((record) => ({
            date: formatHour(record.timestamp),
            quality: record.sleep_score,
          }))}
          margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          barSize={40}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            tickFormatter={(date: string) => date.split(",")[0]}
          />
          <YAxis tickFormatter={(value: number) => `${value}%`} />
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
          <Bar dataKey="quality" fill="#C084FC" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
