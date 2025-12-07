import { NextResponse } from 'next/server';
import db from '@/lib/firebase/firestore';
import {
  collection,
  getDocs,
  query,
  where,
  orderBy
} from 'firebase/firestore';

async function checkRecentSession() {
  const sessionQuery = query(
    collection(db, 'sleep_sessions'),
    where('type', '==', 'END')
  );

  const snap = await getDocs(sessionQuery);

   const sessions = snap.docs.map(doc => {
    const data = doc.data();
    const ts = data.timestamp;

    const jsDate = ts instanceof Date ? ts : ts.toDate();

    return {
      ...data,
      _jsDate: jsDate
    };
  });

  // Sort manually: newest timestamp first
  sessions.sort((a, b) => b._jsDate.getTime() - a._jsDate.getTime());

  const mostRecent = sessions[0]._jsDate;

  return mostRecent.toISOString().split('T')[0];
}

export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const dateRaw = searchParams.get('date');

    let date = dateRaw || (await checkRecentSession());

    const [y, m, d] = date.split('-').map(Number);
    if (!y || !m || !d || m < 1 || m > 12 || d < 1 || d > 31) {
      return NextResponse.json(
        {
          success: false,
          response: { data: [], pagination: {} },
          errors: [{ code: 400, message: 'Invalid date format.' }]
        },
        { status: 400 }
      );
    }
    console.log('Parsed date:', { y, m, d });

    //@param year — The full year designation is required for cross-century date accuracy. If year is between 0 and 99 is used, then year is assumed to be 1900 + year.
    // @param monthIndex — The month as a number between 0 and 11 (January to December).
    // @param date — The date as a number between 1 and 31.
    const start = new Date(y, m-1, d);
    const end = new Date(y, m-1, d, 23, 59, 59, 999);

    const sessionQuery = query(
      collection(db, 'session_records'),
      where('date', '>=', start),
      where('date', '<=', new Date(end))
    );

    const sessionSnap = await getDocs(sessionQuery);

    const sleepReport = sessionSnap.docs[0]?.data() ?? null;

    const hourlyQuery = query(
      collection(db, 'interval_records'),
      where('timestamp', '>=', start),
      where('timestamp', '<=', new Date(end))
    );
    const hourlySnap = await getDocs(hourlyQuery);
    const hourlyData = hourlySnap.docs.map(doc => doc.data());

    return NextResponse.json({
      success: true,
      response: {
        data: { sleepReport, hourlyData },
        pagination: {}
      },
      errors: []
    });

  } catch (err) {
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
