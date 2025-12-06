import { NextResponse } from 'next/server';
import db from '@/lib/firebase/firestore';
import axios from 'axios';

import {
  collection,
  addDoc,
  getDocs,
  query,
  orderBy,
  limit
} from 'firebase/firestore';

/*
  get /api/sensor-data?temperature=23.5&humidity=45.2&light=300&sound=55.1
*/
export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);

    const temperatureRaw = searchParams.get('temperature');
    const humidityRaw = searchParams.get('humidity');
    const lightRaw = searchParams.get('light');
    const soundRaw = searchParams.get('sound');

    const temperature = temperatureRaw !== null ? parseFloat(temperatureRaw) : null;
    const humidity = humidityRaw !== null ? parseFloat(humidityRaw) : null;
    const light = lightRaw !== null ? parseFloat(lightRaw) : null;
    const sound_level = soundRaw !== null ? parseFloat(soundRaw) : null;


    const sessionQuery = query(
      collection(db, 'sleep_sessions'),
      orderBy('timestamp', 'desc'),
      limit(1)
    );
    const sessionSnap = await getDocs(sessionQuery);
    
    if (sessionSnap.empty) {
      return NextResponse.json(
        {
          success: false,
          response: { data: [], pagination: {} },
          errors: [{ code: 400, message: 'No active sleep session. Cannot record sensor data.' }]
        },
        { status: 400 }
      );
    }

    const activeSessionDoc = sessionSnap.docs.find((d) => d.data().type === 'START');

    if (!activeSessionDoc) {
      return NextResponse.json(
        {
          success: false,
          response: { data: [], pagination: {} },
          errors: [{ code: 400, message: 'No active sleep session (START) found.' }]
        },
        { status: 400 }
      );
    }

    const sessionId = activeSessionDoc.id;
    const now = new Date();

    const payload: Record<string, unknown> = {
      session_id: sessionId,
      timestamp: now,
      temperature: temperature,
      humidity: humidity,
      light: light,
      sound_level: sound_level,
      is_processed: false
    };
    const docRef = await addDoc(collection(db, 'sensor_readings'), payload);

    //------ Blink------
    axios.get(`https://sgp1.blynk.cloud/external/api/update?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&A0=${humidity}`);
    axios.get(`https://sgp1.blynk.cloud/external/api/update?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&A1=${light}`);
    axios.get(`https://sgp1.blynk.cloud/external/api/update?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&A2=${temperature}`);
    axios.get(`https://sgp1.blynk.cloud/external/api/update?token=y9gtpw7iauYC0CJSNe2JHwOjznVsrBTi&A3=${sound_level}`);


    return NextResponse.json({
      success: true,
      response: {
        data: {
          id: docRef.id,
          session_id: sessionId,
          timestamp: now.toISOString(),
          temperature,
          humidity,
          light,
          sound_level
        },
        pagination: {}
      },
      errors: []
    });
  } catch (error) {
    console.error('Firestore POST Error:', error);
    return NextResponse.json(
      {
        success: false,
        response: { data: [], pagination: {} },
        errors: [{ code: 500, message: 'server 500 Error' }]
      },
      { status: 500 }
    );
  }
}
