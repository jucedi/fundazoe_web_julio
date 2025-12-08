import { NextResponse } from 'next/server';
import { db } from '@/lib/firebaseAdmin';

export async function GET() {
  try {
    // Consulta a Firestore (Segura en el servidor)
    // Asumimos que la colección se llama 'programas'
    const snapshot = await db.collection('programas').orderBy('orden').get();

    // Si la colección está vacía, snapshot.docs será un array vacío, no error.
    const programas = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    return NextResponse.json(programas);
  } catch (error) {
    console.error('Error fetching programs:', error);
    // Si falla (ej. colección no existe), devolvemos array vacío para no romper el front
    // o un error 500 si prefieres que falle visiblemente.
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}