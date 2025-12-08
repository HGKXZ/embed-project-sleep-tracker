"use client";

import axios from "axios";
import { Play } from "lucide-react";
import { useEffect, useState } from "react";

export default function TrackingCard() {
  const [isRunning, setIsRunning] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isDiffuserOn, setDiffuser] = useState(false)

  async function getDiffuserState() {
    axios
      .get("https://blynk.cloud/external/api/get?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&V0")
      .then(response => {
        setDiffuser(response.data)
        setIsRunning(response.data)
      })
      .catch(err => {
        console.error(err);
      });
  }

  async function handleSetDiffuser(target: number) {
    try {
      await axios.get(
        `https://blynk.cloud/external/api/update?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&V0=${target}`
      );
    } catch (err) {
      console.error(err);
    }
  }



  const startAroma = () => {
    setIsRunning(true);
    handleSetDiffuser(1); 
    setTimer(10); // run for 10 seconds
  };

  // Auto countdown + stop
  useEffect(() => {
    if (!isRunning || timer === 0) return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev === 1) {
          setIsRunning(false);
          setDiffuser(false)
          handleSetDiffuser(0)
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning, timer]);


  useEffect(() => {
      getDiffuserState()
    }, []);

  return (
    <div className="w-[90%] h-[500px] bg-white rounded-2xl shadow-lg p-7 border-b border-[#E5E7EB] flex flex-col items-center mt-7">

      <div className="relative w-full h-[320px] flex justify-center">
        <div className="w-[50px] h-[50px] rounded-full bg-[#A4E8D4] absolute right-75 shadow-xl flex justify-center items-center">
          <img src="/img/star.png" className="w-[20px]" />
        </div>

        <div
          className={`w-[300px] h-[300px] rounded-full bg-gradient-to-br 
            ${isRunning ? "from-[#A4E8D4] to-[#7CC9E8]" : "from-[#B8A4E8] to-[#A4E8D4]"} 
            flex justify-center items-center shadow-xl transition-all duration-500
            ${isRunning 
              ? "scale-110" 
              : "scale-100 hover:scale-110 cursor-pointer"
            }
          `}
          onClick={() => !isRunning && startAroma()}
        >
          <div
            className={`w-[91%] h-[270px] rounded-full bg-white flex flex-col justify-center items-center
              transition-opacity duration-500 ${isRunning ? "opacity-70" : "opacity-100"}
            `}
          >
            <img src="/img/drop.png" className="w-[40px]" />

            <p className="font-inter font-bold text-[22px] text-[#1F2937] mt-4">
              {isRunning ? `Running... ${timer}s` : "Aroma Diffuser Ready"}
            </p>

            <p className="font-inter font-medium text-[14px] text-[#6B7280] mt-2">
              {isRunning ? `Auto stop in ${timer}s` : "Tap to start aroma diffuser"}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-[30%] h-[50px] rounded-xl mt-4 flex flex-row justify-center items-center
          transition-all duration-300
          ${isRunning 
            ? "bg-gray-300 cursor-not-allowed" 
            : "bg-gradient-to-br from-[#9B88D4] to-[#B8A4E8] hover:scale-[1.05] cursor-pointer"
          }
        `}
        onClick={() => !isRunning && startAroma()}
      >
        <Play size={24} className={`${isRunning ? "text-gray-500" : "text-white"} mr-3`} />
        <p className={`font-inter font-medium text-[16px] text-center ${isRunning ? "text-gray-500" : "text-white"}`}>
          {isRunning ? "Aroma Diffuser Running" : "Start Aroma Diffuser"}
        </p>
      </div>

      <p className="font-inter font-medium text-[14px] text-[#6B7280] mt-3">
        Aromatherapy will run for 10 seconds
      </p>
    </div>
  );
}
