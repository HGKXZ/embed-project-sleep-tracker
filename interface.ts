export interface SessionRecords {
  session_id: string;
  date: string;
  averageHumidity: number;
  averageLightExposure: number;
  averageSoundLevel: number;
  averageTemperature: number;
  sleepQualityScore: number;
  totalSleepDuration: number;
}

export interface IntervalRecords {
  timestamp: string;
  session_id: string;
  sleep_score: number;
}