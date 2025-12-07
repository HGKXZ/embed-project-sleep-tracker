import { SessionRecords, IntervalRecords } from "./interface";

export const dailyRecordData: SessionRecords[] = [
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-09T00:00:00Z", averageHumidity: 58.3, averageLightExposure: 12.4, averageSoundLevel: 28.5, averageTemperature: 22.1, totalSleepDuration: 495, sleepQualityScore: 80},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-10T00:00:00Z", averageHumidity: 63.1, averageLightExposure: 8.7, averageSoundLevel: 25.9, averageTemperature: 21.7, totalSleepDuration: 405, sleepQualityScore: 76},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-11T00:00:00Z", averageHumidity: 47.9, averageLightExposure: 5.3, averageSoundLevel: 30.2, averageTemperature: 19.8, totalSleepDuration: 330, sleepQualityScore: 78},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-12T00:00:00Z", averageHumidity: 52.4, averageLightExposure: 18.6, averageSoundLevel: 32.1, averageTemperature: 23.0, totalSleepDuration: 500, sleepQualityScore: 87},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-13T00:00:00Z", averageHumidity: 60.2, averageLightExposure: 22.0, averageSoundLevel: 29.7, averageTemperature: 24.2, totalSleepDuration: 430, sleepQualityScore: 56},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-14T00:00:00Z", averageHumidity: 49.8, averageLightExposure: 10.2, averageSoundLevel: 26.4, averageTemperature: 20.6, totalSleepDuration: 375, sleepQualityScore: 75},
    { session_id: "session_2025-10-15_vr8mnh", date: "2025-10-15T00:00:00Z", averageHumidity: 55.5, averageLightExposure: 6.8, averageSoundLevel: 27.9, averageTemperature: 22.5, totalSleepDuration: 475, sleepQualityScore: 90},
];
export const intervalRecordData: IntervalRecords[] = [
    { timestamp: "2025-10-15T17:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 85 },
    { timestamp: "2025-10-15T18:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 90 },
    { timestamp: "2025-10-15T19:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 92 },
    { timestamp: "2025-10-15T20:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 95 },
    { timestamp: "2025-10-15T21:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 91 },
    { timestamp: "2025-10-15T22:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 89 },
    { timestamp: "2025-10-15T23:00:00Z", session_id: "session_2025-10-15_vr8mnh", sleep_score: 88 },
]