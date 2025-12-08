import db from '@/lib/firebase/firestore';
import {
  addDoc,
  collection,
  getDocs,
  limit,
  orderBy,
  query,
  Timestamp,
  updateDoc
} from 'firebase/firestore';
import { NextResponse } from 'next/server';

type StatusType = "START" | "END";

export async function GET(req: Request) {
  try {

    const url = new URL(req.url);
    const type = url.searchParams.get('type') as StatusType;

    // Validate type
    if (!type || !["START", "END"].includes(type)) {
      return NextResponse.json(
        {
          success: false,
          response: null,
          errors: [{ code: 400, message: 'Invalid type, must be START or END' }]
        },
        { status: 400 }
      );
    }

    // Validate type must not be the same with the latest status
    const statusRef = collection(db, "sleep_sessions");

    const q = query(statusRef, orderBy("timestamp", "desc"), limit(1));
    const snapshot = await getDocs(q);

    const latestDoc = snapshot.docs[0] ?? null;
    const latestType = latestDoc?.data()?.type ?? null;

    if (latestType === type) {
        return NextResponse.json(
            {
                success: false,
                response: null,
                errors: [{ code: 400, message: `Cannot send ${type} again. Last status is already ${latestType}` }]
            },
            { status: 400 }
        );
    }

    // Save status in Firestore
    if (type == "START") {
      const docRef = await addDoc(statusRef, {
        type,
        timestamp: Timestamp.now()
      });

      return NextResponse.json(
        {
          success: true,
          response: { 
              id: docRef.id, 
              timestamp: Timestamp.now().toDate().toISOString(),
              type
          },
          errors: []
        },
        { status: 201 }
      );
    }

    if (type === "END") {
      if (!latestDoc) {
        // No START exists to end
        return NextResponse.json(
          {
            success: false,
            response: null,
            errors: [{ code: 400, message: "No START session to end" }],
          },
          { status: 400 }
        );
      }

      const endedAt = Timestamp.now();

      await updateDoc(latestDoc.ref, {
        type: "END",
        ended_at: endedAt,
      });

      return NextResponse.json(
        {
          success: true,
          response: {
            id: latestDoc.id,
            type: "END",
            timestamp: latestDoc.data().timestamp.toDate().toISOString(),
            ended_at: endedAt.toDate().toISOString(),
          },
          errors: [],
        },
        { status: 200 }
      );
    }
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