export function toLightQuality(lightExposure: number): string {
    let lightLevel = "";
    if (lightExposure < 1) {
            lightLevel = "Pitch Dark";
        } else if (lightExposure >= 1 && lightExposure <= 5) {
            lightLevel = "Dim";
        } else if (lightExposure > 5 && lightExposure <= 10) {
            lightLevel = "Ideal";
        } else if (lightExposure > 10) {
            lightLevel = "Bright";
        }
    return lightLevel;
}

export function toTempQuality(temperature: number): string {
    let temperatureQuality = "";
    if (temperature < 15) {
            temperatureQuality = "Too Cold";
        } else if (temperature >= 15 && temperature <= 20) {
            temperatureQuality = "Ideal Cool";
        } else if (temperature > 20 && temperature <= 24) {
            temperatureQuality = "Warm";
        } else if (temperature > 24) {
            temperatureQuality = "Too Hot";
        }
    return temperatureQuality;
}

export function toHumidityQuality(humidity: number): string {
    let humidityQuality = "";
    if (humidity < 40) {
            humidityQuality = "Dry";
        } else if (humidity >= 40 && humidity <= 60) {
            humidityQuality = "Ideal";
        } else if (humidity > 60) {
            humidityQuality = "Humid";
        }
    return humidityQuality;
}

export function toSoundQuality(soundLevel: number): string {
    let soundQuality = "";
    if (soundLevel < 30) {
            soundQuality = "Silent";
        } else if (soundLevel >= 30 && soundLevel <= 45) {
            soundQuality = "Quiet";
        } else if (soundLevel > 45 && soundLevel <= 55) {
            soundQuality = "Disturbing";
        } else if (soundLevel > 55) {
            soundQuality = "Loud";
        }
    return soundQuality;
}