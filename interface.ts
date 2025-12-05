export interface SessionRecords {
  date: string;
  averageHumidity: number;
  averageLightExposure: number;
  averageSoundLevel: number;
  averageTemperature: number;
  sleepQualityScore: number;
  totalSleepDuration: number;
}

export interface HourlyRecords {
  timestamp: string;
  session_id: string;
  sleep_score: number;
}